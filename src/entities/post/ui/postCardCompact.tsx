import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { ReactionSelector } from "../../../features";
import { useComments } from "../../../features/commentBlock/model/useComments";
import { IconButton } from "../../../shared/ui";
import {
  postCardCompact,
  titleStyle,
  descriptionStyle,
  footerCardCompact,
} from "./styles";

type PostCardCompactProps = {
  postId: string;
  title: string;
  description: string;
  commentsCount: number;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
};

export const PostCardCompact = ({
  postId,
  title,
  description,
  onEditClick,
  onDeleteClick,
}: PostCardCompactProps) => {
  const { getAllComments } = useComments();
  const commentsLength = getAllComments(postId).length;

  return (
    <article className={clsx(postCardCompact)}>
      <Link to={`/post/${postId}`}>
        <div>
          <h2 className={clsx(titleStyle)}>{title}</h2>
          <p className={clsx(descriptionStyle)}>{description}</p>
        </div>
      </Link>

      <div className={clsx(footerCardCompact)}>
        <IconButton icon="message" count={commentsLength} variant={"single"} />
        <ReactionSelector postId={postId} variant={"single"} />
        <IconButton icon="edit" onClick={onEditClick} variant={"single"} />
        <IconButton icon="delete" onClick={onDeleteClick} variant={"single"} />
      </div>
    </article>
  );
};
