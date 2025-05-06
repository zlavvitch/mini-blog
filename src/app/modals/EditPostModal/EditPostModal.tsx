import { Modal, PostForm } from "../../../shared/ui";
import type { Post, NewPost } from "../../../entities";

type EditPostModalProps = {
  isOpen: boolean;
  post: Post;
  onClose: () => void;
  onSubmit: (updated: Post) => void;
};

export const EditPostModal = ({
  isOpen,
  post,
  onClose,
  onSubmit,
}: EditPostModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = (updateData: NewPost) => {
    onSubmit({ ...post, ...updateData });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PostForm
        title="Редоктировать пост"
        initialValues={{
          title: post.title,
          description: post.description,
          content: post.content,
        }}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="save"
      />
    </Modal>
  );
};
