import classNames from "classnames";

interface Props {
  isLarge?: boolean;
  hasShadow?: boolean;
}

export default function JimButton(props: Props) {
  const baseStyle = "rounded border bg-white p-3";
  const extraStyle = [
    props.hasShadow ? "shadow" : "",
    props.isLarge ? "text-3xl" : "text-normal",
  ];

  return (
    <button className={classNames(baseStyle, extraStyle)}>Jim-Button</button>
  );
}

export const PrimaryProps: Props = {
  hasShadow: true,
  isLarge: true,
};

export const SecondaryProps: Props = {
  hasShadow: false,
  isLarge: false,
};
