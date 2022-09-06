import axios,{AxiosRequestConfig} from "axios";


const API = 'https://api.github.com/';

const Api = axios.create({
  timeout: 10000,
  baseURL: API,
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
