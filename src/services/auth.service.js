import axios from "axios";

const API_URL = "https://milantv-be.herokuapp.com/api/milantv/auth/";

const register = (email, password) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response, "res");
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};