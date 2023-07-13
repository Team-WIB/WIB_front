import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://ec2-3-35-99-145.ap-northeast-2.compute.amazonaws.com:8080/",
});
