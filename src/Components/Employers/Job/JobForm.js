import React, { useState } from "react";

const JobForm = () => {
  const initialState = {
    role: "",
    experience: "",
    company: "",
    location: "",
    package: "",
    job_type: "",
    description:""
  };
  const [jobData, setJobData] = useState(initialState);

  const handleState = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setJobData({...jobData,[name]:value});
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    let {token} = JSON.parse(localStorage.getItem("userToken"));
    const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/addjob",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({id:token,...jobData})
        });
        const data = await res.json();
            if(data.success === true){
                    alert(data.message);
                    setJobData(initialState);
            }       
  }
  return (
    <section className="candidate-profile-section">
      <div className="container">
        <div className="regitser-form">
          <div className="form-box">
            <div className="page-heading">
              <h1>Add new job</h1>
            </div>
            <form
              className="candidateProfileForm"
              onSubmit={handleFormSubmission}
            >
              <div className="profile-company candidate-field">
                <div className="profile candidate-input">
                  <label htmlFor="name">Role</label>
                  <input
                    type="text"
                    name="role"
                    id="name"
                    value={jobData.role}
                    onChange={handleState}
                    placeholder="Job role"
                    
                  />
                </div>
                <div className="company candidate-input">
                  <label htmlFor="lastname">Experice required</label>
                  <input
                    type="text"
                    name="experience"
                    id="lastname"
                    value={jobData.experience}
                    onChange={handleState}
                    placeholder="Experience needed"
                    
                  />
                </div>
              </div>
              <div className="profile-company candidate-field">
                <div className="profile candidate-input">
                  <label htmlFor="email">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    id="email"
                    value={jobData.company}
                    onChange={handleState}
                    placeholder="Company Name"
                    
                  />
                </div>
                <div className="company candidate-input">
                  <label htmlFor="who">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="who"
                    value={jobData.location}
                    onChange={handleState}
                    placeholder="Location"
                    
                  />
                </div>
              </div>
              <div className="profile-company candidate-field">
                <div className="profile candidate-input">
                  <label htmlFor="image">Package</label>
                  <input
                    type="text"
                    name="package"
                    id="image"
                    value={jobData.package}
                    onChange={handleState}
                    placeholder="Package"
                  />
                </div>
                <div className="company candidate-input">
                  <label htmlFor="current_company">Job type</label>
                  <input
                    type="text"
                    name="job_type"
                    value={jobData.job_type}
                    id="current_company"
                    onChange={handleState}
                    placeholder="Job type"
                  />
                </div>
              </div>
              <div className="profile-company candidate-field textarea">
                <div className="profile candidate-input">
                  <label htmlFor="image">Job description</label>
                  <textarea id="w3review" name="description" rows="8" cols="50" onChange={handleState}>
                  {jobData.description}
                  </textarea>
                </div>
              </div>
              <div className="candidateProfileSubmit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobForm;
