import { PostCardFull } from "./postCardFull";
import { PostCardCompact } from "./postCardCompact";
import { PostCardProps } from "./types";

export const PostCard = ({
  id,
  title,
  description,
  content = "",
  commentsCount = 0,
  variant = "compact",
  onEditClick,
  onDeleteClick,
}: PostCardProps) => {
  const isFull = variant === "full";

  const postCardFull = (
    <PostCardFull
      postId={id}
      title={title}
      description={description}
      content={content}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );

  const postCardCompact = (
    <PostCardCompact
      postId={id}
      title={title}
      description={description}
      commentsCount={commentsCount}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );

  return isFull ? postCardFull : postCardCompact;
};
