import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/api/rooms";

const getAll = () => {
  return axios.get(API_URL);
};
const getOne = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
const getOwner = (id) => {
  return axios.get(`http://localhost:4000/api/ownerDetails/${id}`);
};
const book = (qty, from, to, roomId) => {
  return axios.post(
    API_URL,
    { qty, from, to, roomId },
    { headers: authHeader() }
  );
};
const getMyBookings = () =>{
  const user = JSON.parse(localStorage.getItem("user"));
    return axios.get(`${API_URL}/bookings/${user.id}`)
};

export default {
  getAll,
  getOne,
  getOwner,
  book,
  getMyBookings,
};
