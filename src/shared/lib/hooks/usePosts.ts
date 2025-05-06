import { useState, useEffect } from "react";
import { postStorage } from "../../../entities";
import type { Post } from "../../../entities";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(postStorage.getAll());

    const unsubscribe = postStorage.subscribe(() => {
      setPosts(postStorage.getAll());
    });

    return () => unsubscribe();
  }, []);

  const addPost = (newPosts: Post) => {
    postStorage.add(newPosts);
  };

  const removePost = (postId: Post["id"]) => {
    postStorage.remove((post) => post.id === postId);

    setPosts(postStorage.getAll());
  };

  const updatePost = (updated: Post) => {
    postStorage.update(
      (post) => post.id === updated.id,
      () => updated
    );
  };

  const getPost = (postId: Post["id"]) => {
    return postStorage.find((post) => post.id === postId);
  };

  return {
    posts,
    addPost,
    removePost,
    updatePost,
    getPost,
  };
};
