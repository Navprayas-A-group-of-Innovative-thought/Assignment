import React from "react";

const TableBody = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

const Table = ({ users }) => {
  console.log(users);
  if (users.length === 0) return null;
  return (
    <>
      <div className="center">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>

          {<TableBody users={users} />}
        </table>
      </div>
    </>
  );
};

export default Table;
