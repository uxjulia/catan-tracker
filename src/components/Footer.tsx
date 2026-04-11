import { FaHeart } from "react-icons/fa6";
import { BiCoffeeTogo } from "react-icons/bi";
interface Props {
  onClick: () => void;
}

const Footer = ({ onClick }: Props) => {
  return (
    <footer
      onClick={onClick}
      className="fixed bottom-0 left-0 right-0 bg-stone-100 py-2 cursor-pointer"
    >
      <p className="text-center text-sm">
        Made with <FaHeart className="inline" style={{ color: "#C53437" }} />{" "}
        and{" "}
        <BiCoffeeTogo
          size={16}
          className="inline"
          style={{ color: "#763b23" }}
        />{" "}
        by uxjulia
      </p>
    </footer>
  );
};

export default Footer;
