import { format } from "date-fns";

import { Comment } from "../../../entities/comment/module/types";
import { AuthorIcon } from "../../../shared/assets";
import { IconButton } from "../../../shared/ui";
import {
  commentWrapper,
  headerComment,
  titleComment,
  dateComment,
  actionComment,
} from "../styles";

type CommentItemProps = {
  comment: Comment;
  onDelete: (id: string) => void;
};

export const CommentItem = ({ comment, onDelete }: CommentItemProps) => {
  return (
    <li className={commentWrapper}>
      <div className={headerComment}>
        <div>
          <AuthorIcon />
        </div>
        <h2 className={titleComment}>{comment.author}</h2>
        <p className={dateComment}>{format(comment.createdAt, "dd.MM.yyyy")}</p>
      </div>
      <p>{comment.text}</p>
      <IconButton
        icon="delete"
        onClick={() => onDelete(comment.id)}
        variant={"special"}
        className={actionComment}
      />
    </li>
  );
};
