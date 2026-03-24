import { User } from "./auth.types";

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Users {
  data: User[];
  meta: Meta;
}
