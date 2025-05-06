import { useCallback, useEffect, useState } from "react";
import { commentStorage } from "../../../entities";
import type { Comment } from "../../../entities/comment/module/types";
import { generateId } from "../../../shared/lib";

type ShortComment = {
  postId: string;
  author: string;
  text: string;
};

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const allComments = commentStorage.getAll();
    const filteredComments = allComments
      .filter((comment) => comment.id === postId)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    setComments(filteredComments);
  }, [postId]);

  const getAllComments = useCallback((postId: string) => {
    if (!postId) return [];

    return commentStorage
      .getAll()
      .filter((comment) => comment.postId === postId);
  }, []);

  const addComment = useCallback(
    (comment: ShortComment) => {
      if (!postId) return [];

      const newComment: Comment = {
        ...comment,
        id: generateId(),
        createdAt: new Date().toISOString(),
      };

      commentStorage.add(newComment);
      setComments((prev) => [newComment, ...prev]);
    },
    [postId]
  );

  const removeComment = useCallback((id: string) => {
    commentStorage.remove((comment) => comment.id === id);

    setComments(commentStorage.getAll());
  }, []);

  const emoveAllCommentsPost = useCallback((postId: string) => {
    commentStorage.remove((comment) => comment.postId === postId);

    setComments(commentStorage.getAll());
  }, []);

  return {
    comments,
    addComment,
    removeComment,
    emoveAllCommentsPost,
    getAllComments,
  };
};
