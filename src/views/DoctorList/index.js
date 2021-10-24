import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import DoctorList from "./DoctorList";

export default DoctorList =()=>{
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastnName: ""
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const responce = await axios.get("users/get-doctors/?with_slots=False")
    setUser(responce.data);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
        </tr>
      </tbody>
    </Table>
  )
};
