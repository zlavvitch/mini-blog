import { useState, useEffect } from "react";
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
  const [reactions, setReactions] = useState<PostReaction[]>([]);

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

  const toggleReaction = (postId: string, newType: ReactionType) => {
    const currentReaction = reactions.find((r) => r.postId === postId);
    if (currentReaction) {
      if (currentReaction.type === newType) return;

      reactionStorage.update(
        (r) => r.id === currentReaction.id,
        (r) => ({ ...r, type: newType })
      );
    } else {
      reactionStorage.add({
        id: generateId(),
        postId,
        type: newType,
      });
    }

    setReactions(reactionStorage.getAll().filter((r) => r.postId === postId));
  };

  const removeReaction = (postId: string) => {
    reactionStorage.remove((reaction) => reaction.postId === postId);
  };

  return {
    stats,
    removeReaction,
    toggleReaction,
  };
}
