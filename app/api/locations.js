import client from "./client";

const endpoint = "/locations";
const getLocations = () => client.get(endpoint);

const getCurrentListings = (coordinates) => {
  if (coordinates) {
    const data = new FormData();
    data.append("Longitude", JSON.stringify(coordinates.longitude));
    data.append("Latitude", JSON.stringify(coordinates.latitude));

    return client.post(endpoint, data);
  } else {
    alert("No location provide");
  }
};

export default {
  getCurrentListings,
  getLocations,
};
