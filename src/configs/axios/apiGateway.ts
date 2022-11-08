import Axios from "axios";

// nova instância do Axios - para cada gateway
export const ApiGateway = Axios.create({
  baseURL: "/v1/api",
});
