import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RequestComments from "../../API/RequestsComments";
import { CommentsList } from "@/API/types/comments.types";

interface ThunkTypes {
  newsId: number;
  content: string;
}

export const postComment = createAsyncThunk<
  CommentsList,
  ThunkTypes,
  { rejectValue: string }
>("comment/create", async ({ newsId, content }, { rejectWithValue }) => {
  try {
    const res = await RequestComments.postNewsComments(newsId, content);
    return res.data;
  } catch (e) {
    return rejectWithValue("Не удалось создать комментарий");
  }
});

interface CommentState {
  comment: CommentsList | null;
  status: "loading" | "success" | "error" | "idle";
}

const initialState: CommentState = {
  comment: null,
  status: "idle",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        state.comment = null;
        state.status = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.status = "success";
      })
      .addCase(postComment.rejected, (state) => {
        state.comment = null;
        state.status = "error";
      });
  },
});

export default commentSlice.reducer;
