import { useState } from "react";
import { Outlet } from "react-router-dom";
import type { ReactElement } from "react";

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

export const Layout = (): ReactElement => {
  const { updatePost, removePost } = usePosts();
  const { removeAllCommentsPost } = useComments();
  const { removeReaction } = useReactions();

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

  const createModal = isModalOpen ? (
    <CreatePostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
  ) : null;

  const editModal =
    isEditOpen && postToEdit !== null ? (
      <EditPostModal
        isOpen={isEditOpen}
        post={postToEdit}
        onClose={resetEditState}
        onSubmit={(updatedPost) => {
          updatePost(updatedPost);
          resetEditState();
        }}
      />
    ) : null;

  const deleteModal =
    isDeleteOpen && postIdToDelete !== null ? (
      <DeletePostModal
        isOpen={isDeleteOpen}
        postId={postIdToDelete}
        onClose={resetDeleteState}
        onConfirm={() => {
          removeAllCommentsPost(postIdToDelete);
          removePost(postIdToDelete);
          removeReaction(postIdToDelete);
          resetDeleteState();
        }}
      />
    ) : null;

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

      {createModal}
      {editModal}
      {deleteModal}
    </div>
  );
};
