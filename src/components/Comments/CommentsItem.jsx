import cl from "./Comments.module.scss";

function CommentsItem({ comment }) {
  return (
    <div className={cl.commentsItem}>
      <div className={cl.commentsItemContainer}>
        <div className={cl.commentsItemImgbox}>
          <img />
        </div>
        <div className={cl.commentsItemInfo}>
          <div className={cl.commentsItemInfoName}></div>
          <div className={cl.commentsItemInfoRole}></div>
        </div>
      </div>
    </div>
  );
}

export default CommentsItem;
