import React, { useState } from "react";
import { Employee } from "./Employee";
import EmployeeTableData from "./EmployeeTableData";
import { Table } from "react-bootstrap";


interface EmployeeListProps {
  employees: Employee[];
}


const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  const [employeeData, setEmployeeData] = useState(employees);

  const handelDeleteEmployee = (id: number): void => {
    if (window.confirm('Are you sure you want to delete')) {
      try {
        const data = employeeData.filter((item) => item.id !== id);
        setEmployeeData(data);

      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  }

  return (
    <div>
      <div className="row mt-4">
        <div className="col-sm-12">

          <div className="card shadow">
            <div className="card-header text-white bg-info">
              <h5 className="text center">Employee List</h5>
            </div>
            <div className="card-body">
              <Table
                responsive
                bordered
                hover>
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Emp. Code</th>
                    <th>Name</th>
                    <th>Mobile No.</th>
                    <th>Department</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <EmployeeTableData employees={employeeData} handelDeleteEmployee={handelDeleteEmployee} />

              </Table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}
export default EmployeeList;