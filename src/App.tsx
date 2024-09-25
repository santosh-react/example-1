import React from 'react';
import Greet from './components/Greet';
import EmployeeList from './components/Employee/EmployeeList';
import TodoList from './components/TodoList';
import { employeeData } from './components/Employee/EmployeeData';
import Counter from './components/Counter/Counter';
import Auth from './components/Auth/Auth';

const App: React.FC = () => {
  return (
    <div className='container-fluid'>
      {/* <Greet age={22} name='Santosh' />
      <TodoList /> */}
      {/* <EmployeeList employees={employeeData} /> */}
      {/* <Counter counter={0} style={{ "textAlign": "center" }} /> */}
      <Auth />
    </div>
  )
}



export default App;
