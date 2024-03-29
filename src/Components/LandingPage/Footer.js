import footerLogo from '../../assets/images/footer-logo.png'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
        <footer>
          <div className="container">
            <div className="footer-nav">
              <ul>
                <li>
                  <Link to="/">
                    <img src={footerLogo} alt="error" />
                  </Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Jobs</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Terms</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
              <div className="copyright">
                <p>@staffingSolutions All right reserved.</p>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer