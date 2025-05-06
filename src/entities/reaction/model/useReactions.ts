import { useState, useEffect, useCallback } from "react";
import { ReactionType, PostReaction } from "../module/types";
import { reactionStorage } from "./reactionStorage";
import { generateId } from "../../../shared/lib";

const initialStats: Record<ReactionType, number> = {
  like: 0,
  laugh: 0,
  angry: 0,
  sad: 0,
};

export function useReactions() {
  const [reactions, setReactions] = useState<PostReaction[]>(() =>
    reactionStorage.getAll()
  );

  useEffect(() => {
    const allReaction = reactionStorage.getAll();

    setReactions(allReaction);
  }, []);

  const stats = reactions.reduce<Record<ReactionType, number>>(
    (acc, r) => {
      acc[r.type] += 1;
      return acc;
    },
    { ...initialStats }
  );

  const getStatsForPost = (postId: string): Record<ReactionType, number> => {
    const filtered = reactions.filter((r) => r.postId === postId);

    return filtered.reduce<Record<ReactionType, number>>(
      (acc, r) => {
        acc[r.type] += 1;
        return acc;
      },
      { ...initialStats }
    );
  };

  const toggleReaction = (postId: string, newType: ReactionType) => {
    const allReactions = reactionStorage.getAll();
    const existingReactions = allReactions.filter((r) => r.postId === postId);

    const sameType = existingReactions.find((r) => r.type === newType);
    if (sameType) return;

    reactionStorage.remove((r) => r.postId === postId);

    reactionStorage.add({
      id: generateId(),
      postId,
      type: newType,
    });

    setReactions(reactionStorage.getAll());
  };

  const removeReaction = (postId: string) => {
    reactionStorage.remove((reaction) => reaction.postId === postId);
  };

  return {
    stats,
    removeReaction,
    toggleReaction,
    getStatsForPost,
  };
}
