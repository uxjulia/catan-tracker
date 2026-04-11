import { AppAction, AppState, Resources } from "./types";
import { nextPlayer, resetPlayers } from "./utils";

export const blankResources: Resources = {
  2: { 1: "" },
  3: { 1: "", 2: "" },
  4: { 1: "", 2: "" },
  5: { 1: "", 2: "" },
  6: { 1: "", 2: "" },
  8: { 1: "", 2: "" },
  9: { 1: "", 2: "" },
  10: { 1: "", 2: "" },
  11: { 1: "", 2: "" },
  12: { 1: "" },
};

export const initialState: AppState = {
  players: [],
  rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  log: [],
  resources: blankResources,
  activePlayer: 0,
  fullScreen: false,
  diceRolls: [],
  twelveSideRoll: undefined,
  showDiceInput: true,
  showNumPadInput: true,
  showResourceLog: false,
  showDiceLog: true,
  showResourceTiles: true,
  showTwelveSideDice: false,
  displayHelpMenu: false,
  displayResourceTracker: false,
  displayAboutPage: false,
  displayConfirmation: false,
  lastPlayer: "",
  resourceDescription: [],
  resourceLog: [],
};

function advancePlayer(
  state: AppState,
  option: "next" | "back",
): Partial<AppState> {
  const total = state.players.length;
  if (total === 0) return {};
  const next = nextPlayer(state.activePlayer, option);
  let activePlayer: number;
  if (next >= total) activePlayer = 0;
  else if (next < 0) activePlayer = total - 1;
  else activePlayer = next;
  const lastPlayer =
    state.log.length === 0
      ? state.players[0]
      : state.players[state.activePlayer];
  return { activePlayer, lastPlayer };
}

export function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ROLL": {
      const { roll, resources } = action.payload;
      const index = roll - 2;
      const newRolls = [...state.rolls];
      newRolls[index]++;
      const playerUpdate = advancePlayer(state, "next");
      return {
        ...state,
        rolls: newRolls,
        log: [String(roll), ...state.log],
        resourceDescription: resources,
        resourceLog: [...resources, ...state.resourceLog],
        ...playerUpdate,
      };
    }

    case "UNDO": {
      if (state.log.length === 0) return state;
      const lastRoll = Number(state.log[0]) - 2;
      const newRolls = [...state.rolls];
      if (newRolls[lastRoll] > 0) newRolls[lastRoll]--;
      const newLog = state.log.slice(1);
      const rl = state.resourceDescription.length;
      const newResourceLog = state.resourceLog.slice(rl);
      const playerUpdate = advancePlayer(state, "back");
      return {
        ...state,
        rolls: newRolls,
        log: newLog,
        resourceLog: newResourceLog,
        ...playerUpdate,
      };
    }

    case "RESET":
      return {
        ...initialState,
        players: state.players,
        resources: state.resources,
        showDiceInput: state.showDiceInput,
        showNumPadInput: state.showNumPadInput,
        showResourceLog: state.showResourceLog,
        showDiceLog: state.showDiceLog,
        showResourceTiles: state.showResourceTiles,
        showTwelveSideDice: state.showTwelveSideDice,
      };

    case "SET_PLAYERS": {
      const oldTotal = state.players.length;
      const newTotal =
        action.payload === "Clear" ? oldTotal : Number(action.payload);
      const players = resetPlayers(oldTotal, newTotal, state.players);
      return { ...state, players, activePlayer: 0 };
    }

    case "SET_PLAYER_NAME": {
      const { index, name } = action.payload;
      const players = [...state.players];
      players[index] = name;
      return { ...state, players };
    }

    case "SET_ACTIVE_PLAYER":
      return { ...state, activePlayer: action.payload };

    case "ROLL_DICE": {
      const { roll1, roll2, roll12 } = action.payload;
      return { ...state, diceRolls: [roll1, roll2], twelveSideRoll: roll12 };
    }

    case "SET_RESOURCE": {
      const { tileValue, slot, value } = action.payload;
      const resources = {
        ...state.resources,
        [tileValue]: {
          ...state.resources[tileValue],
          [slot]: value,
        },
      };
      return { ...state, resources };
    }

    case "CLEAR_RESOURCES":
      return { ...state, resources: blankResources };

    case "CLEAR_DICE_ROLLS":
      return { ...state, diceRolls: [] };

    case "SET_BOOL":
      return { ...state, [action.payload.key]: action.payload.value };

    default:
      return state;
  }
}
