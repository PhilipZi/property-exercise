import React, { useState } from "react";

import Table from "./components/Table";
import UserForm from "./components/UserForm";

function App() {
  const [userList, setUserList] = useState([]);

  function createNewUserList(uName, uAge, uLocation) {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          id: Math.random().toString(),
          name: uName,
          age: uAge,
          location: uLocation,
        },
      ];
    });
  }

  return (
    <div>
      <UserForm onAddData={createNewUserList} />
      <Table data={userList} />
    </div>
  );
}

export default App;
