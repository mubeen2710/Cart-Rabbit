import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/api/owner/";

const addRoom = (
  houseName,
  address1,
  address2,
  address3,
  rooms,
  rent,
  maxDuration,
  image1,
  image2,
  image3,
  wifi,
  tv,
  cctv,
  power
) => {
  const formData = new FormData();

  formData.append("houseName", houseName);
  formData.append("address1", address1);
  formData.append("address2", address2);
  formData.append("address3", address3);
  formData.append("rooms", rooms);
  formData.append("rent", rent);
  formData.append("maxDuration", maxDuration);
  formData.append("image", image1);
  formData.append("image", image2);
  formData.append("image", image3);
  formData.append("wifi", wifi);
  formData.append("tv", tv);
  formData.append("cctv", cctv);
  formData.append("power", power);
  console.log(wifi, tv, cctv, power);
  return axios.post(API_URL + "add", formData, {
    headers: authHeader(),
  });
};

const getMyRooms =() =>{
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(`${API_URL}${user.id}`);
}

export default {
  addRoom,
  getMyRooms
};
