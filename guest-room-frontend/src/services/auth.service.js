import axios from "axios";

const API_URL = "http://localhost:4000/api/auth/";

const register = (username, name, email, phone, role, profile, password) => {
  const FormDataAuth = new FormData();
  FormDataAuth.append("username", username);
  FormDataAuth.append("name", name);
  FormDataAuth.append("email", email);
  FormDataAuth.append("phone", phone);
  FormDataAuth.append("role", role);
  FormDataAuth.append("profile", profile);
  FormDataAuth.append("password", password);
  return axios.post(API_URL + "signup", FormDataAuth);
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
