import { Meta } from "./users.types";

export interface CommentAuthor {
  id: number;
  name: string;
  avatarUrl: string | null;
  role?: string;
}

export interface CommentsList {
  id: number;
  content: string;
  deleted: boolean;
  deletedAt: string | null;
  editedAt: string | null;
  author: CommentAuthor;
  likesCount: number;
  repliesCount: number;
  depth: number;
  parentId: number | null;
  newsId: number;
  createdAt: string;
  updatedAt: string;
  userLiked: boolean;
  replies: CommentsList[];
}

export interface ResponseComments {
  data: CommentsList[];
  meta: Meta;
}

export interface CreatedComments {
  data: CommentsList;
}
