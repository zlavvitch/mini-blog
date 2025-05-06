import { PostReaction, ReactionStats } from "../../../entities";
import { ReactionType } from "../../../entities/reaction/module/types";
import { reactionStorage } from "../../../entities/reaction";
import { generateId } from "../../../shared/lib";

export function usePostReaction(postId: string) {
  const allReactions = reactionStorage.getAll();

  const existingReactions = allReactions.find(
    (reaction) => reaction.postId === postId
  );

  function toggleReaction(newType: ReactionType) {
    if (existingReactions) {
      if (existingReactions.type === newType) {
        const updated = { ...existingReactions, type: newType };

        reactionStorage.update(
          (reaction) => reaction.id === updated.id,
          () => updated
        );
      } else {
        const newReaction: PostReaction = {
          id: generateId(),
          postId,
          type: newType,
        };

        reactionStorage.add(newReaction);
      }
    }
  }

  function getReactionStats(): ReactionStats {
    const postReactions = allReactions.filter(
      (reaction) => reaction.postId === postId
    );

    const stats: ReactionStats = {
      laugh: 0,
      like: 0,
      angry: 0,
      sad: 0,
    };

    postReactions.forEach((reaction) => stats[reaction.type]++);

    return stats;
  }

  return { toggleReaction, getReactionStats };
}
