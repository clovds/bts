import axios from "axios";
import { API_URL } from "../../helpers";
import { getChecklistAction } from "./checklistAction";

export const addItemAction = (id, itemName) => {
  return async (dispatch) => {
    console.log(id, itemName);
    try {
      const token = localStorage.getItem("token");
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(
        `${API_URL}/item`,
        {
          checklistId: id,
          itemName: itemName,
        },
        headers
      );
      dispatch(getChecklistAction());
    } catch (err) {
      console.log(err);
    }
  };
};
