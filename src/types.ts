export interface Resources {
  [tileValue: number]: { [slot: number]: string };
}

export interface AppState {
  players: string[];
  rolls: number[]; // 11 elements — index 0 = roll of 2
  log: string[];
  resources: Resources;
  activePlayer: number;
  fullScreen: boolean;
  diceRolls: number[];
  twelveSideRoll: number | undefined;
  showDiceInput: boolean;
  showNumPadInput: boolean;
  showResourceLog: boolean;
  showDiceLog: boolean;
  showResourceTiles: boolean;
  showTwelveSideDice: boolean;
  displayHelpMenu: boolean;
  displayResourceTracker: boolean;
  displayAboutPage: boolean;
  displayConfirmation: boolean;
  lastPlayer: string;
  resourceDescription: string[];
  resourceLog: string[];
}

export type AppAction =
  | { type: "ROLL"; payload: { roll: number; resources: string[] } }
  | { type: "UNDO" }
  | { type: "RESET" }
  | { type: "SET_PLAYERS"; payload: number | "Clear" }
  | { type: "SET_PLAYER_NAME"; payload: { index: number; name: string } }
  | { type: "SET_ACTIVE_PLAYER"; payload: number }
  | {
      type: "ROLL_DICE";
      payload: { roll1: number; roll2: number; roll12: number };
    }
  | {
      type: "SET_RESOURCE";
      payload: { tileValue: number; slot: number; value: string };
    }
  | { type: "CLEAR_RESOURCES" }
  | { type: "CLEAR_DICE_ROLLS" }
  | { type: "SET_BOOL"; payload: { key: keyof AppState; value: boolean } };
