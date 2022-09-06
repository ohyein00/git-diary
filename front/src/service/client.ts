import axios, {AxiosRequestConfig} from "axios";

const API = 'https://api.github.com/';
const token = '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'

const Api = axios.create({
  timeout: 10000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${token}`
  },
  baseURL: API
});

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await Api(config);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export default request;
