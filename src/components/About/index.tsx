import { FaXmark } from "react-icons/fa6";
import DonateCard from "./DonateCard";

interface Props {
  open?: boolean;
  handleVisibility: (open: boolean) => void;
}

const About = ({ open = false, handleVisibility }: Props) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col bg-neutral-50">
        <header className="fixed top-0 left-0 right-0 bg-primary text-white flex items-center px-4 py-3 z-10">
          <button
            aria-label="close"
            onClick={() => handleVisibility(false)}
            className="text-white"
          >
            <FaXmark size={20} />
          </button>
          <h2 className="ml-4 text-lg font-semibold">Donate</h2>
        </header>
        <div className="flex-1 overflow-y-auto mt-15">
          <div className="max-w-md mx-auto px-4">
            <p className="mt-6 mb-4 text-center text-sm">
              If you have found this tool useful and would like to support the
              continued development, please consider buying me a coffee{" "}
              <span role="img" aria-label="smiley">
                😊
              </span>
            </p>
            <DonateCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
