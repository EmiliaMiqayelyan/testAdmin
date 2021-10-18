import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import hook from "./hook";

export default ()=>{
    const {doctors,match} = hook();
    return <div>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Tools</th>
    </tr>
  </thead>
  <tbody>
      {doctors?doctors.map(doctor=>{
          return <tr>
          <td>{doctor.id}</td>
          <td>{doctor.first_name}</td>
          <td>{doctor.last_name}</td>
          <td><Link to={`${match.url}/${doctor.id}`} >Edit</Link></td>
        </tr>
      }):"Loading..."}
  </tbody>
</Table>
    </div>
};
