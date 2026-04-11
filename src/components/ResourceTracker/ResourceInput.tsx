import NumberTile from "./NumberTile";

const options = [
  { label: "Clay / Brick", value: "brick" },
  { label: "Hay / Grain", value: "grain" },
  { label: "Wood / Lumber", value: "lumber" },
  { label: "Ore", value: "ore" },
  { label: "Sheep / Wool", value: "wool" },
];

const resourceMap: Record<string, string> = {
  "Clay / Brick": "brick",
  "Hay / Grain": "grain",
  "Wood / Lumber": "lumber",
  Ore: "ore",
  "Sheep / Wool": "wool",
  brick: "brick",
  grain: "grain",
  lumber: "lumber",
  wool: "wool",
};

interface Props {
  rarity?: number;
  dataId: number;
  tileValue: string;
  color?: string;
  onChange: (tileValue: number, slot: number, value: string) => void;
  value?: string;
}

const ResourceInput = ({
  rarity,
  dataId,
  tileValue,
  color,
  onChange,
  value = "",
}: Props) => {
  const normalizedValue = resourceMap[value] || value;

  return (
    <div className="flex items-center mt-2 mb-2">
      <NumberTile rarity={rarity} color={color} value={tileValue} />
      <div className="flex-1">
        <select
          value={normalizedValue}
          onChange={(e) =>
            onChange(Number(tileValue), dataId, e.target.value)
          }
          className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">-- Select --</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ResourceInput;
