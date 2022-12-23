import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Label contents
   */
  label: string;
  /**
   * What size to use
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * What capitalize to use
   */
  allCaps?: boolean;
  /**
   * What color to use
   */
  color?: "primary" | "secondary" | "terciary";
  /**
   * What fontColor color to use
   */
  fontColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  fontColor,
  label = "No Label",
  size = "normal",
  backgroundColor = "trasnparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
