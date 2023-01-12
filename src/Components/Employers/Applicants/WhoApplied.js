import { compose } from '@mui/system';
import React, { useEffect,useState } from 'react'

const WhoApplied = () => {
    const [appliedCandidateForJob,setAppliedCandidate] = useState();
    let userId = JSON.parse(localStorage.getItem("userToken"));
    let Etoken = userId.token;
    const fetchAppliedCandidate = async () =>{
        const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/fetchAllapply",{
            method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({Etoken})
        });
        const data = await res.json();
        console.log(data);
        if(data.success === true){
            setAppliedCandidate(data.message);
            console.log(data);
        }else{
            console.log(data);
            alert(data.message);
        }
    }
    const contact = async (email,option,jobName,companyName) =>{
            const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/sendEmail",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({email,option,jobName,companyName})
            });
            const data = await res.json();
            alert(data.message);
    }
    useEffect(()=>{
        fetchAppliedCandidate();
    },[]);
  return (
    <>
        <section className='candidate-profile-section'>
            <div className="conatiner">
                <div className="jobs">
                {
                    appliedCandidateForJob?.map((j)=>{
                        return(
                            <>
                                <div className="Jobs-listing">
                                    <div className="company-name">
                                        <p>Role:<span>{j.job_name}</span></p>
                                    </div>
                                    <div className="candidate-info">
                                        <p>Candidate name <span>{j.fName} {j.lName}</span></p>
                                        <p>Candidate role in previous company <span>{j.primary_role}</span></p>
                                        <p>Candidate total experience <span>{j.total_experience}</span></p>
                                        <p>Candidate email id <span>{j.eMail}</span></p>
                                        <p>Candidate previous company <span>{j.current_company}</span></p>
                                        <p>Candidate current CTC <span>{j.current_CTC}</span></p>
                                        <p>Candidate resume <a href ={`https://workplace-backend-production-7a56.up.railway.app/uploads/${j.resume}`} target="_blank">Download</a></p>
                                    </div>
                                    <div className="action-btn">
                                    <button onClick={()=>contact(j.eMail,"accept",j.job_name,j.companyToApply)}>Accept</button>
                                    <button onClick={()=>contact(j.eMail,"reject",j.job_name,j.companyToApply)}>Reject</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </section>
    </>
  )
}

export default WhoApplied