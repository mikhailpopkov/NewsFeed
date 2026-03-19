import cl from "./Comments.module.scss";
import RequestsComments from "../../API/RequestsComments";
import { useFetching } from "../../hooks/useFetching";
import { useEffect, useState } from "react";
import CommentsItem from "./CommentsItem";

function Comments({ title, newsId }) {
  const [comments, setComments] = useState([]);
  const [fetching, isLoading, isError] = useFetching(async () => {
    const res = await RequestsComments.getNewsComments(newsId);
    setComments(res.data);
  });

  useEffect(() => {
    if (newsId) {
      fetching();
    }
  }, [newsId]);

  return (
    <>
      {isError && <h2>Произошла ошибка с загрузкой комментариев</h2>}
      {isLoading ? (
        <h2>Загрузка комментариев...</h2>
      ) : (
        <div className={cl.comments}>
          <h2>{title}</h2>
          <div className={cl.commentsWrapper}>
            {comments.map((item) => (
              <CommentsItem key={item.id} comment={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Comments;
