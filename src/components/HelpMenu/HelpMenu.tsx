import { FaXmark } from "react-icons/fa6";
import KeyboardKey from "./KeyboardKey";

interface Props {
  open?: boolean;
  handleVisibility: (open: boolean) => void;
}

const HelpMenu = ({ open = false, handleVisibility }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <header className="fixed top-0 left-0 right-0 bg-primary text-white flex items-center px-4 py-3 z-10">
        <button
          aria-label="close"
          onClick={() => handleVisibility(false)}
          className="text-white"
        >
          <FaXmark size={20} />
        </button>
        <h2 className="ml-4 text-lg font-semibold">Keyboard Shortcuts</h2>
      </header>
      <div className="flex-1 overflow-y-auto mt-15">
        <div className="max-w-sm mx-auto px-4 mb-4">
          <div className="flex items-center justify-between mt-4">
            <KeyboardKey top="!" bottom="1" value="= 1" />
            <KeyboardKey top="@" bottom="2" value="= 2" />
            <KeyboardKey top="#" bottom="3" value="= 3" />
          </div>
          <div className="flex items-center justify-between">
            <KeyboardKey top="$" bottom="4" value="= 4" />
            <KeyboardKey top="%" bottom="5" value="= 5" />
            <KeyboardKey top="^" bottom="6" value="= 6" />
          </div>
          <div className="flex items-center justify-between">
            <KeyboardKey top="&" bottom="7" value="= 7" />
            <KeyboardKey top="*" bottom="8" value="= 8" />
            <KeyboardKey top="(" bottom="9" value="= 9" />
          </div>
          <div className="flex items-center justify-between">
            <KeyboardKey top=")" bottom="0" value="= 10" />
            <KeyboardKey top="_" bottom="-" value="= 11" />
            <KeyboardKey top="+" bottom="=" value="= 12" />
          </div>
          <div className="flex items-center justify-between">
            <KeyboardKey top="N" value="New Game" single />
            <KeyboardKey top="Z" value="Undo" single />
            <span style={{ width: "140px" }} />
          </div>
          <div className="flex items-center justify-between">
            <KeyboardKey
              width="175px"
              top="Space Bar"
              value="Roll Virtual Dice"
              single
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpMenu;
