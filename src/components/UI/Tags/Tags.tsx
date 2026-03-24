import { useEffect, useState } from "react";
import cl from "./Tags.module.scss";
import { useFetching } from "../../../hooks/useFetching";
import FetchData from "../../../API/FetchNews";
import { TagsProps } from "./tags.types";
import type { Tags } from "@/API/types/news.types";

const Tags: React.FC<TagsProps> = ({ value, onClickActiveTag }) => {
  const [tags, setTags] = useState<Tags[]>();
  const [fetchingTags, isLoadingTags, isErrorTags] = useFetching(async () => {
    const newsData = await FetchData.getNewsTags();
    setTags(newsData);
  });

  useEffect(() => {
    fetchingTags();
  }, []);

  if (isErrorTags) return "Произошла ошибка при загрузке тегов";
  if (isLoadingTags || !tags) return "Загрузка тегов";

  return (
    <div className={cl.tags}>
      {tags.map((tag) => (
        <button
          onClick={() => onClickActiveTag(tag.name)}
          className={
            value == tag.name ? `${cl.tagBtn} ${cl.active}` : cl.tagBtn
          }
          key={tag.id}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default Tags;
