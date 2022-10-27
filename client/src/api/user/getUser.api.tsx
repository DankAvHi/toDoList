import { useCallback, useEffect } from "react";
import { GET_USER_API } from "../../shared/api/user.api.shared";
import { GetUserResponse } from "../../shared/types/user";
import { useHttp } from "../http.hook";

export default function useGetUserApi() {
     const { request, error, clearError } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const getUser = useCallback(async () => {
          const data: GetUserResponse = await request({ url: GET_USER_API, method: "GET" });

          return data;
     }, [request]);

     return { getUser, error };
}
