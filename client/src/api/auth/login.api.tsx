import { useCallback, useEffect } from "react";
import { LOGIN_API } from "../../shared/api/auth.api.shared";
import { LoginRequest } from "../../shared/types/auth";
import { useHttp } from "../http.hook";

const useLoginApi = () => {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const login = useCallback(
          async ({ login, password }: LoginRequest) => {
               const data = await request({
                    url: LOGIN_API,
                    method: "POST",
                    body: { login, password },
               });

               return data;
          },
          [request]
     );

     return { login, loading };
};

export default useLoginApi;
