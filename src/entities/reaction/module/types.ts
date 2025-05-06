export enum ReactionType {
  Like = "like",
  Laugh = "laugh",
  Sad = "sad",
  Angry = "angry",
}

export interface PostReaction {
  postId: string;
  type: ReactionType;
  id?: string;
}

export type ReactionStats = Record<ReactionType, number>;
