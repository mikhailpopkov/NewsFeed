import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../store/slices/userSlice";

export function useAuth() {
    const dispatch = useDispatch();

    useEffect(() => {
      const refreshToken = localStorage.getItem('refreshToken');
  
      if (refreshToken) {
          dispatch(checkAuth())
      }
  }, [])
}