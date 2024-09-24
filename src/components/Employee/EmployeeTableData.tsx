import React, { useState } from "react";
import { Employee } from "./Employee";
import { Button, Modal } from "react-bootstrap";

interface EmployeeTableDataProps {
  employees: Employee[];
  handelDeleteEmployee: (id: number) => void;
}

const EmployeeTableData: React.FC<EmployeeTableDataProps> = ({ employees, handelDeleteEmployee }) => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const handleClose = (): void => {
    setSelectedEmployee(null);
    setShowModal(false);
  }

  const handelViewEmployee = (employee: Employee) => {
    setSelectedEmployee(employee)
    setShowModal(true);

  }
  return <>
    <tbody>
      {employees.map((employee, key) =>
        <tr key={employee.id}>
          <td>{++key}</td>
          <td>{employee.emp_code}</td>
          <td>{employee.name}</td>
          <td>{employee.mob_no}</td>
          <td>{employee.department}</td>
          <td>{employee.address}</td>
          <td>
            <div className="d-flex justify-content-start">
              <button type="button" className="btn shadow btn-outline-info me-2">Edit</button>
              <button type="button" className="btn shadow btn-outline-success me-2" onClick={() => handelViewEmployee(employee)}>View</button>
              <button type="button" className="btn shadow btn-outline-danger" onClick={() => handelDeleteEmployee(employee.id)}>Delete</button>
            </div>

          </td>
        </tr>
      )}
    </tbody>

    {selectedEmployee && (
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card shadow">
            <div className="card-body">
              <p><strong>Employee Code:</strong> {selectedEmployee.emp_code}</p>
              <p><strong>Name:</strong> {selectedEmployee.name}</p>
              <p><strong>Mobile No:</strong> {selectedEmployee.mob_no}</p>
              <p><strong>Department:</strong> {selectedEmployee.department}</p>
              <p><strong>Address:</strong> {selectedEmployee.address}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )}
  </>
}
export default EmployeeTableData;
