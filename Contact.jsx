import React, { useState } from "react";
import './Contact.css'
const ContactUs = () => {

  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  const[problem,setProblem]=useState("");


const handlesubmit=async (event)=>{
  event.preventDefault();
  try {
    const res=await fetch('http://localhost:5000/help',{
      method:'post',
      body:JSON.stringify({fname,lname,email,number,problem}),
      headers:{
        'Content-Type': 'application/json',
      }
    });
    if(!res.ok){
      throw new Error('Failed to fetch')
    }
    const result=await res.json();
    console.warn(result);

    setFname("");
    setLname("");
    setEmail("");
    setNumber("");
    setProblem("");
  }
  catch(error){
    console.error('Error:',error.message);
  }
};  
  return (
    <>
      <div className="contact1">
        <h1>
          <center>Contact Us</center>
        </h1>
        <span>
          <center>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            facere, aliquid dolorem id quasi optio!
          </center>
        </span>
        <span>
          <center>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </center>
        </span>
      </div>
      <div className="contact">
        <div className="box1">
          <h3>
            Contact Buisness <br />
            Solution Sales
          </h3>

          <span>Already a customer or need help with a</span>
          <br />
          <span>billing issues? </span>
          <a href="#">Contact Support</a>

          <h6>Lorem, ipsum dolor.</h6>
          <div className="call">
            <div className="call1">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="call2">+1800 708 8749</div>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur.</span>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing.</h5>
          <div className="social">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="box2">
         <div className="form">
         <div className="detail">
          <label htmlFor="/">First Name:</label>
          <input type="text" name="first name" id="first name" value={fname} 
          onChange={(e)=>setFname(e.target.value)}
           placeholder="First Name"/>
          <label htmlFor="/">Email:</label>
          <input type="email" name="email" id="email" value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email Address"/>
          


          </div>
           <div className="detail2">
          <label htmlFor="/">Last Name:</label>
          <input type="text" name="last name" id="last name" value={lname}
          onChange={(e)=>setLname(e.target.value)}
          placeholder="Last Name"/>
          <label htmlFor="/">Phone Number:</label>
          <input type="number" name="phone number" id="phone number" value={number} 
          onChange={(e)=>setNumber(e.target.value)}
          placeholder="Phone Number"/>
          
           </div>
           </div>
      <div className="check">
 
      <p>Write your problem</p>
      <textarea name="problem" id="problem" value={problem} 
      onChange={(e)=>setProblem(e.target.value)}
      placeholder="Enter your questions...."
      cols="30" rows="10"></textarea>

  </div>
      
      <div className="btn">
      <button onClick={handlesubmit}>Submit</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
