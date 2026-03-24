export interface UsersListProps {
  title: string;
}

export interface UserData {
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
}

export interface UserProps {
  user: UserData;
}
