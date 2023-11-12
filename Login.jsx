import React, { useEffect, useState } from 'react';
import './login.css'
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

useEffect(()=>{
  const auth=localStorage.getItem('user')
  if(auth){
    navigate('/')
  }
})

const SubmitForm= async(e)=>{
     e.preventDefault();
    let result=await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers: {
            'Content-Type': 'application/json',
          },
    })
    const res=await result.json()
    if(res.name){
      localStorage.setItem('user',JSON.stringify(res))
       navigate('/')
    }else{
        alert('please enter correct details')
    }
}


  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit" onClick={SubmitForm}>Login</button>
      </form>
    </div>
  );
};

export default Login;
