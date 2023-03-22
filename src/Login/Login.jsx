import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Welcome from '../welcomePage/Welcome';

const Login = () => {
    const [data, setData] = useState({
      email:"",
      password:""
    });
    const dispatch = useDispatch()
    const loginData = useSelector((state)=> state.signup?.signup)
    console.log("loginData==>",loginData);

let signupData= []
    loginData.forEach((item)=>{
      console.log(item);
         signupData= item.payload
    })
    // console.log(signupData);
    let finalData =[]
    signupData.forEach((item)=>{
      console.log(item);
     finalData = item
    })
    console.log(finalData);


    const handleChange = (event) => {
      const value = event.target.value
      setData({
        ...data,
        [event.target.name]: value
      })

    };

    useEffect(()=>{
//  loginData(dispatch)
    }, [dispatch])

  
    const handleLoginSubmit = (event) => {
      event.preventDefault();

      if(finalData.email=== data.email && finalData.password=== data.password){
        console.log("loginSuccesfully");
        return(
          <div>
            <Link to='/welcome' className='btn btn-hero'>
            <Welcome />
          </Link>
          </div>
        )
      }else{
        console.log("login failed");
      }
    };
  
    return (
      <div>
        <h4>Login</h4>
        <form onSubmit={handleLoginSubmit}>
          <label>Email</label>
          <input type="email" name='email' value={data.email} onChange={handleChange} />
  
          <label>Password</label>
          <input type="password" name = "password" value={data.password} onChange={handleChange} />
  
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default Login

