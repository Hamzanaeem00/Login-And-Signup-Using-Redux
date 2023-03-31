import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { createSignupData } from "../store/redux/SignupApi";
import './signup.css'
 import Logo  from '../../src/assets/Logo 1.png'

const Signup = () => {
  const [signupData, setSignupData] = useState([]);
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  }); 
  // console.log(signupData);
  const disptach = useDispatch ()
const navigate = useNavigate()

  const  handleChange = (e)=>{
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]:value
    });
    
  }

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    setSignupData([data]); 
    if(!data.name || !data.email || !data.password){
         alert("Please Fill All the Data")
    }else{
      createSignupData(disptach, signupData) 
      console.log(signupData);
      if(signupData.length>0){
        navigate(`/login`)
      }
        
      // alert("Signup Successfully")
    }


    
  };
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="logo">
      <img src={Logo} alt="logo"  width="150px"/>
        </div>
      <h2 >Register</h2>
      <form className=""
       >
        <div className="form-group">
        <label>Name</label>
        <input type="text" 
        placeholder="Enter Your Name"
        name ='name'
        value={data.name}
        onChange = {handleChange}
        />
        </div>
        <div className="form-group">
        <label>Email</label>
        <input type="email" name= 'email' value={data.email} 
        placeholder="Enter Your Email"
        onChange={handleChange} />
        </div>
        <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={data.password}
          onChange={handleChange}
          />
          </div>
        <button  className="button-85"
        type="submit"
         onClick={handleSignUpSubmit}>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
