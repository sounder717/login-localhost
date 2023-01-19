import React, { useState } from "react";
import "./Employee.css";
export default function Employee(props) {
  const [allData, singleData] = useState({
    group: false,
    single: [],
  });
  const EmployeeData = [
    {
      id: "001",
      name: "siva",
      location: "chennai",
      salary: "30000",
      department: "frontend",
    },
    {
      id: "002",
      name: "guru",
      location: "maduri",
      salary: "120000",
      department: "fullstack",
    },
    {
      id: "003",
      name: "ramya",
      location: "erode",
      salary: "20000",
      department: "office",
    },
    {
      id: "004",
      name: "vicky",
      location: "bengulur",
      salary: "35000",
      department: "frontend",
    },
    {
      id: "005",
      name: "keerthi",
      location: "coimbatore",
      salary: "50000",
      department: "backend",
    },
    {
      id: "006",
      name: "raj",
      location: "chennai",
      salary: "300000",
      department: "data science",
    },
    {
      id: "007",
      name: "bala",
      location: "salem",
      salary: "100000",
      department: "frontend",
    },
  ];
  const IndividualEmployee = (i) => {
    EmployeeData.map((e) => {
      if (e.id == i + 1) {
        singleData(() => ({
          group: true,
          single: [
            {
              id1: e.id,
              name1: e.name,
              location1: e.location,
              salary1: e.salary,
              department1: e.department,
            },
          ],
        }));
      }
    });
  };
  return (
    <div className="Employee">
      {allData.group ? (
        <div>
          {allData.single.map((e) => (
            <div className="employee_details">
              <table>
                <thead>
                  <tr>
                    <th colspan="2">Welcome details you looking for</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>{e.id1}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{e.name1}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>{e.location1}</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>{e.department1}</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>{e.salary1}</td>
                  </tr>
                </tbody>
              </table>
              <br></br>
              <br></br>
              <button
                onClick={() => {
                  singleData(() => ({
                    group: false,
                    single: [
                      {
                        id1: e.id,
                        name1: e.name,
                        location1: e.location,
                        salary1: e.salary,
                        department1: e.department,
                      },
                    ],
                  }));
                }}
              >
                back
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Our Employees Details</h1>
          <br></br>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Department</th>
              </tr>
            </thead>

            <tbody style={{}}>
              {EmployeeData.map((e, i) => (
                <tr onClick={(x) => IndividualEmployee(i)}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.location}</td>
                  <td>{e.department}</td>
                  <td>{e.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
