import React, { useState } from "react";
import Inputfield from "./Inputfield";

import { Link } from "react-router-dom";

const Login = () => {
  const [ emailError , setEmailerror ] = useState("");
  const [ passwordError ,setPassworderror] = useState("")
  const [formData, setformData] = useState({
   
    email: "",
    password: "",
   
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassworderror("");
    setEmailerror("");
   
    
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (u)=>u.email === formData.email);

       if (!user) {
    setEmailerror("Email not found!");
   return;
  }
    const userPassword = existingUsers.find(
      (u)=>u.password === formData.password);

   if (!userPassword) {
      setPassworderror("Password does not match!");
      return;
    }
   localStorage.setItem(("userLogin") , JSON.stringify(formData));

   setformData({
    email:"",
    password:""
   })
  };

  return (
    <div>
      <div className="main-login">
        <div className="container-login">
          <div className="content-login">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
              {/* <Inputfield
                label="Full Name:"
                type="text"
                placeholder="Enter full name"
                name="Fullname"
                value={formData.Fullname}
                onChange={handleChange}
                required
                minLength="3"
                pattern="^[A-Za-z ]+$"
                title="Only letters allowed"
              /> */}

              {/* <Inputfield
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              /> */}

              <Inputfield
                label="Email Id:"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {emailError && <p style={{ color: "red", textAlign: "center" , marginTop:"-5px",marginLeft:"130px"}}>{emailError}</p>}

              <Inputfield
                label="Password:"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
                maxLength="10"
                pattern="(?=.*[A-Z])(?=.*[0-9]).{6,}"
                title="Must contain at least 1 uppercase letter and 1 number"
              />
              {passwordError && <p style={{ color: "red", textAlign: "center" , marginTop:"-5px",marginLeft:"130px"}}>{passwordError}</p>}
              <button className="btn" type="submit">
                Submit
              </button>
              <p className="para">
                Don't have an account?{" "}
                <Link to="/register">Register Now!</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
