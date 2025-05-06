import type { Post } from "../../entities/post/module/types";

export interface LayoutContext {
  setPostToEdit: (post: Post) => void;
  setIsEditOpen: (isOpen: boolean) => void;
  setPostIdToDelete: (id: string) => void;
  setIsDeleteOpen: (isOpen: boolean) => void;
}
