import React, { useEffect } from 'react'
import {useNavigate } from "react-router-dom";

const About = () => {
  
  const navigate = useNavigate();

  const callAboutUs = async ()=>{
    try {
      const res = await fetch('http://localhost:5000/about',{
        method: 'get',
        headers: { 
          Accept: 'application/json',
          'Content-Type': 'application/json',
        
        },
           credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      if(!data){
        throw new Error(`Could not find credentials`);
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }
  useEffect(()=>{
    callAboutUs();
  },[]);
  return (
    <div>About</div>
  )
}

export default About