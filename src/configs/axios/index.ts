import Axios from "axios";

export const AxiosConfig = Axios.create({
  baseURL: "https://www.domain.com",
});
