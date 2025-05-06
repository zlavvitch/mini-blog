import { useOutletContext } from "react-router-dom";
import { PostCard } from "../../entities";
import { usePosts } from "../../shared/lib";
import { LayoutContext } from "../../app/providers/layoutContext";

export const MainPage = () => {
  const { posts } = usePosts();

  const { setPostToEdit, setIsEditOpen, setPostIdToDelete, setIsDeleteOpen } =
    useOutletContext<LayoutContext>();

  return (
    <section className="flex flex-wrap justify-center gap-6 px-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
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
      ))}
    </section>
  );
};
