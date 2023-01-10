import { Link, useNavigate } from "react-router-dom"
import logo from '../../../assets/images/logo.png'
import Switch from '@mui/material/Switch';
import './navbar.css';
import { useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../../../store/loginSlice';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const data = useSelector(state=>state.login.loggedIn);
  const body = document.querySelector("body");
  const [checked,setchecked] = useState(false);
  
  const handleMobileNav = (event) =>{
    let mobileNav = document.getElementById("mobile-nav");
    (mobileNav.classList.contains("active"))?mobileNav.classList.remove("active"):mobileNav.classList.add("active");
  }

  useLayoutEffect(()=>{
    let themeMode = localStorage.getItem("theme"); 
    if(themeMode === "dark"){
      body.classList.add("dark");
      setchecked(true);
    }else{
      localStorage.setItem("theme","light");
    }
  },[])
  
  const handleChange = () =>{
    if(checked){
      setchecked(false);
      localStorage.setItem("theme","light");
      body.classList.remove("dark");
    }else{
      setchecked(true);
      localStorage.setItem("theme","dark");
      body.classList.add("dark");

    }
  }

  const handleLogout = (event) => {
    event.preventDefault();
    let userToken = localStorage.getItem("userToken");
    if(userToken !== null){
      localStorage.setItem("userToken",null);
      dispatch(logout({auth:false,who:""}));
      navigate("/auth");
    }
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="header-logo">
              <Link to = "/">
                <img src={logo} alt="error" />
              </Link>
            </div>
            <ul className="desktop-nav">
            {
                (data.auth === false)?
                <>
                  <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                  <li className="nav-items"><Link to="/candidate/auth" className="nav-links">Find Jobs</Link></li>
                  <li className="nav-items"><Link to="/employer/auth" className="nav-links">Find candidate</Link></li>
                  {/* <li className="nav-items"><Link to="/articles" className="nav-links">Articles</Link></li> */}
                </>
                :(data.who === "employer")?
                <>
                  <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                  <li className="nav-items"><Link to="/employer/jobs" className="nav-links">All Jobs</Link></li>
                  <li className="nav-items"><Link to="/employer/addjob" className="nav-links">Add Job</Link></li>
                  <li className="nav-items"><Link to="/employer/applicants" className="nav-links">Who Applied</Link></li>
                  <li className="nav-items"><Link to="/employer/profile" className="nav-links">Profile</Link></li>
                  {/* <li className="nav-items"><Link to="/articles" className="nav-links">Articles</Link></li> */}
                </>
                :
                <>
                  <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                  <li className="nav-items"><Link to="/candidate/jobs" className="nav-links">Find Jobs</Link></li>
                  <li className="nav-items"><Link to="/candidate/profile" className="nav-links">Profile</Link></li>
                  {/* <li className="nav-items"><Link to="/articles" className="nav-links">Articles</Link></li> */}
                </>
            }
            </ul>
            <div className="login-buttons">
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
              {
                (data.auth === false)?
                <>
                  <Link to="/auth" className="nav-links" >Login</Link>
                  <Link to="/register" className="nav-links register">Register Now</Link> 
                </>
                :
                <> 
                  <button onClick={handleLogout} className="nav-links logout" >Logout</button>
                </>
              }
            </div>
            <div className="bars" id="bars" onClick={handleMobileNav}>
              <i className="fa-solid fa-bars"></i>  
            </div>
          </nav>
          <ul id="mobile-nav">
          {
                (data.auth === false)?
                <>
              <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
              <li className="nav-items"><Link to="/candidate/auth" className="nav-links">Find Jobs</Link></li>
              <li className="nav-items"><Link to="/employer/auth" className="nav-links">Find candidate</Link></li>
              {
                (data.auth === false)?
                <>
                  <Link to="/auth" className="nav-links" >Login</Link>
                  <Link to="/register" className="nav-links register">Register Now</Link> 
                </>
                :
                <> 
                  <button onClick={handleLogout} className="nav-links logout" >Logout</button>
                </>
              }
              </>
              :(data.who === "employer")?
              <>
                <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                <li className="nav-items"><Link to="/employer/jobs" className="nav-links">All Jobs</Link></li>
                <li className="nav-items"><Link to="/employer/addjob" className="nav-links">Add Job</Link></li>
                <li className="nav-items"><Link to="/employer/applicants" className="nav-links">Who Applied</Link></li>
                <li className="nav-items"><Link to="/employer/profile" className="nav-links">Profile</Link></li>
                {
                (data.auth === false)?
                <>
                  <Link to="/auth" className="nav-links" >Login</Link>
                  <Link to="/register" className="nav-links register">Register Now</Link> 
                </>
                :
                <> 
                  <button onClick={handleLogout} className="nav-links logout" >Logout</button>
                </>
              }
              </>
              :
              <>
                <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                <li className="nav-items"><Link to="/candidate/jobs" className="nav-links">Find Jobs</Link></li>
                <li className="nav-items"><Link to="/candidate/profile" className="nav-links">Profile</Link></li>
                {
                (data.auth === false)?
                <>
                  <Link to="/auth" className="nav-links" >Login</Link>
                  <Link to="/register" className="nav-links register">Register Now</Link> 
                </>
                :
                <> 
                  <button onClick={handleLogout} className="nav-links logout" >Logout</button>
                </>
              }
              </>
          }
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar