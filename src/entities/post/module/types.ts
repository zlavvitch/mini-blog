export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
}

export type NewPost = Omit<Post, "id" | "createdAt">;
