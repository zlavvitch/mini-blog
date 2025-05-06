import { Link } from "react-router-dom";
import {
  wrapperClass,
  titleClass,
  descriptionClass,
  linkClass,
} from "./styles";

export const NotFoundPage = () => {
  return (
    <div className={wrapperClass}>
      <h1 className={titleClass}>Страница не найдена</h1>
      <p className={descriptionClass}>
        Возможно, вы перешли по устаревшей ссылке или такой пост не существует.
      </p>
      <Link to="/" className={linkClass}>
        ← Вернуться на главную
      </Link>
    </div>
  );
};
