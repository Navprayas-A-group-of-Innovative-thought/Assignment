import axios from "axios";
import {
  FETCH_USERS,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../constants/users.constant";

const fetchUsers = (users) => async (dispatch) => {
  dispatch({ type: FETCH_USERS, payload: { users } });
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    console.log(data);
    dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: FETCH_FAIL, payload: err.message });
  }
};

export { fetchUsers };
