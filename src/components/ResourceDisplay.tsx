const resourceImageMap: Record<string, string> = {
  lumber: "lumber",
  wood: "lumber",
  brick: "brick",
  clay: "brick",
  wool: "wool",
  sheep: "wool",
  grain: "grain",
  hay: "grain",
  ore: "ore",
};

interface ResourceImageProps {
  name: string;
}

const ResourceImage = ({ name }: ResourceImageProps) => {
  if (name === "" || name === "robber") return null;
  const img = resourceImageMap[name];
  if (!img) return null;
  return (
    <img
      src={`./images/${img}.png`}
      alt={img}
      width={100}
      style={{ margin: "5px" }}
    />
  );
};

interface Props {
  resourceDescription?: string[];
}

const ResourceDisplay = ({ resourceDescription = [] }: Props) => {
  return (
    <div
      className="flex justify-center mb-4 p-2"
      style={{ backgroundColor: "#E6E1AA" }}
    >
      {resourceDescription.map((resource, index) => (
        <ResourceImage key={index} name={resource} />
      ))}
    </div>
  );
};

export default ResourceDisplay;
