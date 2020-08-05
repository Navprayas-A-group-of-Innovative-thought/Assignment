import axios from "axios";
import {
  FETCH_USERS,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../constants/users.constant";

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS, loading: true });

  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      const data = response.data;
      dispatch({
        type: FETCH_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAIL, payload: err.message });
    });
};
