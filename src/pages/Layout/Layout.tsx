import { useState, JSX } from "react";
import { Outlet } from "react-router-dom";
import {
  EditPostModal,
  DeletePostModal,
  CreatePostModal,
} from "../../app/modals";
import type { Post } from "../../entities";
import { usePosts } from "../../shared/lib";
import { Button } from "../../shared/ui";
import { useReactions } from "../../entities/reaction/model/useReactions";
import { useComments } from "../../features/commentBlock/model/useComments";
import { wrapperLayout, header, title, main, footer } from "./styles";

export const Layout = (): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [postToEdit, setPostToEdit] = useState<Post | null>(null);
  const [postIdToDelete, setPostIdToDelete] = useState<string | null>(null);

  const resetEditState = () => {
    setIsEditOpen(false);
    setPostToEdit(null);
  };

  const resetDeleteState = () => {
    setIsDeleteOpen(false);
    setPostIdToDelete(null);
  };

  const layoutContext = {
    setPostToEdit,
    setIsEditOpen,
    setPostIdToDelete,
    setIsDeleteOpen,
  };

  const { updatePost, removePost } = usePosts();

  if (!postIdToDelete) return;

  removePost(postIdToDelete);
  const { emoveAllCommentsPost } = useComments(postIdToDelete);
  const { removeReaction } = useReactions(postIdToDelete);

  return (
    <div className={wrapperLayout}>
      <header className={header}>
        <h1 className={title}>MiniBlog</h1>
        <Button preset="create" onClick={() => setModalOpen(true)} />
      </header>
      <main className={main}>
        <Outlet context={layoutContext} />
      </main>
      <footer className={footer} />
      {isModalOpen && (
        <CreatePostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

      {postToEdit && (
        <EditPostModal
          isOpen={isEditOpen}
          post={postToEdit}
          onClose={resetEditState}
          onSubmit={(updatedPost) => {
            updatePost(updatedPost);
            resetEditState();
          }}
        />
      )}
      {postIdToDelete && (
        <DeletePostModal
          isOpen={isDeleteOpen}
          postId={postIdToDelete}
          onClose={resetDeleteState}
          onConfirm={() => {
            if (!postIdToDelete) return;

            emoveAllCommentsPost(postIdToDelete);
            removePost(postIdToDelete);
            removeReaction(postIdToDelete);

            resetDeleteState();
          }}
        />
      )}
    </div>
  );
};
