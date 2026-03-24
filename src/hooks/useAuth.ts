import { useEffect } from "react";
import { checkAuth } from "../store/slices/userSlice.ts";
import { useAppDispatch } from "@/store/store.ts";

export function useAuth() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      dispatch(checkAuth() as any);
    }
  }, []);
}
