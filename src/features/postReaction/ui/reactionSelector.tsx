import { IconButton } from "../../../shared/ui";
import { ReactionType } from "../../../entities/reaction/module/types";
import { useReactions } from "../../../entities/reaction/model/useReactions";
import { reactionEmojis } from "./reactionEmojis";

type ReactionSelectorProps = {
  postId: string;
  variant: "single" | "full";
};

export const ReactionSelector = ({
  postId,
  variant = "single",
}: ReactionSelectorProps) => {
  const { stats, toggleReaction } = useReactions(postId);

  const reactionsToRender: ReactionType[] =
    variant === "single"
      ? [ReactionType.Like]
      : (Object.keys(reactionEmojis) as ReactionType[]);

  return (
    <div className="flex gap-2 pt-2">
      {reactionsToRender.map((type) => (
        <IconButton
          key={type}
          icon={reactionEmojis[type]}
          count={stats[type] ?? 0}
          variant={variant}
          onClick={() => toggleReaction(type)}
        />
      ))}
    </div>
  );
};
