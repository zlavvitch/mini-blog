export type PostCardVariant = "compact" | "full";

export interface PostCardProps {
  id: string;
  title: string;
  description: string;
  content?: string;
  reactions?: unknown; // ***
  commentsCount?: number;
  variant?: PostCardVariant;
  className?: string;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

// export interface PostCardProps {
//   id: string;
//   title: string;
//   description: string;
//   content?: string;
//   commentsCount?: number;
//   onEditClick?: () => void;
//   onDeleteClick?: () => void;
//   variant?: "compact" | "full";
//   className?: string;
// }
