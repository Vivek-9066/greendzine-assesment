import React from 'react'
import logo from '../../Assets/Group 3.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate("/dashboard")
    }
  return (
    <div className='overflow-x-hidden'>
        <div className='flex items-center justify-center mt-40'>
            <img src={logo} alt="" />
        </div>
        <div className='text-center mt-[17px] opacity-50'>
            <p style={{color:"#36A546CC",font:"160px"}}>#We are Electric</p>
        </div>

        <div className='flex justify-center mt-[49px]'>
      <input
     style={{padding:"10px", outline:"none" ,height:"42px",width:"238px",borderRadius:"25px",
     background:"#1F191966 0% 0% no-repeat padding-box",color:"#FFFFFF",
     boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",mixBlendMode:"normal",opacity:1}}
        type="email"
        id="email"
        placeholder='Email'
        required
        name="Email"
      />
        </div>
        <div className='flex justify-center mt-[20px]'>
      <input
      style={{padding:"10px", outline:"none" ,height:"42px",width:"238px",borderRadius:"25px",
      background:"#1F191966 0% 0% no-repeat padding-box",color:"#FFFFFF",
      boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",mixBlendMode:"normal",opacity:1}}
        type="password"
        id="password"
        placeholder='Password'
        required
        name="Password"
      />
    </div>
    <div className='flex text-center items-center justify-center'>
        <Button onClick={handleClick} sx={{background:"transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box",border:"2px solid #8CFF0026",opacity:"1",mixBlendMode:"normal",height:"42px",width:"238px",marginTop:"47px",borderRadius:"25px"}}>
            Login
            </Button>
    </div>

    <div className='flex text-center items-center justify-center mt-[26px]'>
        <h2 style={{color:"#36A546",height:"19px",width:"143px",textAlign:"center",font:"normal normal normal 15px/20px Mulish"}}>Forgot Password?</h2>
    </div>
      
    </div>
  )
}

export default Login
