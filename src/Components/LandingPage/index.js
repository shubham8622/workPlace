import React,{useEffect} from 'react';
import Header from './Header';
import Herobanner from './HeroBanner';
import Footer from './Footer';
import OnePlatform from './OnePlatform';
import FeatureJob from './FeaturedJob';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { middlewarReq } from '../../store/loginSlice';
const LandingPage = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   let token = localStorage.getItem("userToken");
  //   if(JSON.parse(token) === null){
  //     navigate("/auth");
  //   }else{
  //     dispatch(middlewarReq(token));
  //   }
  // },[]);
  return (
    <>
      <Header/>
      <Herobanner/>
      <OnePlatform/>
      <FeatureJob/>
      <Footer/>
    </>
  )
}

export default LandingPage