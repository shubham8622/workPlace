import React, { useEffect } from 'react'
import { BrowserRouter,Route, Routes, Outlet, Navigate, useNavigate } from "react-router-dom"
import LandingPage from '../Components/LandingPage';
import AuthPage from '../Components/AuthPage';
import CandidateOnboarding from '../Components/Candidate/CandidateOnboarding';
import CandidateProfile from '../Components/Candidate/CandidateProfile';
import Applications from '../Components/Candidate/Applications'
import CandidateConversation from '../Components/Candidate/CandidateConversation'
import CandidateJobs from '../Components/Candidate/CandidateJobs'
import Applicants from '../Components/Employers/Applicants';
import Conversation from '../Components/Employers/Conversation';
import Jobs from '../Components/Employers/Job';
import Onboarding from '../Components/Employers/Onboarding'
import Profile from '../Components/Employers/Profile';
import Register from '../Components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { middlewarReq } from '../store/loginSlice';
import AddJob from '../Components/Employers/AddJob.js';
const Navigation = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const data = useSelector(state=>state.login.loggedIn);
    // console.log(data);
    // useEffect(()=>{
    //     let token = localStorage.getItem("userToken");
    //     if(JSON.parse(token) === null){
    //       navigate("/auth");
    //     }else{
    //       dispatch(middlewarReq(token))
    //     }
    //   },[]);
    // const CandidatProtectedRoutes = () =>{
    //     if((data.auth === true) && (data.who === "candidate")){
    //         return <Outlet/>
    //     }else{
    //         return <Navigate to="/"/>
    //     }
    // }

    // const EmployerProtectedRoutes = () =>{
    //     if((data.auth === true) && (data.who === "employer")){
    //         return <Outlet/>
    //     }else{
    //         return <Navigate to="/"/>
    //     }
    // }

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="employer/auth" element={<AuthPage who="employer" />} />
                <Route path="candidate/auth" element={<AuthPage who="candidate"/>} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/register" element={<Register />} />

                {/* Candidate Routes start */}
                {/* <Route element={<CandidatProtectedRoutes/>}> */}
                    <Route path="/candidateOnboarding" element={<CandidateOnboarding />} />
                    <Route path="/candidate/profile" element={<CandidateProfile />} />
                    <Route path="/candidate/jobs" element={<CandidateJobs />} />
                    <Route path="/candidate/conversation" element={<CandidateConversation />} />
                    <Route path="/candidate/applications" element={<Applications />} />
                {/* Candidate Routes end */}
                {/* </Route> */}
                {/* Employer Routes start */}
                {/* <Route element={<EmployerProtectedRoutes />}> */}
                    <Route path="/employerOnboarding" element={<Onboarding />} />
                    <Route path="/employer/profile" element={<Profile />} />
                    <Route path="/employer/jobs" element={<Jobs />} />
                    <Route path="/employer/addjob" element={<AddJob />} />
                    <Route path="/employer/conversation" element={<Conversation />} />
                    <Route path="/employer/applicants" element={<Applicants />} />
                {/* </Route> */}
                {/* Employer Routes end */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Navigation