import { Modal, PostForm } from "../../../shared/ui";
import { generateId, usePosts } from "../../../shared/lib";
import type { Post, NewPost } from "../../../entities";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePostModal = ({ isOpen, onClose }: CreatePostModalProps) => {
  

  const { addPost } = usePosts();

  const handleSubmit = (data: NewPost) => {
    const newPost: Post = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };

    addPost(newPost);
  };

  if (!isOpen) return null;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PostForm
        title="Создать новый пост"
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
};
