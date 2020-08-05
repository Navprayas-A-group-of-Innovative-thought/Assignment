import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchUsers } from "./redux/actions/users.actions";
import Table from "./components/table.component";

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    users: state.users,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRequest: () => dispatch(fetchUsers()),
  };
};

function App(props) {
  // const users = props.users;
  // console.log(users);

  // const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Redux Task</h1>
      </header>
      <div>
        <button className="btn" onClick={props.onFetchRequest}>
          Fetch Users
        </button>
        {props.loading ? (
          <h1> Data loading ... </h1>
        ) : (
          <Table users={props.users} />
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
