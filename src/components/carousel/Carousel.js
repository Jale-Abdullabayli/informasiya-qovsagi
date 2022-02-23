import React from 'react'
import './Carousel.scss';
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from "react-router-dom";


function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="container">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carouselContent">
                            <div className="carouselCaption">
                                <h5>Mentor nə üçündür?</h5>
                                <p>Təsəvvür edin ki, vacib bir imtahana hazırlaşırsız və bu imtahanı bilən adam axtarırsız.
                                    Təsəvvür edin ki, iş axtarırsız və bu istiqamətdə sizə kömək edə bilən şəxs lazımdır...
                                </p>
                                <Link to="/mentors">Ətraflı</Link>
                            </div>
                            <div className="sliderImg">
                                <img src={slider1} className="d-block" alt="sliderImg"/>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carouselContent">
                            <div className="carouselCaption">
                                <h5>Sual-cavab forumu</h5>
                                <p>Bilmədiyini soruşsan, bir anlıq ağılsızsan. Soruşmasan, ömürlük.</p>
                                <a href="/ask-question">Ətraflı</a>
                            </div>
                            <div className="sliderImg">
                                <img src={slider2} className="d-block" alt="sliderImg"/>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carouselContent">
                            <div className="carouselCaption">
                                <h5>Biz kimik?</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolore qui pariatur totam
                                    nisi, est rerum atque neque doloremque sapiente aliquam accusantium, accusamus facere
                                    enim quo vel? Possimus, minima facilis!</p>
                                <Link to="">Ətraflı</Link>
                            </div>
                            <div className="sliderImg">
                                <img src={slider3} className="d-block" alt="sliderImg"/>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                <BsChevronLeft/>
                </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                <BsChevronRight /></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel