import cl from "./Comments.module.scss";
import { CommentsItemProps } from "./comments.types";

const CommentsItem: React.FC<CommentsItemProps> = ({ comment }) => {
  const { author } = comment;
  const dateObj = new Date(comment?.updatedAt);
  const formattedDate = `${dateObj.getDate()} ${dateObj.toLocaleString("ru-RU", { month: "long" })}, ${dateObj.getFullYear()}`;

  return (
    <>
      {comment.content && (
        <div className={cl.commentsItem}>
          <div className={cl.commentsItemImgbox}>
            <img
              src={author?.avatarUrl ? author?.avatarUrl : "/images/user.svg"}
              alt={author?.name}
            />
          </div>
          <div className={cl.commentsItemContainer}>
            <div className={cl.commentsItemInfo}>
              <div className={cl.commentsItemInfoName}>{author?.name}</div>
              <div className={cl.commentsItemInfoRole}>
                {author?.role == "user" ? "Пользователь" : author?.role}
              </div>
            </div>
            <div className={cl.commentsItemContent}>
              <div className={cl.commentsItemContentText}>
                {comment.content}
              </div>
              <div className={cl.commentsItemContentDate}>
                Обновлено: {formattedDate}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentsItem;
