import client from "./client";

const endpoint = "/regions";
const getListings = () => client.get(endpoint);

export default {
  getListings,
};
