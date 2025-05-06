import { ButtonPreset } from "./types";

export const baseStyle = `inline-flex items-center justify-center rounded-md 
font-sans text-sm font-medium transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
disabled:pointer-events-none disabled:opacity-100 
disabled:bg-gray-100 disabled:text-gray-400`;

export const buttonPresets: Record<
  ButtonPreset,
  { text: string; className: string }
> = {
  create: {
    text: "+Создать пост",
    className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm",
  },
  cancel: {
    text: "Отменить",
    className: "bg-gray-300 hover:bg-gray-400 text-black px-4 py-1.5",
  },
  publish: {
    text: "Опубликовать",
    className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm",
  },
  send: {
    text: "Отправить",
    className: "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2",
  },
  delete: {
    text: "Удалить",
    className: "bg-red-600 hover:bg-red-700 text-white px-5 py-2",
  },
  save: {
    text: "Сохранить",
    className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm",
  },
};
