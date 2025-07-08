import React from 'react'
import './About.css'
import theme_pattern from '../../assets/themepattern.png'
import profile_image from '../../assets/about-profile.jpg'

const About = () => {
  return (
    <div id = 'about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" className='image-container1'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm a passionate and dedicated Data engineer with a strong background in Python, Databases and building ETL pipelines.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>
                            Python
                        </p><hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            PySpark
                        </p><hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            MongoDB
                        </p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            PostgresDB
                        </p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            ETL
                        </p><hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            ADF
                        </p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            GCP
                        </p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            Metabase
                        </p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>
                            ReactJS
                        </p><hr style={{width:"50%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3.5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>CERTIFICATIONS</p>
            </div>
        </div>
    </div>
  )
}

export default About