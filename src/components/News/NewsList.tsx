import { useEffect, useMemo, useState, useCallback } from "react";
import FetchData from "../../API/FetchNews";
import { useFetching } from "../../hooks/useFetching";
import classes from "./News.module.scss";
import NewsItem from "./NewsItem.tsx";
import "/src/styles/style.scss";
import Tags from "../UI/Tags/Tags";
import getPagination from "../../utils/getPagination";
import Pagination from "../UI/Pagination/Pagination";
import Select from "../UI/Select/Select";
import { NewsListProps } from "./news.types";
import { News } from "@/API/types/news.types";
import { SortField } from "./news.types";

const NewsList: React.FC<NewsListProps> = ({ title }) => {
  const [activeTag, setActiveTag] = useState("");
  const [news, setNews] = useState<News>();
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedSort, setSelectedSort] = useState<SortField | "">("");

  const fetchNews = useCallback(async () => {
    const newsData = await FetchData.getNews(limit, page);
    setNews(newsData);
    setTotalPages(newsData.meta.totalPages);
  }, [limit, page]);

  const [fetching, isLoading, isError] = useFetching(fetchNews);

  function activeTagNews(tag: string) {
    setActiveTag(tag);
  }

  function sortedNews(sorted: SortField) {
    setSelectedSort(sorted);
  }

  const pagination = getPagination(totalPages);
  function changePage(p: number) {
    setPage(p);
  }

  const sortedAndFilteredNews = useMemo(() => {
    if (!news) return [];

    const sorted = [...news.data];

    if (selectedSort) {
      sorted.sort((a, b) =>
        String(a[selectedSort])
          .toLowerCase()
          .localeCompare(String(b[selectedSort]).toLowerCase()),
      );
    }

    if (activeTag) {
      return sorted.filter((item) =>
        item.tags?.some((t) => t.name === activeTag),
      );
    }

    return sorted;
  }, [activeTag, selectedSort, news]);

  useEffect(() => {
    fetching();
  }, [fetching]);

  if (isError) return <h1>Произошла ошибка при загрузке новостей</h1>;
  if (isLoading || !news) return <h1>Загрузка новостей...</h1>;

  return (
    <>
      <h1>{title}</h1>
      <div className={classes.header}>
        <Tags value={activeTag} onClickActiveTag={activeTagNews} />
        <Select
          value={selectedSort}
          onChangeSort={sortedNews}
          defaulValue="Тип сортировки"
          options={[
            { value: "createdAt", name: "По дате публикации" },
            { value: "title", name: "По названию" },
          ]}
        />
      </div>
      <div className={classes.news}>
        <div className={classes.wrapper}>
          {sortedAndFilteredNews.map((item, index) => (
            <NewsItem key={index} news={item} />
          ))}
        </div>
      </div>
      <Pagination changePage={changePage} pagination={pagination} page={page} />
    </>
  );
};

export default NewsList;
