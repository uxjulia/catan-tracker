interface Props {
  width?: string;
  value?: string;
  color?: string;
  rarity?: number;
}

const NumberTile = ({
  width = "70px",
  value,
  color = "#333333",
  rarity = 1,
}: Props) => {
  return (
    <div
      style={{
        minWidth: width,
        maxWidth: width,
        minHeight: width,
        maxHeight: width,
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundColor: "rgba(162,152,114,0.30)",
        borderRadius: "50%",
        padding: "5px",
        marginRight: "15px",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "rgba(0,0,0,0.1) 0px 0px 0px 2px inset, rgba(0,0,0,0.3) 0px 0px 0px 1px",
      }}
    >
      <span
        style={{
          color,
          fontSize: "1.3rem",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        {value}
      </span>
      <div style={{ display: "flex" }}>
        {Array.from({ length: rarity }, (_, i) => (
          <div
            key={i}
            style={{
              width: "4px",
              height: "4px",
              marginRight: "2px",
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberTile;
