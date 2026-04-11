import PlayerIcon from "./PlayerIcon";

interface Props {
  players: string[];
  activePlayer: number;
  onClick: (index: number) => void;
}

const PlayerIconContainer = ({ players, activePlayer, onClick }: Props) => {
  if (players.length === 0) return null;
  return (
    <div className="mb-1">
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center">
            {players.map((player, index) => (
              <PlayerIcon
                key={`player-${index}`}
                active={activePlayer === index}
                name={player}
                id={index}
                onClick={onClick}
              />
            ))}
          </div>
          <div>
            <p className="text-center text-sm text-gray-500 mb-1">
              Next Player:
            </p>
            <p className="text-center text-xl font-semibold">
              {players[activePlayer]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerIconContainer;
