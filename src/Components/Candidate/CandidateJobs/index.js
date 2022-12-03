import React,{useEffect, useState} from 'react'
import Header from '../../LandingPage/Header';
import Footer from '../../LandingPage/Footer';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { middlewarReq } from '../../../store/loginSlice';
import JobListing from './JobListing';
const CandidateJobs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
  const data = useSelector(state=>state.login.loggedIn);
  if(data.auth === false) navigate("/auth");
  else if((data.auth === true) && (data.who === "employer")) navigate("/employer/profile");
  useEffect(()=>{
    let token = localStorage.getItem("userToken");
    console.log(JSON.parse(token) === null);
    if(JSON.parse(token) === null){
      navigate("/auth");
    }else{
      dispatch(middlewarReq(token));
      setLoading(true);
    }
  },[]);
  return (
    <>
      <Header/>
      <JobListing/>
      <Footer/>
    </>
  )
}

export default CandidateJobs