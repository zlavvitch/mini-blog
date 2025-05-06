import { ButtonHTMLAttributes } from "react";

export type ButtonPreset =
  | "create"
  | "cancel"
  | "publish"
  | "send"
  | "delete"
  | "save";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  preset: ButtonPreset;
  className?: string;
}
