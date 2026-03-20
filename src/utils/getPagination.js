import { useMemo } from "react";

function getPagination(totalPages) {
  const pagination = useMemo(() => {
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }

    return pages;
  }, [totalPages]);

  return pagination;
}

export default getPagination;
