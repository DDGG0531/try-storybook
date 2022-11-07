interface Props {
  isLarge?: boolean;
  isRounded?: boolean;
  hasBorder?: boolean;
}

export default function JimButton(props: Props) {
  return (
    <div
      style={{
        background: "yellow",
        width: props.isLarge ? "300px" : "200px",
        borderRadius: props.isRounded ? "10px" : "0px",
        border: props.hasBorder ? "solid black 1px" : "none",
      }}
    >
      Jim-Button
    </div>
  );
}
