import React, { useState } from 'react'
import Inputfield from './Inputfield'

const Form=()=> {

    const [formData , setformData] = useState({
     firstname:"",
     lastname:"",
     email:"",
     password:""
    })

  const handleChange=(e)=>{
    setformData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(formData)
  }

  return (
    <div>
        <div className="main-login">
        <div className="container-login">
        <div className="content-login">
             <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <Inputfield
                      label="First Name"
                      type="text"
                      placeholder="Enter first name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />

                     <Inputfield
                      label="Last Name"
                      type="text"
                      placeholder="Enter last name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />

                     <Inputfield
                      label="Email Id"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                     <Inputfield
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button  className='btn'type='submit'>Submit</button>
                </form>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Form
