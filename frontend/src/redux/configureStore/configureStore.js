import { createStore } from "redux";
import { initialState, fetchUsersReducer } from "../reducers/users.reducer";

export const ConfigureStore = () => {
  const store = createStore(fetchUsersReducer, initialState);

  return store;
};
