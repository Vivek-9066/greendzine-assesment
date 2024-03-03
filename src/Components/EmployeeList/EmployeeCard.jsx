import React from 'react'
import './EmployeeCard.css'

const EmployeeCard = ({employee}) => {
  return (
    <div className='card-container'>
       <div className="emp-card">
      <div className="emp-info">
        <p><strong>Emp ID:</strong> {employee.empId}</p>
        <p><strong>Emp Name:</strong> {employee.empName}</p>
        <p ><strong>Emp DOB:</strong><span style={{ color: 'orange' }}> {employee.empDob}</span></p>
        <p><strong>Emp Role:</strong> <span style={{ color: '#36A546' }}>{employee.empRole}</span> </p>
      </div>
    </div>
    </div>
  )
}

export default EmployeeCard
