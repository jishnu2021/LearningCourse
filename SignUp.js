import React, { useState,useEffect } from 'react';
import './signup.css'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();

useEffect(()=>{
  const auth=localStorage.getItem('user');
  if(auth){
    navigate('/')
  }
})
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetch('http://localhost:5000/signup', {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!result.ok) {
        throw new Error('Failed to fetch');
      }
      const res = await result.json();
      console.warn(res);
      localStorage.setItem("user",JSON.stringify(res))
      navigate('/');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="form-title">Sign Up</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <button className="signup-button" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
