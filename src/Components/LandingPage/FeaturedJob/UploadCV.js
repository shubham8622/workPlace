import banner from '../../../assets/images/banner.png'
import { Link } from 'react-router-dom'
const UploadCV = () => {
  return (
    <>
      <div className="banner">
        <div className="image-cv">
          <div className="image">
              <img src={banner} alt="error" />
          </div>
          <div className="cv">
              <h2>
                Get Matched The Most 
                Valuable Jobs, Just Drop
                Your CV at Staffing Solutions
              </h2>
              <p>In the subject line of email, write your name, the description of the position you want to apply</p>
              <Link to="/">Upload CV</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadCV