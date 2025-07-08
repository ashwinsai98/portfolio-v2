import React from 'react';
import './Certifications.css';
import themepattern from '../../assets/themepattern.png';
import underline from '../../assets/underline.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const certificationsData = [
    {
        c_no: "01",
        c_name: "Introduction to Microsoft Azure Cloud Services",
        c_issuer: "Microsoft",
        c_date: "Mar 2025",
        c_link: "https://www.coursera.org/account/accomplishments/certificate/A9DH0MEUGUAN"
    },
    {
        c_no: "02",
        c_name: "Business Analysis & Process Management",
        c_issuer: "Coursera Project Network",
        c_date: "Feb 2025",
        c_link: "https://www.coursera.org/account/accomplishments/certificate/J8JS9UFBZ8B1"
    },
    {
        c_no: "03",
        c_name: "Applied Python Data Engineering",
        c_issuer: "Duke University",
        c_date: "Jan 2024",
        c_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/D4HRMQXMCJJB"
    },
    {
        c_no: "04",
        c_name: "SQL for Data Science",
        c_issuer: "UC Davis",
        c_date: "Jul 2020",
        c_link: "https://www.coursera.org/account/accomplishments/certificate/ACFPPMS7AXRA"
    }
];

const Certifications = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div id='certifications' className='certifications'>
        <div className="certifications-title">
            <h1>My Certifications</h1>
            <img src={underline} alt="" />
        </div>
        <div className="certifications-container">
            <Slider {...settings}>
                {certificationsData.map((certification, index) => {
                    return (
                        <div key={index} className="certification-item">
                            <h3>{certification.c_no}</h3>
                            <h2>{certification.c_name}</h2>
                            <p>{certification.c_issuer}</p>
                            <p>{certification.c_date}</p>
                            <a href={certification.c_link} target="_blank" rel="noopener noreferrer">View Credential</a>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default Certifications;
