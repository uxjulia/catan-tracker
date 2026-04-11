import { FaDiceD20 } from "react-icons/fa6";

interface Props {
  value?: number | string;
  onClick?: () => void;
  bgColor?: string;
  d12?: boolean;
  fontColor?: string;
}

const DiceRollDisplay = ({
  value,
  onClick,
  bgColor = "#b02c2c",
  d12 = false,
  fontColor = "#fff",
}: Props) => {
  if (value === undefined) return null;
  return (
    <div
      onClick={onClick}
      className="rounded-sm cursor-pointer p-1 mb-2 text-center text-4xl font-bold"
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      {d12 && <FaDiceD20 className="inline mr-2 text-3xl" />}
      {value}
    </div>
  );
};

export default DiceRollDisplay;
