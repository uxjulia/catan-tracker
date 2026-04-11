import { Resources } from "../types";

interface Props {
  data: string[];
  resourceLog?: boolean;
  highlight?: boolean;
  totalText?: string;
  lastText?: string;
  onOpenResourceTracker?: () => void;
  resources?: Resources;
}

const LoggedRolls = ({
  data,
  resourceLog = false,
  highlight = true,
  totalText = "Total Rolls",
  lastText = "Last Roll",
  onOpenResourceTracker,
  resources,
}: Props) => {
  const hasNoResources = resources
    ? Object.values(resources[2] || {}).every((v) => v === "")
    : true;

  const [head, ...tail] = data;

  return (
    <div className="border border-gray-200 rounded mb-2">
      {resourceLog && hasNoResources ? (
        <div className="p-2">
          <p className="text-sm text-gray-500">
            <a
              href="#"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                onOpenResourceTracker?.();
              }}
              className="text-primary underline"
            >
              Enter Resources
            </a>{" "}
            to see them logged here.
          </p>
        </div>
      ) : (
        <div className="p-4">
          <div className="mb-1">
            <span className="text-sm text-gray-500">
              {totalText}: {data.length}
            </span>
          </div>
          <div className="text-sm capitalize">
            <span className="mr-1">{lastText}:</span>
            {!data.length && (
              <span className="text-gray-500">No rolls yet</span>
            )}
            {data.length === 1 && <span>{head}</span>}
            {data.length > 1 && (
              <span>
                {highlight ? (
                  <>
                    <span className="text-[#d54343] font-bold">{head}</span>
                    {", "}
                    <span>{tail.join(", ")}</span>
                  </>
                ) : (
                  <span>{data.join(", ")}</span>
                )}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedRolls;
