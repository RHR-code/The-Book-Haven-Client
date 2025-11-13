import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const instance = axios.create({
  baseURL: "https://the-book-haven-server-five.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return instance;
};

export default useAxiosSecure;
