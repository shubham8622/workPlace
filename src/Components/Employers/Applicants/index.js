import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../LandingPage/Header';
import Footer from '../../LandingPage/Footer';
import WhoApplied from './WhoApplied';
import { middlewarReq } from '../../../store/loginSlice';
const Applicants = () => {
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
      <WhoApplied/>
      <Footer/>
    </>
  )
}

export default Applicants