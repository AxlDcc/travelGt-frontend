import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.54:60106/api",
});

export default apiClient;
