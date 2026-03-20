import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RequestComments from "../../API/RequestsComments";

export const postComment = createAsyncThunk(
  "comment/create",
  async ({ newsId, content }) => {
    try {
      const res = await RequestComments.postNewsComments(newsId, content);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState = {
  comment: null,
  status: "loading",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
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
