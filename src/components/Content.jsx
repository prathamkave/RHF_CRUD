import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Form from "./Form";
import UserCard from "./UserCard";

const Content = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [updatedData, setUpdatedData] = useState(null);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
    );
  });

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);

    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  return (
    <div className="bg-[#24221B] h-[calc(100vh-80px)] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 flex flex-col overflow-hidden">
      {toggle && (
        <Form
          setToggle={setToggle}
          setUsers={setUsers}
          users={users}
          updatedData={updatedData}
        />
      )}

      <div className="mt-4 shrink-0">
        <SearchBar
          setToggle={setToggle}
          setUpdatedData={setUpdatedData}
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="flex-1 overflow-y-auto mt-6 custom-scroll">
        <UserCard
          setUpdatedData={setUpdatedData}
          users={filteredUsers}
          deleteUser={deleteUser}
          setToggle={setToggle}
        />
      </div>
    </div>
  );
};

export default Content;
