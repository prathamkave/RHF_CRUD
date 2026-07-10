import React, { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const addUsers = (user) => {
    setUsers((prev) => [...prev, user]);
    setToggle(false);
  };

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);

    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  return (
    <div className="bg-[#24221B] min-h-screen">
      <Nav setToggle={setToggle} />

      <div className="m-3 p-4 ">
        <Content setToggle={setToggle} users={users} deleteUser={deleteUser} />
      </div>

      {toggle && (
        <Form setToggle={setToggle} addUsers={addUsers} users={users} />
      )}
    </div>
  );
};

export default App;
