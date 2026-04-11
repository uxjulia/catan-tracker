import Dice from "./Dice";

interface Props {
  onClick?: () => void;
  rolls?: number[];
}

const DiceRoller = ({ onClick, rolls = [] }: Props) => {
  const isMobile = navigator.maxTouchPoints > 0;
  const prompt = isMobile
    ? "Tap here to roll virtual dice"
    : "Click here to roll virtual dice";

  return (
    <div className="mb-4">
      <div role="button" onClick={onClick} className="cursor-pointer py-2">
        {rolls.length === 0 && (
          <p className="text-center text-sm text-gray-500 pb-2">{prompt}</p>
        )}
        <div className="flex justify-evenly">
          {rolls.map((roll, index) => (
            <Dice key={index} value={roll} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiceRoller;
