import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchUsersReducer } from "../reducers/users.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    fetchUsersReducer,
    applyMiddleware(thunkMiddleware)
  );

  return store;
};
