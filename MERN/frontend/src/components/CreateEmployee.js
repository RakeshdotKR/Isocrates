import React, { useEffect, useState } from 'react'
import axios from 'axios';
function CreateEmployee() {

  const [userForm,setUserForm] = useState({
    name:"",
    email:"",
    empid:"",
  });

  const inputHandler = (e) => {
    setUserForm((prevNext)=>({
      ...prevNext,
      [e.target.name]:e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:4000/employee/add-emp",userForm)
    .then((res)=>{
      console.log(res.data);
      setUserForm({
        name:"",
        email:"",
        empid:"",
      });
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  useEffect(()=>{},[]);

  return (
    <form onSubmit={onSubmit}>
      <input 
        placeholder='name'
        type="text"
        name="name"
        id="name"
        value={userForm.name}
        onChange={inputHandler}
      />

<input 
        placeholder='email'
        type="text"
        name="email"
        id="email"
        value={userForm.email}
        onChange={inputHandler}
      />

<input 
        placeholder='empid'
        type="text"
        name="empid"
        id="empid"
        value={userForm.empid}
        onChange={inputHandler}
      />
      <div>
        <button type="submit">Add Employee</button>
      </div>
    </form>
  )
}

export default CreateEmployee