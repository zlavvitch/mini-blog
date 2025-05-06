import { reactionEmojis } from "../../../features";
import { ReactionType } from "../module/types";
import { IconButton } from "../../../shared/ui";

export interface ReactionProps {
  type: ReactionType;
  count: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Reaction = ({ type, count, ...porps }: ReactionProps) => {
  return <IconButton icon={reactionEmojis[type]} count={count} {...porps} />;
};
