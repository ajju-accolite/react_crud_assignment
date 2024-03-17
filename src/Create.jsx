import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    gender: "",
    jobtitle: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, name: values.name.toUpperCase() });
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light main-img"  
    >
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add Employee Details : </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name"> Name : </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) =>
                setValues({ ...values, name: e.target.value.toUpperCase() })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Address : </label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter Address"
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Age : </label>
            <input
              type="text"
              name="age"
              className="form-control"
              placeholder="Enter Age"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Gender : </label>
            <input
              type="text"
              name="gender"
              className="form-control"
              placeholder="Enter Address"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Job Position : </label>
            <input
              type="text"
              name="jobtitle"
              className="form-control"
              placeholder="Enter Job Position"
              onChange={(e) =>
                setValues({ ...values, jobtitle: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Phone : </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success"> Submit </button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
