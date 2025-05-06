import { createLocalStorageAdapter } from "../../../shared/lib";
import type { Comment } from "../module/types";

export const commentStorage = createLocalStorageAdapter<Comment>("comments");
