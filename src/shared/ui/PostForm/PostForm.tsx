import * as React from "react";
import { FormEvent, useState } from "react";
import { Button } from "../../ui";
import { PostFormProps } from "./types";
import {
  formWrapper,
  heading,
  fieldLabel,
  fieldTitle,
  fieldTitleSpiceial,
  input,
} from "./styles";

export const PostForm = ({
  title,
  initialValues = { title: "", description: "", content: "" },
  onSubmit,
  onCancel,
  submitLabel = "publish",
}: PostFormProps) => {
  const [formValues, setFormValue] = useState(initialValues);

  const handleChange =
    (field: keyof typeof formValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValue({ ...formValues, [field]: e.target.value });
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(formValues);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className={formWrapper}>
      <h2 className={heading}>{title}</h2>

      <label className={fieldLabel}>
        <p className={fieldTitle}>
          <span className={fieldTitleSpiceial}>*</span> Заголовок
        </p>
        <input
          value={formValues.title}
          onChange={handleChange("title")}
          placeholder="Введите заголовок поста"
          required
          className={input}
        />
      </label>

      <label className={fieldLabel}>
        <p className={fieldTitle}>
          <span className={fieldTitleSpiceial}>*</span> Краткое описание
        </p>
        <textarea
          value={formValues.description}
          onChange={handleChange("description")}
          placeholder="Введите краткое описание поста (2-3 предложения)"
          required
          className={input}
        />
      </label>

      <label className={fieldLabel}>
        <p className={fieldTitle}>
          <span className={fieldTitleSpiceial}>*</span> Содержание
        </p>
        <textarea
          value={formValues.content}
          onChange={handleChange("content")}
          placeholder="Введите полное содержание поста"
          required
          className={input}
        />
      </label>

      <div className="flex justify-end gap-3">
        <Button type="button" onClick={onCancel} preset="cancel" />
        <Button type="submit" preset={submitLabel} />
      </div>
    </form>
  );
};
