import { Meta } from "./users.types";

export interface News {
  data: NewsById[];
  meta: Meta;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  avatarUrl: string | null;
  bio: string | null;
  backgroundUrl: string | null;
  rating: number;
  createdAt: string;
}

export interface Tags {
  id: number;
  name: string;
}

export interface NewsById {
  id: number;
  title: string;
  description: string | null;
  content: string | null;
  imageUrl: string | null;
  views: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  tags: Tags[] | null;
  likesCount: number;
  dislikesCount: number;
  isFavorited: boolean;
  userReaction?: string | null;
}
