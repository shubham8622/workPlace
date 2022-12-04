import React, { useEffect, useState } from 'react'

const EmployerForm = () => {
    // get user detail
    
    const initialState = {
        fName:"",
        lName:"",
        eMail:"",
        who:"",
        image:"",
        pImage:"",
        company:"",
        phone_number:"",
        industry:"",
        company_size:"",
    }
    const [profileData,setProfileData]  = useState(initialState);
    const userDetailFun = async () =>{
        let {token} = JSON.parse(localStorage.getItem("userToken"));
        const userDetail = await fetch("https://workplace-backend.onrender.com/candidateData",{
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
                profileData.pImage = userData.message.image;
                console.log(profileData);
            }
        }
    const handleState = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        if(name === "image"){
            value = e.target.files[0];
            setProfileData({...profileData,[name]:value});
        }else{
            setProfileData({...profileData,[name]:value});
        }
    }
    const handleFormSubmission = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        for ( let key in profileData ) {
            if(key !== "image") formData.append(key, profileData[key]);
        }
        formData.append("image",profileData.image);
        const res = await fetch("https://workplace-backend.onrender.com/employerDetail",{
            method:"POST",
            // headers:{
            //     "Content-Type":"application/json"
            // },
            body:formData
        });

        const response = await res.json();
        if(response.success === true){
            alert(response.message)
            let newData = Object.assign(profileData,response.userInfo);
            setProfileData(newData)
            profileData.pImage = response.userInfo.image;
            console.log(profileData);
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
                <h1>Employer Profile</h1>
              </div>
              <form className = "candidateProfileForm" onSubmit={handleFormSubmission} encType="multipart/form-data">
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
                            <input type="file" name="image" id="image" onChange={handleState}/>
                            <img src = {`${document.location.origin}/${profileData.pImage}`} width="50" height="50"/>
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