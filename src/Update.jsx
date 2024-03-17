import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

function Update() {
  const { id } = useParams();

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

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    setValues({ ...values, name: values.name.toUpperCase() });
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light main-img"
      style={{
        "background-color": "rgb(223 221 209)",
      }}
    >
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Details</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name"> Name : </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
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
              value={values.address}
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
              value={values.age}
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Gender : </label>
            <input
              type="text"
              name="gender"
              className="form-control"
              placeholder="Enter Gender"
              value={values.gender}
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
              value={values.jobtitle}
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
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success"> Update </button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
