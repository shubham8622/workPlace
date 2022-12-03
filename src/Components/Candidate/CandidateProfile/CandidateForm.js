import React, { useEffect, useState } from 'react'
const initialState = {
    fName:"",
    lName:"",
    eMail:"",
    who:"",
    image:"",
    current_company:"",
    primary_role:"",
    total_experience:"",
    current_CTC:"",
    resume:"",
}
const CandidateForm = () => {
    // get user detail
    const [profileData,setProfileData]  = useState(initialState);
    const userDetailFun = async () =>{
        let {token} = JSON.parse(localStorage.getItem("userToken"));
        const userDetail = await fetch("http://localhost:4000/candidateData",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({id:token})
        });
        const userData = await userDetail.json();
            if(userData.success === true){
                let newData = Object.assign(profileData,userData.message);
                setProfileData(newData)
                // console.log(profileData);
            }
        }
    const handleState = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        
        // console.log(value);
        setProfileData({...profileData,[name]:value});
    }
    const handleFormSubmission = async (e) =>{
        e.preventDefault();
        // console.log(profileData);
        const res = await fetch("http://localhost:4000/candidateDetail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(profileData)
        });

        const response = await res.json();
        if(response.success === true){
            alert(response.message)
        }else{
            alert(response.message)
        }
    }
    useEffect(()=>{
        userDetailFun();
    },[]);
  return (
    <>
        <section className="candidate-profile-section">
        <div className="container">
          <div className="regitser-form">
            <div className="form-box">
              <div className="page-heading">
                <h1>Candidate Profile</h1>
              </div>
              <form className = "candidateProfileForm" onSubmit={handleFormSubmission}>
                    <div className="profile-company candidate-field">
                        <div className="profile candidate-input">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="fName" id="name" value={profileData.fName} onChange={handleState} placeholder="Name" disabled/>
                        </div>
                        <div className="company candidate-input">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lName" id="lastname" value={profileData.lName} onChange={handleState} placeholder="Last Name" disabled/>
                        </div>
                    </div>
                    <div className="profile-company candidate-field">
                        <div className="profile candidate-input">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="eMail" id="email" value={profileData.eMail} onChange={handleState} placeholder="Email" disabled/>
                        </div>
                        <div className="company candidate-input">
                            <label htmlFor="who">Who</label>
                            <input type="text" name="who" id="who" value={profileData.who} onChange={handleState} placeholder="Who" disabled/>
                        </div>
                    </div>
                    <div className="profile-company candidate-field">
                        <div className="profile candidate-input">
                            <label htmlFor="image">Profile</label>
                            <input type="file" name="image" id="image" value="" onChange={handleState}/>
                        </div>
                        <div className="company candidate-input">
                            <label htmlFor="current_company">Current company</label>
                            <input type="text" name="current_company" value={profileData.current_company} id="current_company" onChange={handleState} placeholder="Current company"/>
                        </div>
                    </div>
                    <div className="profile-company candidate-field">
                        <div className="profile candidate-input">
                            <label htmlFor="primary_role">Primary role</label>
                            <input type="text" name="primary_role" id="primary_role" value={profileData.primary_role} onChange={handleState} placeholder='Primary role'/>
                        </div>
                        <div className="company candidate-input">
                            <label htmlFor="total_experience">Total experience</label>
                            <input type="text" name="total_experience" id="total_experience" value={profileData.total_experience} onChange={handleState} placeholder="Total experience"/>
                        </div>
                    </div>
                    <div className="profile-company candidate-field">
                        <div className="profile candidate-input">
                            <label htmlFor="current_ctc">Current CTC</label>
                            <input type="text" name="current_CTC" id="current_ctc" value={profileData.current_CTC} onChange={handleState} placeholder="Current CTC"/>
                        </div>
                        <div className="company candidate-input">
                            <label htmlFor="resume">Resume</label>
                            <input type="file" name="resume" id="resume" value="" onChange={handleState}/>
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
    </>
  )
}

export default CandidateForm