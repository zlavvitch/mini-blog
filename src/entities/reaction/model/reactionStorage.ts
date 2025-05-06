import { createLocalStorageAdapter } from "../../../shared/lib";
import { PostReaction } from "../module/types";

export const reactionStorage =
  createLocalStorageAdapter<PostReaction>("reactions");
