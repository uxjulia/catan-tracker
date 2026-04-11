import { FaDice } from "react-icons/fa6";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header className="hidden sm:flex items-center px-2 py-3 text-primary">
      <FaDice size={32} className="mr-2" />
      <h1 className="text-xl font-semibold">{title}</h1>
    </header>
  );
};

export default Header;
