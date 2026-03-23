export interface AuthorTypes {
  id: number;
  name: string;
  email: string;
  avatarUrl: string | null;
  bio: string | null;
  backgroundUrl: string | null;
  rating: number;
  createdAt: string;
}

export interface TagsTypes {
  id: number;
  name: string;
}

export interface NewsDetailData {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string | null;
  views: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author: AuthorTypes;
  tags: TagsTypes[];
  likesCount: number | null;
  dislikesCount: number | null;
  isFavorited: boolean;
  userReaction: string | null;
}
