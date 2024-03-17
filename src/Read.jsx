import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import "./App.css";

function Read() {
  const [data, setSata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setSata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light main-img"
      style={{
        "background-color": "rgb(223 221 209)",
      }}
    >
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of Employee : </h3>

        <div className="mb-2">
          <strong>Name : {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email : {data.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Address : {data.address}</strong>
        </div>
        <div className="mb-2">
          <strong>Age : {data.age}</strong>
        </div>
        <div className="mb-2">
          <strong>Gender : {data.gender}</strong>
        </div>
        <div className="mb-2">
          <strong>Job Position : {data.jobtitle}</strong>
        </div>
        <div className="mb-2">
          <strong>Phone : {data.phone}</strong>
        </div>

        <Link to={`/update/${id}`} className="btn btn-primary ms-3">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
