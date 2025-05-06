import type { ButtonPreset } from "../Button";

export type PostFormProps = {
  title: string;
  initialValues?: {
    title: string;
    description: string;
    content: string;
  };
  onSubmit: (values: {
    title: string;
    description: string;
    content: string;
  }) => void;
  onCancel: () => void;
  submitLabel?: ButtonPreset;
};
