import React, { useEffect, useState } from "react";
import axios from "axios";

import "./brand.scss";

const Brand = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users?_page=0&_limit=4")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      });
  }, []);
  return (
    <div className="users">
      <h1 className="text-center my-3">Users</h1>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Username</th>
            <th>Addess</th>
            <th>Company name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.address.city}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Brand;
