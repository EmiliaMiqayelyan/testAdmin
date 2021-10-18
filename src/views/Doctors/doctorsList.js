import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import api from "../../services/api";


<<<<<<< HEAD
export default function DoctorList() {
  const [user, setUser] = useState({
    id: "",
=======
export default function DoctorList(){
  const [doctor, setUser] = useState({
    id:"",
>>>>>>> 5e3231c0eaaac64929833544472754a98d95f7e3
    firstName: "",
    lastnName: ""
  });
  const { id } = useParams();
<<<<<<< HEAD
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const responce = await axios.get("users/get-doctors/?with_slots=False")
    setUser(responce.data);
  };

=======
>>>>>>> 5e3231c0eaaac64929833544472754a98d95f7e3
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
          <td>{doctor.id}</td>
          <td>{doctor.firstName}</td>
          <td>{doctor.lastName}</td>
        </tr>
      </tbody>
    </Table>
  )
};