import React, { useState } from 'react'
import logo from '../../Assets/Group 46.png'
import moptro from '../../Assets/moptro logo.png'
import EmployeeCard from './EmployeeCard'
import { HomeOutlined, PersonOutlined, Search } from '@mui/icons-material';
import './EmployeeCard.css'
import BottomMenu from '../BottomMenu/BottomMenu';

const employees = [
    {
      empId: "123",
      empName: "John Doe",
      empDob: "1990-01-01",
      empRole: "Full Stack Developer"
    },
    {
      empId: "124",
      empName: "Jane Smith",
      empDob: "1985-05-15",
      empRole: "Web Developer"
    },
    {
      empId: "125",
      empName: "Michael Johnson",
      empDob: "1988-11-30",
      empRole: "Admin"
    },
    {
      empId: "126",
      empName: "Emily Brown",
      empDob: "1992-03-20",
      empRole: "Employee"
    },
    {
      empId: "127",
      empName: "David Wilson",
      empDob: "1982-09-10",
      empRole: "Employee"
    }
  ];
  
const EmployeeList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredEmployees = employees.filter(employee =>
      employee.empName.toLowerCase().includes(searchTerm.toLowerCase())
    );
      
  return (
    <div>
       <div className='flex justify-end items-end mt-10 mr-[22px]'>
        <img style={{height:"40px",width:"40px",background: "transparent url('img/Group 46.png') 0% 0% no-repeat padding-box"}} src={logo} alt="" />
      </div>
      <div className='flex justify-center mt-20'>
        <img src={moptro} alt="" />
      </div>

      <div className='main'>
      <div className="container">
        <form>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type='submit'><Search sx={{color:"#FFFFFFB3"}}/></button>
        </form>
      </div>
      </div>
      
      <div className="employee-list">
        {filteredEmployees.map(employee => (
          <EmployeeCard key={employee.empId} employee={employee} />
        ))}
      </div>

      <BottomMenu/>
           
       
    
    </div>
  )
}

export default EmployeeList
