import './OnePlatform.css'
import marketing from '../../../assets/images/marketing.png'
import design from '../../../assets/images/design.png'
import human from '../../../assets/images/human.png'
import finance from '../../../assets/images/finance.png'
import goverment from '../../../assets/images/goverment.png'
import bussiness from '../../../assets/images/business.png'
import customer from '../../../assets/images/customer.png'
import project from '../../../assets/images/project.png'
const OnePlatform = () => {
  return (
    <>
        <section className='one-platform'>
            <div className="container">
                <div className="heading-center">
                    <h1>One Platform Many <span>Solutions</span></h1>
                </div>
                <div className="main-jobs">
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={marketing} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Marketing & Communication</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={design} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Design & Development</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={human} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Human Research & Development</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={finance} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Finance Management</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={goverment} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Government Jobs</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={bussiness} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Business & Consulting</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={customer} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Customer Support Care</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-listing">
                        <div className="job-icon">
                            <img src={project} alt="" />
                        </div>
                        <div className="job-title-content">
                            <h3>Project Management</h3>
                            <p>237 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OnePlatform