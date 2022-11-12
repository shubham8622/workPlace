import authImage from '../../assets/images/auth-image.png'
import './Auth.css';
const Login = () => {
  return (
    <>
        <section className='login-section'>
          <div className="auth">
            <div className="login-form">
              <div className="auth-content">
                  <h1>Welcome employer /candidate </h1>
                  <p>Sign IN </p>
              </div>
              <div className="google-signIN">
                  <button>Login With Google</button>
              </div>
            </div>
            <img src={authImage} alt="" />
          </div>
        </section>
    </>
  )
}

export default Login