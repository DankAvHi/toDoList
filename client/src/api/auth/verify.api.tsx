import { useCallback, useEffect } from "react";
import { VERIFY_API } from "../../shared/api/auth.api.shared";
import { useHttp } from "../http.hook";

export default function useVerifyApi() {
     const { request, error, clearError } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const verify = useCallback(async () => {
          const data = await request({ url: VERIFY_API, method: "GET" });

          return data;
     }, [request]);

     return { verify, error };
}
