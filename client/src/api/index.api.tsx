import useLoginApi from "./auth/login.api";
import useLogoutApi from "./auth/logout.api";
import useVerifyApi from "./auth/verify.api";
import useGetUserApi from "./user/getUser.api";

export function api() {
     return { useLoginApi, useVerifyApi, useLogoutApi, useGetUserApi };
}
