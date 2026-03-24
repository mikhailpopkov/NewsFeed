import cl from "./Comments.module.scss";
import Button from "../UI/Button/Button";
import { ChangeEvent, useState } from "react";
import { postComment } from "../../store/slices/commentSlice.ts";
import { CommentsAddingProps } from "./comments.types";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";

const CommentsAdding: React.FC<CommentsAddingProps> = ({ newsId }) => {
  const user = useAppSelector((state) => state.user.user);
  const [content, setContent] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleComment() {
    dispatch(postComment({ newsId, content }));
    setContent("");
  }

  return (
    <div className={cl.addingComments}>
      <div className={cl.addingCommentsUser}>
        {user?.user.avatarUrl ? (
          <img src={user.user.avatarUrl} alt={user.user.name} />
        ) : (
          <span>Я</span>
        )}
        <textarea
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          placeholder="Что вы думаете ?"
        />
      </div>
      <Button onClick={() => handleComment()}>Отправить</Button>
    </div>
  );
};

export default CommentsAdding;
