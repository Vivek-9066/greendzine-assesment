import React from 'react'
import logo from '../../Assets/Group 46.png'
import moptro from '../../Assets/moptro logo.png'
import './Dashboard.css'
import BottomMenu from '../BottomMenu/BottomMenu'

const Dashboard = () => {
  
    
    const productivityData = [
        {day:"Productivity on Monday" ,productivity:80},
        {day:"Productivity on Tuesday",productivity: 90},
        {day:"Productivity on Wednesday",productivity: 90},
        {day:"Productivity on Thursday",productivity: 70},
        {day:"Productivity on Friday",productivity: 40},
        {day:"Productivity on Saturday",productivity: 50},
        {day:"Productivity on Sunday",productivity: 90}
    ];

  return (
   <div>
      <div className='flex justify-end items-end mt-10 mr-[22px]'>
        <img style={{height:"40px",width:"40px",background: "transparent url('img/Group 46.png') 0% 0% no-repeat padding-box"}} src={logo} alt="" />
      </div>
      <div className='flex justify-center mt-20'>
        <img src={moptro} alt="" />
      </div>
   
   <div className="dashboard-container">
      <div className="card p-4 mt-10" >
    
        <h2 className="text-lg font-semibold mb-4 p-1 text-center">
            Employee Productivity Dashboard</h2>

        {productivityData.map((data, index) => (
            <div>
          <div key={index} className="flex justify-between items-center mb-2">
            <p style={{color:"#FFFFFF"}}>{data.day}</p>
            <p style={{color:"#36A546"}}>{data.productivity}</p>
          </div>
          <div className="h-[11px] mb-[13px]" style={{ width: `${data.productivity}%` ,borderRadius:"25px",background:"#36A54680 0% 0% no-repeat padding-box",color:"#36A546"}}></div>
          </div>
        ))}
        
      </div>
      <div/>
    </div>
    <div className='mt-10'>
    <BottomMenu/>
    </div>
    </div>
    
  )
}

export default Dashboard
