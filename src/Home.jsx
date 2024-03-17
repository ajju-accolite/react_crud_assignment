import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const [data, setSata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setSata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("would you like to Delete?");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (

    // <div className="main-img">

    
    <div className="d-flex flex-column justify-content align-items-center bg-dark vh-100 main-img">
      <h1 style={{ marginTop: "30px", marginBottom: "25px", color: "white" }}>
        List of Employees
      </h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>{" "}
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>

                <td>
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Full Info
                  </Link>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
}

export default Home;
