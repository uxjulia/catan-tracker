interface Props {
  open?: boolean;
  handleVisibility: (open: boolean) => void;
  handleConfirm: () => void;
}

const ConfirmationDialog = ({
  open = false,
  handleVisibility,
  handleConfirm,
}: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded shadow-lg w-4/5 max-w-sm">
        <div className="px-4 pt-4 pb-2">
          <h3 className="text-base font-semibold">Start New Game?</h3>
        </div>
        <div className="px-4 py-4 border-t border-b border-gray-200">
          <p className="text-sm text-gray-700">
            All logged rolls will be cleared.
          </p>
        </div>
        <div className="flex justify-between gap-2 px-4 py-2">
          <button
            autoFocus
            onClick={() => handleVisibility(false)}
            className="px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-2 py-2 text-sm text-primary font-medium hover:bg-gray-100 rounded transition-colors"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
