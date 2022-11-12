import { Link } from "react-router-dom"
import logo from '../../../assets/images/logo.png'
import './navbar.css';
const Navbar = () => {
  const handleMobileNav = (event) =>{
    let mobileNav = document.getElementById("mobile-nav");
    (mobileNav.classList.contains("active"))?mobileNav.classList.remove("active"):mobileNav.classList.add("active");
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
              <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
              <li className="nav-items"><Link to="/candidate/auth" className="nav-links">Find Jobs</Link></li>
              <li className="nav-items"><Link to="/employer/auth" className="nav-links">Find candidate</Link></li>
              <li className="nav-items"><Link to="/articles" className="nav-links">Articles</Link></li>
            </ul>
            <div className="login-buttons">
              <Link to="/login" className="nav-links" >Login</Link>
              <Link to="/register" className="nav-links register">Register Now</Link>
            </div>
            <div className="bars" id="bars" onClick={handleMobileNav}>
              <i className="fa-solid fa-bars"></i>  
            </div>
          </nav>
          <ul id="mobile-nav">
              <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
              <li className="nav-items"><Link to="/candidate/auth" className="nav-links">Find Jobs</Link></li>
              <li className="nav-items"><Link to="/employer/auth" className="nav-links">Find candidate</Link></li>
              <li className="nav-items"><Link to="/articles" className="nav-links">Articles</Link></li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar