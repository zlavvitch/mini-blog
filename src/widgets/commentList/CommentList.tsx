import { AddCommentForm } from "../../features";
import { useComments } from "../../features/commentBlock/model/useComments";
import { CommentItem } from "./ui/CommentItem";
import { Comment } from "../../entities/comment/module/types";
import { wrapperCommenList, headingCommentList } from "./styles";

type ShortComment = {
  postId: string;
  author: string;
  text: string;
};

type CommentListProps = {
  comments: Comment[];
  postId: string;
  onDelete: (id: string) => void;
  onSubmit: (comment: ShortComment) => void;
};

export const CommentList = ({
  postId,
  comments,
  onDelete,
  ...props
}: CommentListProps) => {
  
  const { getAllComments } = useComments(postId);
  const commentsLength = getAllComments(postId).length;

  return (
    <div className={wrapperCommenList}>
      <h2 className={headingCommentList}>Комментарии ({commentsLength})</h2>
      <AddCommentForm postId={postId} {...props} />
      <ul>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};
