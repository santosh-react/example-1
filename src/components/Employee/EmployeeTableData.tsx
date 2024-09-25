import React, { useState } from "react";
import { Employee } from "./Employee";
import { Button, Modal } from "react-bootstrap";

interface EmployeeTableDataProps {
  employees: Employee[];
  handelDeleteEmployee: (id: number) => void;
}

const EmployeeTableData: React.FC<EmployeeTableDataProps> = (props: EmployeeTableDataProps) => {

  const [showViewModal, setViewShowModal] = useState<boolean>(false);
  const [showEditModal, setEditShowModal] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  // const [employee, setEmployee] = useState<Employee>([]);

  const handelEditEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    console.log(selectedEmployee);

    setEditShowModal(true);
  }
  const handleClose = (): void => {
    setSelectedEmployee(null);
    setViewShowModal(false);
  }

  const handelViewEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    setViewShowModal(true);
  }

  const handelInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (selectedEmployee) {
      setSelectedEmployee({ ...selectedEmployee, [name]: value });
    }
  }
  return <>
    <tbody>
      {props.employees.map((employee, key) =>
        <tr key={employee.id}>
          <td>{++key}</td>
          <td>{employee.emp_code}</td>
          <td>{employee.name}</td>
          <td>{employee.mob_no}</td>
          <td>{employee.department}</td>
          <td>{employee.address}</td>
          <td>
            <div className="d-flex justify-content-start">
              <button type="button" className="btn shadow btn-outline-info me-2" onClick={() => handelEditEmployee(employee)}>Edit</button>
              <button type="button" className="btn shadow btn-outline-success me-2" onClick={() => handelViewEmployee(employee)}>View</button>
              <button type="button" className="btn shadow btn-outline-danger" onClick={() => props.handelDeleteEmployee(employee.id)}>Delete</button>
            </div>

          </td>
        </tr>
      )}
    </tbody>

    {selectedEmployee && showViewModal && (
      <Modal
        show={showViewModal}
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
    {selectedEmployee && showEditModal && (
      <Modal
        show={showEditModal}
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
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="">	Emp. Code</label>
                  <input type="text" className="form-control" onChange={handelInput} name="emp_code" value={selectedEmployee.emp_code} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input type="text" className="form-control" onChange={handelInput} name="name" value={selectedEmployee.name} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="">Mobile No.</label>
                  <input type="text" className="form-control" onChange={handelInput} name="mob_no" value={selectedEmployee.mob_no} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="">Department</label>
                  <input type="text" className="form-control" onChange={handelInput} name="department" value={selectedEmployee.department} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="">Address</label>
                  <input type="text" className="form-control" onChange={handelInput} name="address" value={selectedEmployee.address} />
                </div>
              </div>
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
