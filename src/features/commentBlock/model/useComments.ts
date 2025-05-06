import { useCallback, useEffect, useState } from "react";
import { commentStorage } from "../../../entities";
import type { Comment } from "../../../entities/comment/module/types";
import { generateId } from "../../../shared/lib";

type ShortComment = {
  postId: string;
  author: string;
  text: string;
};

export const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const allComments = commentStorage.getAll();

    setComments(allComments);
  }, []);

  const getAllComments = useCallback((postId: string) => {
    return commentStorage
      .getAll()
      .filter((comment) => comment.postId === postId);
  }, []);

  const addComment = useCallback((comment: ShortComment) => {
    const newComment: Comment = {
      ...comment,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };

    commentStorage.add(newComment);
    setComments((prev) => [newComment, ...prev]);
  }, []);

  const removeComment = useCallback((id: string) => {
    commentStorage.remove((comment) => comment.id === id);

    setComments(commentStorage.getAll());
  }, []);

  const removeAllCommentsPost = useCallback((postId: string) => {
    commentStorage.remove((comment) => comment.postId === postId);

    setComments(commentStorage.getAll());
  }, []);

  return {
    comments,
    addComment,
    removeComment,
    removeAllCommentsPost,
    getAllComments,
  };
};
