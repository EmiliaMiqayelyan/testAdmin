import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";


export default () => {
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
<<<<<<< HEAD:src/views/DoctorList/doctorList.js
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
=======
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          </tr>
          </tbody>
</Table>
) };

>>>>>>> 9b78f89604fd1270035e68f11421452de0d35efd:src/views/Doctors/doctorsList.js
