import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

function UpdateEmployee() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    empid: "",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/employee/update-emp/" + params.id, {
        name: userForm.name,
        email: userForm.email,
        empid: userForm.empid,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/employee/get-emp/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          email: res.data.data.email,
          empid: res.data.data.empid,
        });
      });
  }, []);

  return (
    <form onSubmit={onUpdate}>
      <input
        type="text"
        className="form-control"
        name="name"
        id="name"
        value={userForm.name}
        onChange={inputsHandler}
      />
      <input
        type="text"
        className="form-control"
        name="email"
        id="email"
        value={userForm.email}
        onChange={inputsHandler}
      />
      <input
        type="text"
        className="form-control"
        name="empid"
        id="empid"
        value={userForm.empid}
        onChange={inputsHandler}
      />
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
}

export default UpdateEmployee;
