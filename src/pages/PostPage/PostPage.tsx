import { useParams, Link, useOutletContext } from "react-router-dom";
import { LayoutContext } from "../../app/providers/layoutContext";
import { NotFoundPage } from "../../pages";
import { PostCard } from "../../entities";
import { CommentList } from "../../widgets";
import { useComments } from "../../features/commentBlock/model/useComments";
import { usePosts } from "../../shared/lib";
import { wrapperPostPage, linkClass } from "./styles";

export const PostPage = () => {
  const { setPostToEdit, setIsEditOpen, setPostIdToDelete, setIsDeleteOpen } =
    useOutletContext<LayoutContext>();

  const { getPost } = usePosts();
  const { addComment, removeComment, getAllComments } = useComments();
  const { id } = useParams<{ id: string }>();

  const post = id ? getPost(id) : null;

  if (!id || !post) return <NotFoundPage />;

  const allComments = getAllComments(id);

  return (
    <div className={wrapperPostPage}>
      <div>
        <Link to="/" className={linkClass}>
          ← Вернуться на главную
        </Link>
      </div>
      <PostCard
        variant="full"
        onEditClick={() => {
          setPostToEdit(post);
          setIsEditOpen(true);
        }}
        onDeleteClick={() => {
          setPostIdToDelete(post.id);
          setIsDeleteOpen(true);
        }}
        {...post}
      />
      <CommentList
        postId={id}
        comments={allComments}
        onSubmit={addComment}
        onDelete={removeComment}
      />
    </div>
  );
};
