import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import { createSignupData } from "../store/redux/SignupApi";
import './signup.css'
 import Logo  from '../../src/assets/Logo 1.png'
import { toast } from "react-toastify";

const Signup = () => {
  const loginData = useSelector((state)=> state.signup?.signup)
  console.log("loginData==>", loginData);


  let globalData = []
    loginData.forEach((item)=>{
      console.log(item);
      globalData= item.payload
    })
    // console.log(signupData);
    let finalData =[]
    globalData.forEach((item)=>{
      console.log(item);
     finalData = item
    })
    console.log(finalData);


  const [signupData, setSignupData] = useState([]);
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  }); 
  const [isMember, setIsMember]= useState(false)

  const disptach = useDispatch ()

const navigate = useNavigate()

  const  handleChange = (e)=>{
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]:value
    });
    
  }
  const handleLogin= ()=>{
    setIsMember(true)
  }
  const handleSignup= ()=>{
    setIsMember(false)


  }


  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    setSignupData([data]); 
    if(!data.name || !data.email || !data.password){
        //  alert("Please Fill All the Data")
         toast.warn("Please Fill Out All Fields")
    }else{
      createSignupData(disptach, signupData) 
      console.log(signupData);
      if(signupData.length>0){
        // navigate(`/login`)
        setIsMember(true)
         setData( {name:"",
         email:"",
         password:""})
         toast.success("Submitted Successfully")
      }


    }
    
  };

  const handleLoginSubmit = (event)=>{
    event.preventDefault();
    if(finalData.email=== data.email && finalData.password=== data.password){
      console.log("loginSuccesfully");
      toast.success("Login Successfully")

        navigate(`/welcome`)
    }else{
      
      console.log("login failed");
      toast.error("Login Failed");
    }
    // console.log("clicked");
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
        { !isMember? (
          <div className="form-group">
          <label>Name</label>
          <input type="text" 
          placeholder="Enter Your Name"
          name ='name'
          value={data.name}
          onChange = {handleChange}
          />
          </div>
        ):""
        }
        
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
          {!isMember?(
             <button  className="button-85"
             type="submit"
              onClick={handleSignUpSubmit}>Submit</button>
          ):(
            <button  className="button-85"
            type="submit"
             onClick={handleLoginSubmit}>Login</button>
          )}
       

         {/* Navigate to Login Page */}

          {/* <p className="signup-member">
          Already a member? <Link onClick={handleLogin} className="Login-link" 
          to="/login"
          >Login</Link>
         </p> */}


         {
         !isMember? (
         <p className="signup-member">
          Already a member? <Link onClick={handleLogin} className="Login-link" 
          >Login</Link>
         </p>
         ):(
          <p className="signup-member">
          Not a member yet? <Link onClick={handleSignup} className="Login-link" 
          >Register</Link>
         </p>
         )
         
             }
      </form>
      </div>
    </div>
  );
};

export default Signup;
