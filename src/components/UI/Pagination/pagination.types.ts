export interface PaginationProps {
  pagination: number[];
  page: number;
  changePage: (p: number) => void;
}
