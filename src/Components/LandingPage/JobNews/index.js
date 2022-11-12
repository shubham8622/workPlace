import './JobNews.css';

const JobNews = () => {
  return (
    <>
        <div className="job-news">
            <div className="content-form">
                <div className="job-news-content">
                    <p>Never Want to Miss Any <span>Job News?</span></p>
                </div>
                <div className="form">
                    <form action="">
                        <div className="email">
                            <input type="email" name="email" id="user-email" placeholder='Enter your email...' />
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default JobNews