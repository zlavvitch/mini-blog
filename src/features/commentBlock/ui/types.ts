import type { ButtonPreset } from "../../../shared/ui/Button";

export type CommentFormProps = {
  initialValues?: {
    author: string;
    text: string;
  };
  onSubmit: (comment: Comment) => void;
  onCancel: (id: string) => void;
  submitLabel?: ButtonPreset;
};
