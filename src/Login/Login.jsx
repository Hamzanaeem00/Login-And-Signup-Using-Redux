import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [LoginData, setLoginData] = useState([]);
    console.log(LoginData);

    const handleEmailChange = (event) => {
      setEmail(event.target.value);

    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLoginSubmit = (event) => {
      event.preventDefault();
      setLoginData([{email, password}])

    };
  
    return (
      <div>
        <h4>Login</h4>
        <form onSubmit={handleLoginSubmit}>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
  
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
  
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default Login

