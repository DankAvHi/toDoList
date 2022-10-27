import { API_ROUTE } from "./api.shared";

export const USER_ROUTE = "/user";

export const GET_USER_ROUTE = "/get";
export const CHANGE_USER_ROUTE = "/change";
export const CHANGE_USER_IMAGE_ROUTE = "/change-image";
export const DELETE_USER_ROUTE = "/delete";

export const GET_USER_API = API_ROUTE + USER_ROUTE + GET_USER_ROUTE;
export const CHANGE_USER_API = API_ROUTE + USER_ROUTE + CHANGE_USER_ROUTE;
export const CHANGE_USER_IMAGE_API = API_ROUTE + USER_ROUTE + CHANGE_USER_IMAGE_ROUTE;
export const DELETE_USER_API = API_ROUTE + USER_ROUTE + DELETE_USER_ROUTE;
