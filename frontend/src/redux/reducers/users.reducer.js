import {
  FETCH_USERS,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../constants/users.constant";

export const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...initialState, loading: true };
    case FETCH_SUCCESS:
      return { ...initialState, loading: false, users: action.payload };
    case FETCH_FAIL:
      return { ...initialState, loading: false, error: action.payload };

    default:
      return state;
  }
};
