import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthUsers from "../../API/AuthUser";
import { ResponseUser } from "@/API/types/auth.types";

interface RegistrationType {
  email: string;
  password: string;
  name: string;
}

export const registrationUser = createAsyncThunk<
  ResponseUser,
  RegistrationType,
  { rejectValue: string }
>(
  "user/registration",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const res = await AuthUsers.registration(email, password, name);
      return res;
    } catch (e) {
      return rejectWithValue("Произошла ошибка при регистрации");
    }
  },
);

interface LoginType {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<
  ResponseUser,
  LoginType,
  { rejectValue: string }
>("user/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const res = await AuthUsers.login(email, password);
    return res;
  } catch (e) {
    return rejectWithValue("Произошла ошибка авторизации");
  }
});

export const logoutUser = createAsyncThunk<null, void, { rejectValue: string }>(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await AuthUsers.logout();
      return null;
    } catch (e) {
      return rejectWithValue("Ошибка при выходе из аккаунта");
    }
  },
);

export const checkAuth = createAsyncThunk(
  "user/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const res = await AuthUsers.checkAuth();
      // @ts-ignore
      return res.data;
    } catch (error) {
      return rejectWithValue("Ошибка проверки пользователя");
    }
  },
);

interface UserState {
  user: ResponseUser | null;
  status: "loading" | "success" | "error" | "idle";
  isAuth: boolean;
}

const initialState: UserState = {
  user: null,
  status: "loading",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.pending, (state) => {
        state.user = null;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.status = "success";
        localStorage.setItem("token", action.payload.access_token);
        localStorage.setItem("refreshToken", action.payload.refresh_token);
      })
      .addCase(registrationUser.rejected, (state) => {
        state.user = null;
        state.status = "error";
        state.isAuth = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.user = null;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.status = "success";
        localStorage.setItem("token", action.payload.access_token);
        localStorage.setItem("refreshToken", action.payload.refresh_token);
      })
      .addCase(loginUser.rejected, (state) => {
        state.user = null;
        state.status = "error";
        state.isAuth = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        ((state.user = null), (state.status = "idle"));
        state.isAuth = false;
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      })
      .addCase(checkAuth.pending, (state) => {
        state.user = null;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "success";
        state.isAuth = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.status = "error";
        state.isAuth = false;

        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      });
  },
});

export default userSlice.reducer;
