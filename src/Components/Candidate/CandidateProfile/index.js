import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {middlewarReq} from '../../../store/loginSlice';
import Header from '../../LandingPage/Header';
import CandidateForm from './CandidateForm';
import "./CandidateProfile.css";
const CandidateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state=>state.login.loggedIn);
  if(data.auth === false) navigate("/auth");
  else if((data.auth === true) && (data.who === "employer")) navigate("/employer/profile");
  useEffect(()=>{
    let token = localStorage.getItem("userToken");
    if(JSON.parse(token) === null){
      navigate("/auth");
    }else{
      dispatch(middlewarReq(token));
    }
  },[]);
  return (
    <>
      <Header/>
      <CandidateForm/>
    </>
  )
}

export default CandidateProfile