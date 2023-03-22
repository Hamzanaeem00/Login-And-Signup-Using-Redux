import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Login from "../Login/Login";
import { createSignupData } from "../store/redux/SignupApi";
// import axios from "axios";
import './signup.css'
 

const Signup = () => {
  const [signupData, setSignupData] = useState([]);
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  }); 
  // console.log(signupData);
  const disptach = useDispatch ()

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
      // alert("Signup Successfully")
    }

    
  };
  return (
    <div>
      <h4>Sign Up</h4>
      <form className="form"
      //  onSubmit={handleSignUpSubmit}
       >
        <label>Name</label>
        <input type="text" 
        name ='name'
        value={data.name}
        onChange = {handleChange}
          />
        <label>Email</label>
        <input type="email" name= 'email' value={data.email} 
        onChange={handleChange} />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button 
        type="submit"
         onClick={handleSignUpSubmit}>Sign Up</button>
      </form>

      {
        signupData >0 ?(
        <div>
          <Login />
        </div>
        ):""
      }
    </div>
  );
};

export default Signup;
