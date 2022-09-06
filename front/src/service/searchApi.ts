import request from "./client";

export const searchApi = <T>(params: object) => (
  request<T>({
    method: 'GET',
    url: `/search/repositories`,
    params
  })
)
