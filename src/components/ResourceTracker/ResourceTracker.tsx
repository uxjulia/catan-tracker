import { FaXmark, FaCircleQuestion } from "react-icons/fa6";
import ResourceInput from "./ResourceInput";
import { Resources } from "../../types";

interface Props {
  resources: Resources;
  open: boolean;
  handleVisibility: (open: boolean) => void;
  onChange: (tileValue: number, slot: number, value: string) => void;
  onClearResources: () => void;
}

const ResourceTracker = ({
  resources,
  open,
  handleVisibility,
  onChange,
  onClearResources,
}: Props) => {
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
        <h2 className="ml-4 text-lg font-semibold">Track Resources</h2>
      </header>
      <div className="flex-1 overflow-y-auto mt-15">
        <div className="max-w-lg mx-auto px-4">
          <div className="mt-8 mb-8 text-center text-sm">
            <FaCircleQuestion className="inline mr-2 text-gray-500" />
            Enter the corresponding resource for each number tile to display the
            resource when dice rolls are logged.
          </div>
          <form>
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[2][1]}
              tileValue="2"
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[3][1]}
              tileValue="3"
              rarity={2}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[3][2]}
              tileValue="3"
              rarity={2}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[4][1]}
              tileValue="4"
              rarity={3}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[4][2]}
              tileValue="4"
              rarity={3}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[5][1]}
              tileValue="5"
              rarity={4}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[5][2]}
              tileValue="5"
              rarity={4}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[6][1]}
              tileValue="6"
              color="#C53437"
              rarity={5}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[6][2]}
              tileValue="6"
              color="#C53437"
              rarity={5}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[8][1]}
              tileValue="8"
              color="#C53437"
              rarity={5}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[8][2]}
              tileValue="8"
              color="#C53437"
              rarity={5}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[9][1]}
              tileValue="9"
              rarity={4}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[9][2]}
              tileValue="9"
              rarity={4}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[10][1]}
              tileValue="10"
              rarity={3}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[10][2]}
              tileValue="10"
              rarity={3}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[11][1]}
              tileValue="11"
              rarity={2}
            />
            <ResourceInput
              dataId={2}
              onChange={onChange}
              value={resources[11][2]}
              tileValue="11"
              rarity={2}
            />
            <hr />
            <ResourceInput
              dataId={1}
              onChange={onChange}
              value={resources[12][1]}
              tileValue="12"
              rarity={1}
            />
          </form>
          <div className="flex justify-between mt-8 mb-8">
            <button
              onClick={onClearResources}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              Clear Resources
            </button>
            <button
              onClick={() => handleVisibility(false)}
              className="px-4 py-2 bg-primary text-white rounded text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceTracker;
