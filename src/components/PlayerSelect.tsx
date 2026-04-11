interface Props {
  playerCount: number;
  onChange: (value: number) => void;
}

const PlayerSelect = ({ playerCount, onChange }: Props) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="total-players"
        className="block text-sm text-gray-600 mb-1"
      >
        Total Players
      </label>
      <select
        id="total-players"
        value={playerCount}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value={0}>--- Select ---</option>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlayerSelect;
