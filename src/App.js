import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from './Components/Login/Login'
import Dashboard from "./Components/Dashboard/Dashboard";
import EmployeeList from "./Components/EmployeeList/EmployeeList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/employee-list" element={<EmployeeList/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
