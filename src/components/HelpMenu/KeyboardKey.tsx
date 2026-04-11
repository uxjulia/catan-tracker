interface Props {
  width?: string;
  top: string;
  bottom?: string;
  value: string;
  single?: boolean;
}

const KeyboardKey = ({ width = "50px", top, bottom, value, single = false }: Props) => {
  return (
    <div className="flex items-center justify-between" style={{ minWidth: "90px", margin: "5px" }}>
      <div
        style={{
          minWidth: width,
          maxWidth: "50px",
          minHeight: "50px",
          maxHeight: "50px",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "5px",
          padding: "5px",
          fontSize: ".75rem",
          margin: "5px",
          display: "inline-flex",
          flexDirection: single ? "row" : "column",
          alignItems: "center",
          justifyContent: single ? "center" : "space-between",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px -1px 0px 3px inset, rgba(0, 0, 0, 0.3) 0px 0px 0px 1px",
        }}
      >
        {single ? (
          <span>{top}</span>
        ) : (
          <>
            <span>{top}</span>
            <span>{bottom}</span>
          </>
        )}
      </div>
      <span className="text-sm" style={{ color: "#b02c2c" }}>{value}</span>
    </div>
  );
};

export default KeyboardKey;
