import React from "react";

const RegisterForm = () => {
  return (
    <>
      <section className="register-form-section">
        <div className="container">
          <div className="regitser-form">
            <div className="form-box">
              <div className="page-heading">
                <h1>Register Here</h1>
              </div>
              <form action="">
                <div className="inputs">
                  <div className="labels-input">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="fName"
                      id="firstName"
                      className="input-field"
                      placeholder="First Name"
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
                    />
                  </div>
                </div>
                <div className="inputs">
                  <div className="labels-input">
                    <label htmlFor="phoneNumber">Mobile Number</label>
                    <input
                      type="text"
                      name="pNumber"
                      id="phoneNumber"
                      className="input-field"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="labels-input gender-input">
                    <label htmlFor="gender">Gender</label>
                    <div className="userGender">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="gender"
                      />
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="gender"
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
                    />
                  </div>
                  <div className="labels-input">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="input-field"
                      placeholder="Password"
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
