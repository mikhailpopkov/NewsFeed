import cl from "./Comments.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import { useState } from "react";
import { postComment } from "../../store/slices/commentSlice";

function CommentsAdding({ newsId }) {
  const user = useSelector((state) => state.user.user);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  function handleComment() {
    dispatch(postComment({ newsId, content }));
    setContent("");
  }

  return (
    <div className={cl.addingComments}>
      <div className={cl.addingCommentsUser}>
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.name} />
        ) : (
          <span>Я</span>
        )}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Что вы думаете ?"
        />
      </div>
      <Button onClick={() => handleComment()}>Отправить</Button>
    </div>
  );
}

export default CommentsAdding;
