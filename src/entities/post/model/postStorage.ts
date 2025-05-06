import { createLocalStorageAdapter } from "../../../shared/lib";
import { Post } from "../module";

export const postStorage = createLocalStorageAdapter<Post>("posts");
