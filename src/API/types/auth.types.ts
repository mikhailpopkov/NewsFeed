export interface UserAuth {
  id: number;
  email: string;
  name: string;
  telegramId: string | null;
  avatarUrl: string | null;
  bio: string | null;
  backgroundUrl: string | null;
  rating: number;
  role: string;
  bannedAt: boolean | null;
  banReason: boolean | null;
  bannedByUserId: boolean | null;
  createdAt: string;
  updatedAt: string;
}

export interface ResponseUser {
  user: UserAuth;
  access_token: string;
  refresh_token: string;
}

export interface UserStats {
  newsCount: number | null;
  favoritesCount: number | null;
}

export interface User {
  id: number;
  email: string;
  name: string;
  telegramId: string | null;
  avatarUrl: string | null;
  bio: string | null;
  backgroundUrl: string | null;
  rating: number;
  createdAt: string;
  updatedAt: string | null;
  stats: UserStats | null;
}
