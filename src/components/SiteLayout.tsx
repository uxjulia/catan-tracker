import Header from "./Header";

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
  fullScreen?: boolean;
}

const SiteLayout = ({ left, right, fullScreen = false }: Props) => {
  return (
    <div className="pt-1 pb-16 mb-2">
      {!fullScreen && <Header title="Catan Tracker" />}
      <div className="px-2">
        {fullScreen ? (
          <div>{left}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">{left}</div>
            <div className="md:col-span-1">{right}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SiteLayout;
