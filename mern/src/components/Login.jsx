import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  
}
from 'mdb-react-ui-kit';


const Login = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    "email": "",
    "password": "",
  })

  const inputChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setInput({...input, [name]: value});
  }

  const FormSubmit = async (e)=>{
    e.preventDefault();
    const {email, password} = input;

    const data = await fetch('/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
    },
  
      body: JSON.stringify({
       email,password
      })
  });

  const userData=  await data.json();

  if(userData.status === 200 || userData) {
    window.alert("Login successfull");
    console.log("Login successfull");

    navigate("/");
  }else{
    window.alert("Undefined Error!!!");
    console.log("Undefined Error!!!");
  }
}
  return (
    <>
    <form onSubmit={FormSubmit}>
    <MDBContainer fluid>
    
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Login
                </p>

                

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2" name="email"
                    value={input.email} onChange={inputChange} type="email" />
                </div>
                

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="form3" name="password"
                    value={input.password} onChange={inputChange} type="password" />
                </div>

                
                <button className="d-flex flex-row align-items-center mb-4" type="submit">Submit</button>

              </MDBCol>
              

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        
      </MDBContainer>
      </form>
      </>
  )
}

export default Login