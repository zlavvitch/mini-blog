import { ButtonHTMLAttributes } from "react";

export type Emoji = string;
export type IconType = "edit" | "delete" | "message";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Emoji | IconType;
  count?: number;
  variant: "single" | "full" | "special";
}
