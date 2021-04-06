import axios from "axios";
import { API_URL } from "../../helpers";

export const getChecklistAction = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`${API_URL}/checklist`, headers);
      dispatch({ type: "GET_CHECKLIST", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addChecklist = ({ name }) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(`${API_URL}/checklist`, { name: name }, headers);
      dispatch(getChecklistAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteChecklistAction = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`${API_URL}/checklist/${id}`, headers);
      dispatch(getChecklistAction());
    } catch (err) {
      console.log(err);
    }
  };
};
