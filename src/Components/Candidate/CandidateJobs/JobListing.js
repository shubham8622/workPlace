import React, { useEffect,useState } from 'react'

const JobListing = () => {
    let t = JSON.parse(localStorage.getItem("userToken"));
    let {token} = (t !== null)?JSON.parse(localStorage.getItem("userToken")):"";
    const [allJobs,setJobs] = useState();
    const fetchAllJobs = async () =>{
        let {token} = (t !== null)?JSON.parse(localStorage.getItem("userToken")):"";
        const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/allJobs");
        const jobs = await res.json(); 
        if(jobs.success === true){
            setJobs(jobs.message);
        }else{
            alert("There is no Job right now");
        }
    }

    const applyFunction = async (jobId,employerId,userId) =>{
        const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/apply",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                jobId,
                employerId,
                userId
            })
        });
        const jobs = await res.json(); 
        if(jobs.success === true){
            alert("Applied successfully");
        }else{
            alert(jobs.message);
        }
    }

    useEffect(()=>{
        fetchAllJobs();
    },[]);
  return (
    <>
        <section className='candidate-profile-section'>
            <div className="conatiner">
                <div className="jobs">
                {
                    allJobs?.map((j)=>{
                        return(
                            <>
                                <div className="Jobs-listing">
                                    <div className="company-name">
                                        <p>Role:<span>{j.role}</span></p>
                                        <p>Job type:<span>{j.job_type}</span></p>
                                    </div>
                                    <div className="location-package">
                                        <p>Locatio:<span>{j.location}</span></p>
                                        <p>Package:<span>{j.package}</span></p>
                                    </div>
                                    <div className="des">
                                        <p>Experience:<span>{j.experience}</span></p>
                                        <p>Description:<span>{j.description}</span></p>
                                    </div>
                                    <div className="action-btn">
                                    <button onClick={()=>applyFunction(j._id,j.employer_id,token)}>Apply</button>
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

export default JobListing