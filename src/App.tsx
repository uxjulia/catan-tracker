import { useEffect, useReducer } from "react";
import random from "random";
import { FaExpand, FaCompress } from "react-icons/fa6";
import DiceChart from "./components/Chart";
import DiceInput from "./components/DiceInput";
import Settings from "./components/Settings";
import PlayerIcons from "./components/PlayerIcons";
import LoggedRolls from "./components/LoggedRolls";
import SiteLayout from "./components/SiteLayout";
import DiceRoller from "./components/DiceRoller";
import DiceRollDisplay from "./components/DiceRollDisplay";
import HelpMenu from "./components/HelpMenu";
import ResourceTracker from "./components/ResourceTracker";
import ResourceDisplay from "./components/ResourceDisplay";
import Footer from "./components/Footer";
import About from "./components/About";
import ConfirmationDialog from "./components/ConfirmationDialog";
import { logKey } from "./utils";
import { reducer, initialState } from "./reducer";

function getResources(
  resources: Record<number, Record<number, string>>,
  value: number,
): string[] {
  const obj = resources[value];
  if (!obj) return [];
  return Object.values(obj).filter((v) => v !== "");
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rollDie = () => {
    const roll1 = random.int(1, 6);
    const roll2 = random.int(1, 6);
    const roll12 = random.int(1, 12);
    dispatch({ type: "ROLL_DICE", payload: { roll1, roll2, roll12 } });
    const total = roll1 + roll2;
    const resources = getResources(state.resources, total);
    dispatch({ type: "ROLL", payload: { roll: total, resources } });
  };

  const handleRoll = (value: number) => {
    dispatch({ type: "CLEAR_DICE_ROLLS" });
    const resources = getResources(state.resources, value);
    dispatch({ type: "ROLL", payload: { roll: value, resources } });
  };

  const handleUndo = () => {
    dispatch({ type: "UNDO" });
  };

  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.nodeName === "INPUT" ||
        target.nodeName === "LI" ||
        target.nodeName === "BUTTON" ||
        target.nodeName === "DIV"
      )
        return;

      e.preventDefault();
      const n = logKey(e);
      if (n === false || n === null) return;

      if (n === "ROLL") {
        rollDie();
      } else if (n === "UNDO") {
        handleUndo();
      } else if (n === "NEW") {
        dispatch({
          type: "SET_BOOL",
          payload: { key: "displayConfirmation", value: true },
        });
      } else {
        dispatch({
          type: "SET_BOOL",
          payload: { key: "diceRolls", value: false },
        });
        handleRoll(Number(n));
      }
    };

    window.addEventListener("keydown", handlePress);
    return () => window.removeEventListener("keydown", handlePress);
  });

  const lastRoll = state.log[0];

  const rollDisplaySection = (
    <div className="flex">
      <div className="flex-1">
        <DiceRollDisplay value={lastRoll} onClick={rollDie} />
        {state.showResourceTiles && state.resourceDescription.length > 0 && (
          <ResourceDisplay resourceDescription={state.resourceDescription} />
        )}
        {state.showDiceInput && (
          <DiceRoller
            key={state.rolls.reduce((a, b) => a + b, 0)}
            onClick={rollDie}
            rolls={state.diceRolls}
          />
        )}
      </div>
      {state.showTwelveSideDice && state.twelveSideRoll !== undefined && (
        <div className="w-1/4">
          <DiceRollDisplay
            value={state.twelveSideRoll}
            onClick={rollDie}
            bgColor="#ffffff"
            d12
            fontColor="#222"
          />
        </div>
      )}
    </div>
  );

  return (
    <>
      <SiteLayout
        fullScreen={state.fullScreen}
        left={
          <div>
            <ConfirmationDialog
              open={state.displayConfirmation}
              handleVisibility={(v) =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayConfirmation", value: v },
                })
              }
              handleConfirm={() => dispatch({ type: "RESET" })}
            />
            <About
              open={state.displayAboutPage}
              handleVisibility={(v) =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayAboutPage", value: v },
                })
              }
            />
            <HelpMenu
              open={state.displayHelpMenu}
              handleVisibility={(v) =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayHelpMenu", value: v },
                })
              }
            />
            <ResourceTracker
              resources={state.resources}
              onChange={(tileValue, slot, value) =>
                dispatch({
                  type: "SET_RESOURCE",
                  payload: { tileValue, slot, value },
                })
              }
              onClearResources={() => dispatch({ type: "CLEAR_RESOURCES" })}
              open={state.displayResourceTracker}
              handleVisibility={(v) =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayResourceTracker", value: v },
                })
              }
            />

            {!state.fullScreen && (
              <div className="flex justify-end">
                <button
                  id="expand-chart-button"
                  title="Expand Chart Area"
                  onClick={() =>
                    dispatch({
                      type: "SET_BOOL",
                      payload: { key: "fullScreen", value: true },
                    })
                  }
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <FaExpand size={14} />
                </button>
              </div>
            )}
            {state.fullScreen && (
              <div className="flex justify-end">
                <button
                  onClick={() =>
                    dispatch({
                      type: "SET_BOOL",
                      payload: { key: "fullScreen", value: false },
                    })
                  }
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <FaCompress size={14} />
                </button>
              </div>
            )}

            {state.fullScreen && (
              <div>
                {state.lastPlayer && (
                  <p className="text-center text-primary mb-2">
                    {state.lastPlayer} rolled
                  </p>
                )}
                {rollDisplaySection}
                {state.players.length > 0 && (
                  <PlayerIcons
                    players={state.players}
                    activePlayer={state.activePlayer}
                    onClick={(index) =>
                      dispatch({ type: "SET_ACTIVE_PLAYER", payload: index })
                    }
                  />
                )}
              </div>
            )}
            <DiceChart
              key={`${state.rolls.join(",")}-${state.fullScreen}`}
              lastRoll={lastRoll}
              data={state.rolls}
            />
            {state.showDiceLog && <LoggedRolls data={state.log} />}
            {state.showResourceLog && (
              <LoggedRolls
                resourceLog
                data={state.resourceLog}
                highlight={false}
                totalText="Total Resource Pulls"
                lastText="Last Resources"
                onOpenResourceTracker={() =>
                  dispatch({
                    type: "SET_BOOL",
                    payload: { key: "displayResourceTracker", value: true },
                  })
                }
                resources={state.resources}
              />
            )}
          </div>
        }
        right={
          <div>
            {state.lastPlayer && (
              <p className="text-center text-primary mb-2">
                {state.lastPlayer} rolled a
              </p>
            )}
            {rollDisplaySection}
            {state.showNumPadInput && (
              <DiceInput onClick={handleRoll} undo={handleUndo} />
            )}
            <button
              className="w-full mt-2 mb-3 py-2 px-4 bg-primary text-white font-medium rounded hover:bg-primary-dark transition-colors"
              onClick={() =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayConfirmation", value: true },
                })
              }
            >
              Start New Game
            </button>

            {state.players.length > 0 && (
              <PlayerIcons
                players={state.players}
                activePlayer={state.activePlayer}
                onClick={(index) =>
                  dispatch({ type: "SET_ACTIVE_PLAYER", payload: index })
                }
              />
            )}
            <Settings
              players={state.players}
              toggles={{
                diceInput: state.showDiceInput,
                numPadInput: state.showNumPadInput,
                resourceLog: state.showResourceLog,
                diceLog: state.showDiceLog,
                resourceTiles: state.showResourceTiles,
                twelveSideDice: state.showTwelveSideDice,
              }}
              handleSelect={(val) =>
                dispatch({ type: "SET_PLAYERS", payload: val })
              }
              onPlayerNameChange={(index, name) =>
                dispatch({
                  type: "SET_PLAYER_NAME",
                  payload: { index, name },
                })
              }
              onToggle={(key, value) =>
                dispatch({ type: "SET_BOOL", payload: { key, value } })
              }
              onOpenResourceTracker={() =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayResourceTracker", value: true },
                })
              }
              onOpenHelpMenu={() =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayHelpMenu", value: true },
                })
              }
              onOpenAbout={() =>
                dispatch({
                  type: "SET_BOOL",
                  payload: { key: "displayAboutPage", value: true },
                })
              }
            />
          </div>
        }
      />
      <Footer
        onClick={() =>
          dispatch({
            type: "SET_BOOL",
            payload: { key: "displayAboutPage", value: true },
          })
        }
      />
    </>
  );
}
