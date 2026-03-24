import Button from "../Button/Button.tsx";
import cl from "./Pagination.module.scss";
import { PaginationProps } from "./pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  page,
  changePage,
}) => {
  return (
    <div className={cl.pagination}>
      {pagination.map((p, i) => (
        <Button
          onClick={() => changePage(p)}
          key={i}
          className={
            p === page ? `${cl.paginationBtn} ${cl.active}` : cl.paginationBtn
          }
        >
          {p}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
