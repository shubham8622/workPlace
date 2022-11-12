import React from 'react'
import { BrowserRouter,Route, Routes, Outlet, Navigate } from "react-router-dom"
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
const Navigation = () => {

    const CandidatProtectedRoutes = () =>{
        if("a" == "a"){
            return <Outlet/>
        }else{
            return <Navigate to="/"/>
        }
    }

    const EmployerProtectedRoutes = () =>{
        if("a" == "a"){
            return <Outlet/>
        }else{
            return <Navigate to="/"/>
        }
    }

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="employer/auth" element={<AuthPage />} />
                <Route path="candidate/auth" element={<AuthPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/register" element={<Register />} />

                {/* Candidate Routes start */}
                <Route element={<CandidatProtectedRoutes/>}>
                    <Route path="/candidateOnboarding" element={<CandidateOnboarding />} />
                    <Route path="/candidate/profile" element={<CandidateProfile />} />
                    <Route path="/candidate/jobs" element={<CandidateJobs />} />
                    <Route path="/candidate/conversation" element={<CandidateConversation />} />
                    <Route path="/candidate/applications" element={<Applications />} />
                {/* Candidate Routes end */}
                </Route>
                {/* Employer Routes start */}
                <Route element={<EmployerProtectedRoutes />}>
                    <Route path="/employerOnboarding" element={<Onboarding />} />
                    <Route path="/employer/profile" element={<Profile />} />
                    <Route path="/employer/jobs" element={<Jobs />} />
                    <Route path="/employer/conversation" element={<Conversation />} />
                    <Route path="/employer/applicants" element={<Applicants />} />
                </Route>
                {/* Employer Routes end */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Navigation