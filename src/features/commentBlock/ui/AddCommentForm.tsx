import * as React from "react";
import { useState, FormEvent } from "react";
import { Button } from "../../../shared/ui";

import {
  fieldLabelComment,
  fieldTitleComment,
  fieldTitleSpiceialComment,
  inputComment,
} from "./styles";

type ShortComment = {
  postId: string;
  author: string;
  text: string;
};

type AddCommentForm = {
  postId: string;
  onSubmit: (comment: ShortComment) => void;
  initialValues?: { author: string; text: string };
  submitLabel?: "cancel" | "send";
};

export const AddCommentForm = ({
  postId,
  onSubmit,
  initialValues = { author: "", text: "" },
  submitLabel = "send",
}: AddCommentForm) => {
  const [formValues, setFormValue] = useState(initialValues);

  const handleChange =
    (field: keyof typeof formValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValue({ ...formValues, [field]: e.target.value });
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newComment = { ...formValues, postId };
    onSubmit(newComment);

    setFormValue({ author: "", text: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={fieldLabelComment}>
        <p className={fieldTitleComment}>
          <span className={fieldTitleSpiceialComment}>*</span> Имя
        </p>
        <input
          value={formValues.author}
          onChange={handleChange("author")}
          placeholder="Введите Ваше имя"
          required
          className={inputComment}
        />
      </label>

      <label className={fieldLabelComment}>
        <p className={fieldTitleComment}>
          <span className={fieldTitleSpiceialComment}>*</span> Ваш текст
        </p>
        <textarea
          value={formValues.text}
          onChange={handleChange("text")}
          placeholder="Введите Ваш комментарии"
          required
          className={inputComment}
        />
      </label>

      <div className="flex justify-end gap-3 mt-4">
        <Button type="submit" preset={submitLabel} />
      </div>
    </form>
  );
};
