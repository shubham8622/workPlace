import { useLayoutEffect, useState } from 'react';
import authImage from '../../assets/images/auth-image.png'
import './Auth.css';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
  const navigate = useNavigate();
  
  const initialState = {
    email:"",
    password:""
  }
  const [form, setForm] = useState(initialState);
  const handleState = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setForm({...form,[name]:value});
  }

  const handleLoginForm = async (event) =>{
    event.preventDefault();
    const {email,password} = form;
    if(!(email,password)){
      alert("Fill all the fields.")
    }else{
      const res = await fetch("https://workplace-backend-production-7a56.up.railway.app/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      });

      const data = await res.json();
      if(data.success !== false){
        let {who} = data.loginRes;
        localStorage.setItem("userToken",JSON.stringify(data.loginRes));
        (who === "candidate")?navigate("/candidate/profile"):navigate("/employer/profile")
      }else{
        alert(data.res);
      }
    }
  }

  return (
    <>
        <section className='login-section'>
          <div className="auth">
            <div className="login-form">
              <div className="auth-content">
                  <h1>Welcome employer /candidate </h1>
                  <p>Sign IN </p>
              </div>
              <div className="loginForm">
                <form action="" onSubmit={handleLoginForm}>
                  <div className="login-inputs">
                    <div className="email-input login-input-field">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" name="email" id="userEmail" placeholder='Enter email' onChange={handleState} value={form.email}/>
                    </div>
                    <div className="password-input login-input-field">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" name="password" id="userPassowrd" placeholder='Enter password' onChange={handleState} value={form.password}/> 
                    </div>
                    <div className="login-submit">
                      <input type="submit" value="Login" />  
                    </div>  
                  </div>
                </form>
              </div>
              {/* <div className="google-signIN">
                  <button>Login With Google</button>
              </div> */}
            </div>
            <img src={authImage} alt="" />
          </div>
        </section>
    </>
  )
}

export default Login