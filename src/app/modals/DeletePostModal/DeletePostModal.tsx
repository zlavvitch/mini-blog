import { clsx } from "clsx";
import { Modal, Button } from "../../../shared/ui";
import { modalContainer, modalTitle, modalText, modalActions } from "./styles";

type DeletePostModalProps = {
  isOpen: boolean;
  postId: string | null;
  onClose: () => void;
  onConfirm: () => void;
  className?: string;
};

export const DeletePostModal = ({
  isOpen,
  postId,
  onClose,
  onConfirm,
  className,
}: DeletePostModalProps) => {
  if (!isOpen || !postId) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={clsx(modalContainer, className)}>
        <h2 className={modalTitle}>Удалить пост?</h2>
        <p className={modalText}>Это действие необратимо.</p>
        <div className={modalActions}>
          <Button preset="cancel" onClick={onClose} />
          <Button preset="delete" onClick={onConfirm} />
        </div>
      </div>
    </Modal>
  );
};
