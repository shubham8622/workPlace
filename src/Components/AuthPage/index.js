import Login from './Login'
import Header from '../LandingPage/Header';
import { useDispatch,useSelector } from 'react-redux';
import { middlewarReq } from '../../store/loginSlice';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Auth = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state => state.login.loggedIn);
  if(data.auth === true)
  {
    (data.who === "candidate")?navigate('/candidate/profile'):navigate('/employer/profile')
  }
  useEffect(()=>{
    let token = localStorage.getItem("userToken");
      if(JSON.parse(token) === null){
          navigate("/auth");
      }else{
          dispatch(middlewarReq(token))
    }
  },[]);
  return (
    <>
        <Header/>
        <Login data = {props}/>
    </>
  )
}

export default Auth