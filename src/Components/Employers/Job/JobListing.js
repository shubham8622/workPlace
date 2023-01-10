import React, { useEffect,useState } from 'react'

const JobListing = () => {
    const [allJobs,setJobs] = useState();
    const fetchAllJobs = async () =>{
        let {token} = JSON.parse(localStorage.getItem("userToken"));
        const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/jobs",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:token})
        });
        const jobs = await res.json();
        if(jobs.success === true){
            setJobs(jobs.message);
        }else{
            alert("You haven't posted any job")
        }
        // console.log(allJobs);
    }
    const deleteJob = async (id) =>{
        const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/deleteJob",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:id})
        });
        const jobs = await res.json();
        setJobs(jobs.message);

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
                                        <p>Company:<span>{j.company}</span></p>
                                    </div>
                                    <div className="des">
                                        <p>Experience:<span>{j.experience}</span></p>
                                        <p>Description:<span>{j.description}</span></p>
                                    </div>
                                    <div className="action-btn">
                                    <button>Edit</button>
                                    <button onClick={()=>deleteJob(j._id)}>Delete</button>
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