import React from "react";

const UserCard = ({ users, setToggle, deleteUser, setUpdatedData }) => {
  return (
    <div
      className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-6
    pr-2
    mt-2
  "
    >
      {users.map((user) => (
        <div
          key={user.id}
          className="
bg-[#2A2821]
border
border-[#F2D04E]/10
rounded-3xl
p-6
shadow-xl
hover:shadow-yellow-500/10
duration-300
w-full
"
        >
          <div className="flex flex-col items-center mt-2 mb-6">
            <img
              src={
                user.imageUrl ||
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              }
              alt={user.name}
              className="
w-24
h-24
rounded-full
object-cover
ring-4
ring-[#F2D04E]/20
shadow-lg
transition
duration-300
hover:scale-105
"
            />

            <h3 className="text-xl font-bold text-[#E4DFD8] tracking-tight">
              {user.name}
            </h3>

            <p className="text-xs font-medium text-[#E4DFD8]/60 mt-1 uppercase tracking-wider">
              {user.role}
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div
              className="
bg-[#1D1B15]
rounded-2xl
border
border-[#ffffff10]
p-4
space-y-4
"
            >
              <div className="flex items-center gap-2 self-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#F2D04E] shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="text-amber-100 truncate font-medium">
                  {user.email}
                </span>
              </div>

              <div className="flex items-center gap-2 self-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#F2D04E] shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="text-amber-100 font-medium">{user.phone}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-3">
            <button
              onClick={() => {
                setUpdatedData(user);
                setToggle((prev) => !prev);
              }}
              className="
flex-1
py-3
rounded-xl
bg-[#F2D04E]
text-black
font-semibold
hover:bg-yellow-400
transition-all
duration-300
active:scale-95
"
            >
              Update
            </button>

            <button
              onClick={() => deleteUser(user.id)}
              className="
flex-1
py-3
rounded-xl
border
border-red-500
text-red-400
hover:bg-red-500
hover:text-white
transition-all
duration-300
active:scale-95
"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {users.length === 0 && (
        <div className="col-span-full flex items-center justify-center h-80">
          <div className="text-center">
            <h2 className="text-2xl text-white font-semibold">
              No Users Found
            </h2>

            <p className="text-gray-400 mt-2">
              Click "Add User" to create your first contact.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
