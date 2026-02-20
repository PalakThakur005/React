import React, { useState } from "react";


const LoginForm = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <div className="main-login">
        <div className="container-login">
          <div className="content-login">
            <h1>Login Form</h1>
            <form  onSubmit={handleSubmit} >
              
              <br></br>
                 <Inputfield
                 label="Emain Id:"
              onChange={handleChange}
              name='email'
              value={formData.email}
              className='input-login'
              type='email'
              placeholder='Enter your email'
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Enter a valid email address"
            />
              <br></br>
              
              <br></br>
               <Inputfield
                 label="Password:"
                onChange={handleChange}
                name="password"
                value={formData.password}
                className="input-login"
                type="password"
                placeholder="Enter your password"
                required
                minLength="6"
                maxLength="20"
                title="Password must be between 6 to 20 characters"
              />
              <br></br>
            <button className="btn1" type="submit">
              Submit
            </button>
            
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
