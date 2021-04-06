import axios from "axios";
import { API_URL } from "../../helpers";

// Login
export const loginAction = ({ username, password }) => {
  return async (dispatch) => {
    console.log(username, password);
    try {
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${API_URL}/login`,
        { username: username, password: password },
        headers
      );
      console.log(res.data.data.token);
      localStorage.setItem("token", res.data.data.token);
      dispatch({ type: "LOGIN", payload: res.data.data.token });
    } catch (err) {
      console.log(err);
    }
  };
};

// Register
export const registerAction = ({ username, password, email }) => {
  return async (dispatch) => {
    try {
      console.log(username, password, email);
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${API_URL}/register`,
        { username: username, password: password, email: email },
        headers
      );
      dispatch(loginAction({ username, password }));
    } catch (err) {
      console.log(err);
    }
  };
};
