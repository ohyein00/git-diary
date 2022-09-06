import request from "./client";

export const getRepoIssueApi = <T>(repoName: string) => (
  request<T>({
    method: 'GET',
    url: `/repos/${repoName}/issues`,
  })
)
