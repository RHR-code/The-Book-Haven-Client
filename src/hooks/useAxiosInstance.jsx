import axios from "axios";

const instance = axios.create({
  // baseURL: "https://the-book-haven-server-five.vercel.app",
  baseURL: "http://localhost:3000",
});

export const useAxiosInstance = () => {
  return instance;
};
export default instance;
