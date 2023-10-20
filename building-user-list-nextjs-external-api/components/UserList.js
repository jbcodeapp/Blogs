import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="justify-center ">
      <h2>Random User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.picture.thumbnail} alt="User Thumbnail" />
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
