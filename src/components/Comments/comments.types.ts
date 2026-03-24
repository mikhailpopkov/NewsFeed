import { CommentsList } from "@/API/types/comments.types";

export interface CommentsListProps {
  title: string;
  newsId: number;
}

export interface CommentsItemProps {
  comment: CommentsList;
}

export interface CommentsAddingProps {
  newsId: number;
}
