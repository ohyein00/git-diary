import request from "./client";
import {AxiosResponse} from "axios";

export const searchApi = <T>(params: object) => (
  request<T>({
    method: 'GET',
    url: `/search/repositories`,
    params
  })
)
