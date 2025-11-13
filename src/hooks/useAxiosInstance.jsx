import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-book-haven-server-five.vercel.app",
});

export const useAxiosInstance = () => {
  return instance;
};
export default instance;
