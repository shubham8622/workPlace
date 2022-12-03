import './Register.css';
import Header from '../LandingPage/Header';
import RegisterForm from './RegisterForm';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { middlewarReq } from '../../store/loginSlice';
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state =>state.login.loggedIn);
  if(data.auth === true)
  {
    (data.who === "candidate")?navigate('/candidate/profile'):navigate('/employer/profile')
  }
  useLayoutEffect(()=>{
    let token = localStorage.getItem("userToken");
    if(JSON.parse(token) === null){
      navigate("/auth");
    }else{
      dispatch(middlewarReq(token))
    }
  },[])
  return (
    <>  
        <Header/>
        <RegisterForm/>
    </>
  )
}

export default Register