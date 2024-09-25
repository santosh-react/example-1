import React, { useState, useEffect } from "react";
import EmployeeList from "../Employee/EmployeeList";
import { employeeData } from "../Employee/EmployeeData";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface AuthUser {
  email: string;
  password: string;
  isAuthenticated: boolean;
  errorMessage: string;
}

const Auth: React.FC = () => {
  const [authUser, setAuthUser] = useState<AuthUser>({
    email: "",
    password: "",
    isAuthenticated: false,
    errorMessage: ""
  });

  // Load authentication state from sessionStorage on component mount
  useEffect(() => {
    const storedAuth = sessionStorage.getItem("authUser");
    if (storedAuth) {
      setAuthUser(JSON.parse(storedAuth));
    }
  }, []);

  // Update sessionStorage whenever the authUser state changes
  useEffect(() => {
    sessionStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthUser({ ...authUser, [name]: value });
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (authUser.email === "admin" && authUser.password === "password") {
      setAuthUser({ ...authUser, isAuthenticated: true, errorMessage: "" });
      toast.success("Login successful");
    } else {
      const errorMessage = "Invalid email or password";
      setAuthUser({ ...authUser, errorMessage });
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      {!authUser.isAuthenticated && (
        <>
          <h1>Login</h1>
          <form onSubmit={handelSubmit}>
            <label>
              Email:
              <input
                type="email"
                onChange={handelInput}
                name="email"
                value={authUser.email}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                onChange={handelInput}
                name="password"
                value={authUser.password}
              />
            </label>
            <br />
            <input type="submit" value="Submit" disabled={authUser.isAuthenticated} />
          </form>
          <div>
            <span>User Name: admin</span> <br />
            <span>Password: password</span>
          </div>
        </>
      )}
      {authUser.isAuthenticated && <EmployeeList employees={employeeData} />}
    </div>
  );
};

export default Auth;
