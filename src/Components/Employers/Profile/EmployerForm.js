import React, { useEffect, useState } from 'react'

const EmployerForm = () => {
    // get user detail
    
    const initialState = {
        fName:"",
        lName:"",
        eMail:"",
        who:"",
        image:"",
        company:"",
        phone_number:"",
        industry:"",
        company_size:"",
    }
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
                console.log(profileData);
            }
        }
    const handleState = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setProfileData({...profileData,[name]:value});
    }
    const handleFormSubmission = async (e) =>{
        e.preventDefault();
        const res = await fetch("http://localhost:4000/employerDetail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(profileData)
        });

        const response = await res.json();
        console.log(response);
    }
    useEffect(()=>{
        userDetailFun()
    },[]);
  return (
    <>
        <section className="candidate-profile-section">
        <div className="container">
          <div className="regitser-form">
            <div className="form-box">
              <div className="page-heading">
                <h1>Employer Profile</h1>
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
                            <label htmlFor="current_company">Company name</label>
                            <input type="text" name="company" value={profileData.company} id="current_company" onChange={handleState} placeholder="Current company"/>
                        </div>
                    </div>
                    <div className="profile-company candidate-field">
                        <div className="profile candidate-input">
                            <label htmlFor="image">Phone number</label>
                            <input type="text" name="phone_number" value={profileData.phone_number} onChange={handleState} placeholder="Enter your Number"/>
                        </div>
                        <div className="company candidate-input">
                            <label htmlFor="current_company">Company Size</label>
                            <input type="text" name="company_size" value={profileData.company_size} id="current_company" onChange={handleState} placeholder="Current company"/>
                        </div>
                    </div>
                    <div className="profile-company candidate-field">
                        <div className="profile candidate-input">
                            <label htmlFor="image">Industry</label>
                            <input type="text" name="industry" value={profileData.industry} onChange={handleState} placeholder="Enter your Number"/>
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

export default EmployerForm