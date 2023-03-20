import React, { useState } from "react";
// import axios from "axios";
import './signup.css'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupData, setSignupData] = useState([]);

  console.log(name, email, password, signupData);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    setSignupData([{ name, email, password }]);
   
  };
  return (
    <div>
      <h4>Sign Up</h4>
      <form className="form" onSubmit={handleSignUpSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
