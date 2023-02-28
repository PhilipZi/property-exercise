import React from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Alter</th>
          <th>Ort</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
