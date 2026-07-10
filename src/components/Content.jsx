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
			user.email.toLowerCase().includes(search.toLowerCase()) ||
			user.role.toLowerCase().includes(search.toLowerCase()) ||
			user.phone.includes(search)
		);
	});

	const deleteUser = (id) => {
		const filteredUsers = users.filter((user) => user.id !== id);

		setUsers(filteredUsers);
		localStorage.setItem("users", JSON.stringify(filteredUsers));
	};

  return (
		<div className='px-36 h-[calc(100vh-150px)] bg-[#24221B]'>
			{toggle && (
				<Form
        setToggle={setToggle}
        setUsers={setUsers}
        users={users}
        updatedData={updatedData}
				/>
			)}

			<div className='mt-4'>
				<SearchBar setToggle={setToggle} setUpdatedData={setUpdatedData} search={search} setSearch={setSearch} />
			</div>

			<UserCard
				setUpdatedData={setUpdatedData}
				users={filteredUsers}
				deleteUser={deleteUser}
        setToggle={setToggle}
			/>
		</div>
	);
};

export default Content;
