import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Inputfield from "./Inputfield";
const Register = () => {
  const navigate = useNavigate();

  const [passwordError, setPassworderror] = useState("")
  const [emailError, setEmailerror] = useState("")
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    ConfirmPassword: "",
    gen: "",
    country: "",
  });


const handlechange = (e) => {
  const { name, value, type, checked, files } = e.target;

  setFormData({
    ...formData,
    [name]:
      type === "checkbox" ? checked : value,
  });
};


// ---------------------or we can also write this----------------------------//

//   const handlechange = (e) => {

//   if (e.target.type === "checkbox") {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.checked
//     })
//   }

//   else if (e.target.type === "file") {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.files[0]
//     })
//   }

//   else {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }
// }

const handleSubmit = (e) => {
  e.preventDefault();
  setPassworderror("");
  setEmailerror("");
  setMessage("");
  if (formData.password !== formData.ConfirmPassword) {
    setPassworderror("Password does not match!");
    return;
  }
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const emailExists = existingUsers.some(
    (user) => user.email === formData.email
  );
  if (emailExists) {
    setEmailerror("User already exists with this email!");
    return;
  }


  existingUsers.push(formData);

  localStorage.setItem("users", JSON.stringify(existingUsers))
  setMessage(" User Register successfully");

  setFormData({
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  password: "",
  ConfirmPassword: "",
  gen: "",
  country: "",
});


 
};

return (
  <div>
    <div className="main-login">
      <div className="container-login">
        <div className="content-login">
          <h1>Registration Form</h1>
          {message && <p style={{ color: "green",textAlign:"center" }}>{message}</p>}


          <form onSubmit={handleSubmit}>
            
            <Inputfield
              label="First Name:"
              onChange={handlechange}
              name="firstname"
              value={formData.firstname}
              type="text"
              placeholder="Enter your first name"
              required
              minLength="2"
              pattern="[A-Za-z]+"
              title="Only letters allowed"
            />


            <Inputfield
              label="Last Name:"
              onChange={handlechange}
              name="lastname"
              value={formData.lastname}
              type="text"
              placeholder="Enter your last name"
              required
              minLength="2"
              pattern="[A-Za-z]+"
              title="Only letters allowed"
            />

            <Inputfield
              label="Email ID:"
              onChange={handlechange}
              name="email"
              value={formData.email}
              type="email"
              placeholder="Enter your email"
              required
            />
            {emailError && <p style={{ color: "red", textAlign: "center", marginTop: "-5px", marginLeft: "130px" }}>{emailError}</p>}



            <Inputfield
              label="Phone No.:"
              onChange={handlechange}
              name="number"
              value={formData.number}
              type="tel"
              placeholder="Enter your number"
              required
              pattern="[0-9]{10}"
              title="Enter exactly 10 digit phone number"
            />


            <Inputfield
              label="Password:"
              onChange={handlechange}
              name="password"
              value={formData.password}
              type="password"
              placeholder="Enter your password"
              required
              minLength="6"
              maxLength="10"
              pattern="(?=.*[A-Z])(?=.*[0-9]).{6,}"
              title="Must contain at least 1 uppercase letter and 1 number"
            />

            <Inputfield
              label="Confirm Password:"
              type="password"
              placeholder="Enter your password again "
              name="ConfirmPassword"
              value={formData.ConfirmPassword}
              onChange={handlechange}
              required
              minLength="6"
              maxLength="10"
              pattern="(?=.*[A-Z])(?=.*[0-9]).{6,}"
              title="Must contain at least 1 uppercase letter and 1 number"
            />
            {passwordError && <p style={{ color: "red", textAlign: "center", marginTop: "-5px", marginLeft: "130px" }}>{passwordError}</p>}


            <label className="label-login">Gender:</label>
            <input
              className="input-login"
              type="radio"
              name="gen"
              value="male"
              checked={formData.gen === "male"}
              onChange={handlechange}
            />
            Male
            <input

              type="radio"
              name="gen"
              value="female"
              checked={formData.gen === "female"}
              onChange={handlechange}
            />
            Female
            <input
              className="input-login"
              type="radio"
              name="gen"
              value="other"
              checked={formData.gen === "other"}
              onChange={handlechange}
            />
            Other

            <br />
            <label className="label-login">Country name:</label>
            <select
              className="input-login"
              name="country"
              value={formData.country}
              onChange={handlechange}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
            </select>


            <button className="btn" type="submit">
              Submit
            </button>
            <p className="para">Already have an account / <Link to="/login">Login Here!</Link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default Register;
