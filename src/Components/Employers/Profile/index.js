import React, { useEffect, useMemo } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { middlewarReq } from '../../../store/loginSlice';
import Header from '../../LandingPage/Header';
import EmployerForm from './EmployerForm';
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state=>state.login.loggedIn);
  // let userAuth = useMemo(()=>data,[data]);
  if(data.auth === false) navigate("/auth")
  else if((data.auth === true) && (data.who === "candidate")) navigate("/candidate/profile");

  useEffect(()=>{
    let token = localStorage.getItem("userToken");
    if(JSON.parse(token) === null){
      console.log("jdsk")
      navigate("/auth");
    }else{
      dispatch(middlewarReq(token))
    }
  },[]);
  return (
    <>
      <Header/>
      <EmployerForm/>
    </>
  )
}

export default Profile