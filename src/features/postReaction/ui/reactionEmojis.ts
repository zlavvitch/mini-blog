import { ReactionType } from "../../../entities/reaction/module/types";

export const reactionEmojis: Record<ReactionType, string> = {
  [ReactionType.Like]: "👍",
  [ReactionType.Laugh]: "😂",
  [ReactionType.Angry]: "😡",
  [ReactionType.Sad]: "😢",
};
