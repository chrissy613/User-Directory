import React from "react";
import "./style.css";

function EmployeeDetail (props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.id.value}>
              <td><img src={employee.picture.large}></img></td>
              <td>{employee.name.first} {employee.name.last}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetail;
