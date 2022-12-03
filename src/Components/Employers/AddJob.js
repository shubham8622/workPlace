import { useEffect } from "react"
import Header from "../LandingPage/Header"
import Footer from "../LandingPage/Footer"
import JobForm from "./Job/JobForm"
import { middlewarReq } from "../../store/loginSlice"
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const AddJob = () => {
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
        <JobForm/>
        <Footer/>
    </>
  )
}

export default AddJob