import React, { useState } from "react";

const FormValid = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    gen: "",
    select: "",
    agree: false,
    color: "",
    document: null,
    country: "",
  });

  const handlechange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
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
    console.log(formData);
  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="content">
            <h1>Fill The form</h1>

            <form onSubmit={handleSubmit}>
              <label className="label-content">First Name:</label>
              <input
                onChange={handlechange}
                name="firstname"
                value={formData.firstname}
                className="input-content"
                type="text"
                placeholder="Enter your first name"
                required
                minLength="2"
                pattern="[A-Za-z]+"
                title="Only letters allowed"
              />
              <br />
              <label className="label-content">Last Name:</label>
              <input
                onChange={handlechange}
                name="lastname"
                value={formData.lastname}
                className="input-content"
                type="text"
                placeholder="Enter your last name"
                required
                minLength="2"
                pattern="[A-Za-z]+"
                title="Only letters allowed"
              />
              <br />
              <label className="label-content">Email ID:</label>
              <input
                onChange={handlechange}
                name="email"
                value={formData.email}
                className="input-content"
                type="email"
                placeholder="Enter your email"
                required
              />
              <br />
              <label className="label-content">Phone No.:</label>
              <input
                onChange={handlechange}
                name="number"
                value={formData.number}
                className="input-content"
                type="tel"
                placeholder="Enter your number"
                required
                pattern="[0-9]{10}"
                title="Enter exactly 10 digit phone number"
              />
              <br />
              <label className="label-content">Password:</label>
              <input
                onChange={handlechange}
                name="password"
                value={formData.password}
                className="input-content"
                type="password"
                placeholder="Enter your password"
                required
                minLength="6"
                maxLength="10"
                pattern="(?=.*[A-Z])(?=.*[0-9]).{6,}"
                title="Must contain at least 1 uppercase letter and 1 number"
              />
              <br />
              <label className="label-content">Gender:</label>
              <input
               className="input-content"
                type="radio"
                name="gen"
                value="male"
                checked={formData.gen === "male"}
                onChange={handlechange}
              />
              Male
              <input
               className="input-content"
                type="radio"
                name="gen"
                value="female"
                checked={formData.gen === "female"}
                onChange={handlechange}
              />
              Female
              <input
               className="input-content"
                type="radio"
                name="gen"
                value="other"
                checked={formData.gen === "other"}
                onChange={handlechange}
              />
              Other
              <br />
              <label className="label-content">Course:</label>
              <input
               className="input-content"
                type="radio"
                name="select"
                value="btech"
                checked={formData.select === "btech"}
                onChange={handlechange}
              />
              B.Tech
              <input
               className="input-content"
                type="radio"
                name="select"
                value="bca"
                checked={formData.select === "bca"}
                onChange={handlechange}
              />
              B.C.A
              <input
               className="input-content"
                type="radio"
                name="select"
                value="bsc"
                checked={formData.select === "bsc"}
                onChange={handlechange}
              />
              Bsc IT
              <br />
              <label className="label-content">Agree:</label>
              <input
               className="input-content"
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handlechange}
              />
              <br />
              <label className="label-content">Choose Color:</label>
              <input
               className="input-content"
                type="color"
                name="color"
                value={formData.color}
                onChange={handlechange}
              />
              <br />
              <label className="label-content">Document:</label>
              <input 
               className="input-content"
               type="file"
                name="document" 
              onChange={handlechange} />
              <br />
              <label className="label-content">Country name:</label>
              <select
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
              <br />
              <br />
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValid;
