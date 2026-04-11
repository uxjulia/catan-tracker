import { FaRotateLeft } from "react-icons/fa6";

interface Props {
  onClick: (value: number) => void;
  undo: () => void;
}

const DiceInput = ({ onClick, undo }: Props) => {
  const btnClass =
    "flex-1 h-10 mx-1 my-0.5 bg-gray-100 border border-gray-300 rounded text-sm font-medium hover:bg-gray-200 transition-colors";

  const rows = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];

  return (
    <div
      className="mx-auto mb-3 border border-gray-200 rounded p-1"
      id="numberInputs"
    >
      {rows.map((row) => (
        <div key={row[0]} className="flex justify-between items-center">
          {row.map((n) => (
            <button
              key={n}
              id={String(n)}
              className={btnClass}
              onClick={() => onClick(n)}
            >
              {n}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-between items-center">
        <button className={btnClass} id="11" onClick={() => onClick(11)}>
          11
        </button>
        <button className={btnClass} id="12" onClick={() => onClick(12)}>
          12
        </button>
        <button
          title="Undo last roll"
          id="undo"
          className="flex-1 h-10 mx-1 my-0.5 rounded text-sm font-medium transition-colors bg-[rgba(193,160,160,0.8)] text-[#333]"
          onClick={undo}
        >
          <FaRotateLeft className="inline mr-1" /> Undo
        </button>
      </div>
    </div>
  );
};

export default DiceInput;
