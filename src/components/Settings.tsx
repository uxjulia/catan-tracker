import { FaAngleDown, FaTree, FaKeyboard, FaHeart } from "react-icons/fa6";
import PlayerSelect from "./PlayerSelect";
import InputField from "./InputField";
import { AppState } from "../types";

interface Toggles {
  diceInput: boolean;
  numPadInput: boolean;
  resourceLog: boolean;
  diceLog: boolean;
  resourceTiles: boolean;
  twelveSideDice: boolean;
}

interface Props {
  players: string[];
  toggles: Toggles;
  handleSelect: (value: number | "Clear") => void;
  onPlayerNameChange: (index: number, name: string) => void;
  onToggle: (key: keyof AppState, value: boolean) => void;
  onOpenResourceTracker: () => void;
  onOpenHelpMenu: () => void;
  onOpenAbout: () => void;
}

interface ToggleRowProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleRow = ({ label, checked, onChange }: ToggleRowProps) => (
  <div className="flex items-center justify-between py-1.5">
    <span className="text-sm text-gray-700">{label}</span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-primary transition-colors" />
      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
    </label>
  </div>
);

const Settings = ({
  players,
  toggles,
  handleSelect,
  onPlayerNameChange,
  onToggle,
  onOpenResourceTracker,
  onOpenHelpMenu,
  onOpenAbout,
}: Props) => {
  return (
    <div className="mb-2">
      <details open className="group border border-gray-200 rounded">
        <summary className="flex items-center justify-between px-3 py-2 cursor-pointer select-none bg-white hover:bg-gray-50 rounded">
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">
            Settings
          </span>
          <FaAngleDown className="text-gray-500 transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-3 pb-3">
          {/* Options section */}
          <div className="flex items-center my-3">
            <div className="flex-1 border-t border-gray-200" />
            <span className="mx-2 text-xs text-gray-500 bg-white px-1">
              Options
            </span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <div className="mb-2">
            <PlayerSelect
              playerCount={players.length}
              onChange={handleSelect}
            />
            {players.map((player, i) => (
              <InputField
                key={i}
                id={String(i)}
                label="Player Name"
                value={player}
                onChange={onPlayerNameChange}
              />
            ))}
          </div>
          <hr />
          <div className="my-3">
            <button
              id="enter-resources"
              title="Enter Resources"
              onClick={onOpenResourceTracker}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-green-800 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors"
            >
              <FaTree />
              Track Resources
            </button>
          </div>

          {/* Visibility section */}
          <div className="flex items-center my-3">
            <div className="flex-1 border-t border-gray-200" />
            <span className="mx-2 text-xs text-gray-500 bg-white px-1">
              Visibility
            </span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <div>
            <ToggleRow
              label="Number Pad"
              checked={toggles.numPadInput}
              onChange={(v) => onToggle("showNumPadInput", v)}
            />
            <ToggleRow
              label="Virtual Dice"
              checked={toggles.diceInput}
              onChange={(v) => onToggle("showDiceInput", v)}
            />
            <ToggleRow
              label="Dice Log"
              checked={toggles.diceLog}
              onChange={(v) => onToggle("showDiceLog", v)}
            />
            <ToggleRow
              label="Resource Tiles"
              checked={toggles.resourceTiles}
              onChange={(v) => onToggle("showResourceTiles", v)}
            />
            <ToggleRow
              label="Resource Log"
              checked={toggles.resourceLog}
              onChange={(v) => onToggle("showResourceLog", v)}
            />
            <ToggleRow
              label="12-sided Die"
              checked={toggles.twelveSideDice}
              onChange={(v) => onToggle("showTwelveSideDice", v)}
            />
          </div>

          {/* Other section */}
          <div className="flex items-center my-3">
            <div className="flex-1 border-t border-gray-200" />
            <span className="mx-2 text-xs text-gray-500 bg-white px-1">
              Other
            </span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <div>
            <button
              id="keyboard-shortcuts"
              title="View keyboard shortcuts"
              onClick={onOpenHelpMenu}
              className="flex items-center gap-2 text-sm text-primary hover:underline py-1"
            >
              <FaKeyboard />
              Keyboard Shortcuts
            </button>
            <button
              id="show-love"
              title="Show love to the developer"
              onClick={onOpenAbout}
              className="flex items-center gap-2 text-sm text-primary hover:underline py-1"
            >
              <FaHeart />
              Show Love
            </button>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Settings;
