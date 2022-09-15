import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

const Register = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    "name": "",
    "email": "",
    "phone": "",
    "work": "",
    "password": "",
    "cpassword": ""
  })

  const inputChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setInput({...input, [name]: value});
  }

  const FormSubmit = async (e)=>{
    e.preventDefault();
    console.log(input.name);
    const { name, email, phone, work, password, cpassword } = input;

    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
    },
  
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
  });

  const resData = await res.json();

  if(resData.status === 201 || resData) {
    window.alert("Resgistration successfull");
    console.log("Resgistration successfull");

    navigate("/login");
  }else{
    window.alert("Undefined Error!!!");
    console.log("Undefined Error!!!");
  }
}

  return (
    <>
      <MDBContainer fluid>
      <form method="POST" onSubmit={FormSubmit}>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Registeration
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="name"
                    value={input.name}
                    onChange={inputChange}
                  />
                </div>

                

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2" name="email"
                    value={input.email} onChange={inputChange} type="email" />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Phone"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="phone"
                    value={input.phone}
                    onChange={inputChange}
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Profession"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="work"
                    value={input.work}
                    onChange={inputChange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="form3" name="password"
                    value={input.password} onChange={inputChange} type="password" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    name="cpassword"
                    value={input.cpassword}
                    onChange={inputChange}
                  />
                </div>
<button type="submit">Submit</button>
or <NavLink to="/login"><button style={{backgroundColor: '#83B5A6', roundRadius:'1px'}}>Already Have account?</button></NavLink>
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
        </form>
      </MDBContainer>
    </>
  );
  };
export default Register;
