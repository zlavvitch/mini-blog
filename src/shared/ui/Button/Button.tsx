import { ButtonProps } from "./types";
import { buttonPresets, baseStyle } from "./styles";
import { clsx } from "clsx";

export const Button = ({ preset, className, ...props }: ButtonProps) => {
  const { text, className: presetClass } = buttonPresets[preset];

  return (
    <button className={clsx(baseStyle, presetClass, className)} {...props}>
      {text}
    </button>
  );
};
