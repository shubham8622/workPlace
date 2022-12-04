import React, { useState } from "react";

const initialState = {
  fName:"",
  lName:"",
  who:"",
  gender:"",
  eMail:"",
  password:"",
}
const RegisterForm = () => {

  const [form,setForm] = useState(initialState);

  const handleState = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    setForm({...form,[name]:value});
  }

  const handleFormSubmission = async (event) =>{
    event.preventDefault();
    const {fName,lName,pNumber,gender,eMail,password} = form;
    if(!(fName,lName,pNumber,gender,eMail,password)){
      alert("Fill all the fields");
    }else{
      const res = await fetch("https://workplace-backend.onrender.com/register",{
          method:"POST",
          // mode: 'cors', 
          headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      });
      const data = await res.json();
      if(data.res){
        alert(data.res);
      }else{
        alert("You are registered.");
        setForm(initialState);
      }
      document.getElementById("register-form").reset();
    }
  }
  return (
    <>
      <section className="register-form-section">
        <div className="container">
          <div className="regitser-form">
            <div className="form-box">
              <div className="page-heading">
                <h1>Register Here</h1>
              </div>
              <form id="register-form" className="registerForm" onSubmit={handleFormSubmission}>
                <div className="inputs">
                  <div className="labels-input">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="fName"
                      id="firstName"
                      className="input-field"
                      placeholder="First Name"
                      onChange={handleState}
                      value={form.fName}
                    />
                  </div>
                  <div className="labels-input">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lName"
                      id="lastName"
                      className="input-field"
                      placeholder="Last Name"
                      onChange={handleState}
                      value={form.lName}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <div className="labels-input">
                    <label htmlFor="phoneNumber">Employer/Candidate</label>
                    <div className="userIdentity">
                      <input
                          type="radio"
                          name="who"
                          value="employer"
                          onChange={handleState}
                        />
                        Employer
                        <input
                          type="radio"
                          name="who"
                          value="candidate"
                          onChange={handleState}
                        />
                        Candidate
                      </div>
                  </div>
                  <div className="labels-input gender-input">
                    <label htmlFor="gender">Gender</label>
                    <div className="userGender">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleState}
                      />
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleState}
                      />
                      Female
                    </div>
                  </div>
                </div>
                <div className="inputs">
                  <div className="labels-input">
                    <label htmlFor="userEmail">Email</label>
                    <input
                      type="email"
                      name="eMail"
                      id="userEmail"
                      className="input-field"
                      placeholder="Email"
                      onChange={handleState}
                      value={form.eMail}
                    />
                  </div>
                  <div className="labels-input">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input-field"
                      placeholder="Password"
                      onChange={handleState}
                      value={form.password}
                    />
                  </div>
                </div>
                <div className="submit-btn">
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
