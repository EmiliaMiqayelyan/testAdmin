import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import api from "../../services/api";


export default function DoctorList(){
  const [doctor, setUser] = useState({
    id:"",
    firstName: "",
    lastnName: ""
  });
  const { id } = useParams();
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
) };