import axios from "axios";

const API_BASE_URL = "https://milantv-be.herokuapp.com/api/milantv/auth/";
const ENDPOINTS = {
  SIGNUP: "signup",
  LOGIN: "login",
};

// Register a new user
export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${ENDPOINTS.SIGNUP}`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

// Log in an existing user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${ENDPOINTS.LOGIN}`, {
      email,
      password,
    });

    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

// Log out the current user
export const logout = () => {
  localStorage.removeItem("user");
};
