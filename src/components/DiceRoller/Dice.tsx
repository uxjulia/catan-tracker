import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa6";

const diceColors: Record<number, string> = {
  1: "#78909c",
  2: "#5d4037",
  3: "#f57f17",
  4: "#004d40",
  5: "#164da6",
  6: "#b71c1c",
};

interface Props {
  value: number;
  size?: number;
}

const Dice = ({ value, size = 48 }: Props) => {
  const color = diceColors[value];
  const props = { size, color };
  switch (value) {
    case 1:
      return <FaDiceOne {...props} />;
    case 2:
      return <FaDiceTwo {...props} />;
    case 3:
      return <FaDiceThree {...props} />;
    case 4:
      return <FaDiceFour {...props} />;
    case 5:
      return <FaDiceFive {...props} />;
    case 6:
      return <FaDiceSix {...props} />;
    default:
      return null;
  }
};

export default Dice;
