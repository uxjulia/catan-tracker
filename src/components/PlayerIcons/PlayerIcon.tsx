import { FaUserLarge } from "react-icons/fa6";

interface Props {
  active: boolean;
  id: number;
  name: string;
  onClick: (index: number) => void;
}

const PlayerIcon = ({ active, id, name, onClick }: Props) => {
  return (
    <button
      id={String(id)}
      title={name}
      onClick={() => onClick(id)}
      className="p-2"
    >
      <FaUserLarge size={16} style={{ color: active ? "#C53437" : "#666" }} />
    </button>
  );
};

export default PlayerIcon;
