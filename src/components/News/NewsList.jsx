import { useEffect, useMemo, useState } from "react";
import FetchData from "../../API/FetchNews";
import { useFetching } from "../../hooks/useFetching";
import classes from "./News.module.scss";
import NewsItem from "./NewsItem";
import "/src/styles/style.scss";
import Tags from "../UI/Tags/Tags";
import getPagination from "../../utils/getPagination";
import Pagination from "../UI/Pagination/Pagination";
import Select from "../UI/Select/Select";

function NewsList({ title }) {
  const [activeTag, setActiveTag] = useState("");
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedSort, setSelectedSort] = useState("");

  const [fetching, isLoading, isError] = useFetching(async () => {
    const newsData = await FetchData.getNews(limit, page);
    setNews(newsData.data);
    setTotalPages(newsData.meta.totalPages);
  });

  const sortedAndFilteredNews = useMemo(() => {
    const sorted = [...news];

    if (selectedSort) {
      sorted.sort((a, b) =>
        a[selectedSort]
          .toLowerCase()
          .localeCompare(b[selectedSort].toLowerCase()),
      );
    }

    if (activeTag) {
      return sorted.filter((item) =>
        item.tags.some((t) => t.name === activeTag),
      );
    }

    return sorted;
  }, [activeTag, selectedSort, news]);

  function activeTagNews(tag) {
    setActiveTag(tag);
  }

  function sortedNews(sorted) {
    setSelectedSort(sorted);
  }

  const pagination = getPagination(totalPages);
  function changePage(p) {
    setPage(p);
  }

  useEffect(() => {
    fetching();
  }, [page]);

  return (
    <>
      <h1>{title}</h1>
      <div className={classes.header}>
        <Tags
          value={activeTag}
          onClickActiveTag={(tag) => activeTagNews(tag)}
        />
        <Select
          value={selectedSort}
          onChangeSort={(value) => sortedNews(value)}
          defaulValue="Тип сортировки"
          options={[
            { value: "createdAt", name: "По дате публикации" },
            { value: "title", name: "По названию" },
          ]}
        />
      </div>
      {isError && <h2>Произошла ошибка {isError}</h2>}
      {isLoading ? (
        <h2>Загрузка новостей...</h2>
      ) : (
        <>
          <div className={classes.news}>
            <div className={classes.wrapper}>
              {sortedAndFilteredNews.map((item, index) => (
                <NewsItem key={index} news={item} />
              ))}
            </div>
          </div>
        </>
      )}
      <Pagination changePage={changePage} pagination={pagination} page={page} />
    </>
  );
}

export default NewsList;
