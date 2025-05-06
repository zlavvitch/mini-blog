import { clsx } from "clsx";
import { ReactionSelector } from "../../../features";
import { IconButton } from "../../../shared/ui";
import {
  postCardFull,
  actionsCardFull,
  titleStyle,
  descriptionStyle,
  contentStyle,
  footerCardFull,
  titleFooter
} from "./styles";

type PostCardFullProps = {
  postId: string;
  title: string;
  description: string;
  content: string;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
};

export const PostCardFull = ({
  postId,
  title,
  description,
  content,
  onEditClick,
  onDeleteClick,
}: PostCardFullProps) => {
  return (
    <article className={clsx(postCardFull)}>
      <div className={clsx(actionsCardFull)}>
        <IconButton icon="edit" onClick={onEditClick} variant={"special"} />
        <IconButton icon="delete" onClick={onDeleteClick} variant={"special"} />
      </div>
      <div>
        <h2 className={clsx(titleStyle)}>{title}</h2>
        <p className={clsx(descriptionStyle)}>{description}</p>
        <p className={clsx(contentStyle)}>{content}</p>
      </div>
      <div className={clsx(footerCardFull)}>
        <h2 className={clsx(titleFooter)}>Реакции</h2>
        <ReactionSelector postId={postId} variant={"full"} />
      </div>
    </article>
  );
};
