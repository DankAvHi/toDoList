import { useCallback, useEffect } from "react";
import { LOGOUT_API } from "../../shared/api/auth.api.shared";
import { useHttp } from "./../http.hook";

export default function useLogoutApi() {
     const { request, error, clearError } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const logout = useCallback(async () => {
          const data = await request({ url: LOGOUT_API, method: "DELETE" });

          return data;
     }, [request]);

     return { logout, error };
}
