import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import Layout from '../Components/Layout';
import Rooms from '../Components/Rooms';
import { Link } from 'react-router-dom';
import Testimonial from '../Components/Testimonial';
import About from '../Components/About';


const Home = () => {
    const [count, setCount] = useState(0);
    const [roomCount, setRoomCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const element = document.getElementById('counter-section');
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (window.pageYOffset > offsetTop - window.innerHeight && window.pageYOffset < offsetTop + height) {
                setRoomCount(100)
                setStaffCount(100)
                setClientCount(100)
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [count]);

    return (
        <>
            <Layout>
                <div class="container-xxl bg-white p-0">
                    {/* Spinner Start */}
                    {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"> */}
                    {/* <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"> */}
                    {/* <div class="spinner-border text-primary"  role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
                    {/* Spinner End */}


                    {/* Carousel Start */}
                    <div class="container-fluid p-0 mb-5">
                        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="w-carousal-100" src="/Images/front/sn-front.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" >
                                            <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar. </h6>
                                            <h1 class="display-3 text-white mb-4 animated slideInDown">One of the oldest and finest hotel in munnar.</h1>
                                            <Link class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" to="/rooms">Our Rooms</Link>
                                            <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:04865 230212">Enquiry</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="w-carousal-100" src="/Images/banner/banner2.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" >
                                            <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar.</h6>
                                            <h1 class="display-3 text-white mb-4 animated slideInDown">Munnar: A place where your dreams set sail.</h1>
                                            <Link class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" to="/rooms">Our Rooms</Link>
                                            <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:04865 230212">Enquiry</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="w-carousal-100" src="/Images/banner/banner3.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" >
                                            <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar.</h6>
                                            <h1 class="display-3 text-white mb-4 animated slideInDown">Relaxation at a beautiful peak.</h1>
                                            <Link class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" to="/rooms">Our Rooms</Link>
                                            <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:04865 230212">Enquiry</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="w-carousal-100" src="/Images/banner/banner4.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" >
                                            <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar.</h6>
                                            <h1 class="display-3 text-white mb-4 animated slideInDown">It’s a pleasure and an honor to have you as a guest.</h1>
                                            <Link class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" to="/rooms">Our Rooms</Link>
                                            <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:04865 230212">Enquiry</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    {/* Carousel End */}

                    <About/>
                    
                    <Rooms />

                    {/* Video Start */}
                    <div class="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
                        <div class="row g-0">
                            <div class="col-md-6 bg-dark d-flex align-items-center">
                                <div class="p-5">
                                    <h6 class="section-title text-start text-white text-uppercase mb-3">Welcome to</h6>
                                    <h1 class="text-white mb-4">SN MUNNAR</h1>
                                    <p class="text-white mb-4">One of the oldest and finest hotel in munnar.</p>
                                    <Link class="btn btn-primary py-md-3 px-md-5 me-3" to="/rooms">Our Rooms</Link>
                                    <a class="btn btn-light py-md-3 px-md-5" href="tel:04865 230212">Enquiry</a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="video">
                                    <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Canva Link: https://www.canva.com/design/DAFkYE4KRA0/BB_Ux1fA5Ex-sPYquE-qVA/edit */}
                    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-0">
                                {/* <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div> */}
                                <div class="modal-body">
                                    {/* 16:9 aspect ratio */}
                                    <div class="ratio ratio-16x9">
                                        <iframe loading="lazy"
                                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFkYE4KRA0&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Start */}
                    <div class="container-xxl py-5">
                        <div class="container">
                            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 class="section-title text-center text-primary text-uppercase">Our Services</h6>
                                <h1 class="mb-5">Explore Our <span class="text-primary text-uppercase">Services</span></h1>
                            </div>
                            <div class="row g-4">
                                <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <a class="service-item rounded" href="">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-hotel fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Rooms</h5>
                                        <p class="text-body mb-0">We provide clean and hygienic rooms. The entire mattress is heat treated to eliminate stress and is made up of a high density form and pad.</p>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <a class="service-item rounded" href="">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-utensils fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Food & Restaurant</h5>
                                        <p class="text-body mb-0">We have a Restaurant in the ground floor. Tastefully designed restaurant serves vegetarian and non vegetarian food of lndian, Chinese and continental delicacies. </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service End */}

                    <Testimonial />

                    {/* Back to Top */}
                    {window.pageYOffset !== 0 ?
                        <>
                            <a href="https://wa.me/8075190680" class="btn btn-lg btn-primary btn-lg-square back-to-top whatsapp"><i class="fab fa-whatsapp"></i></a>
                            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fas fa-chevron-up"></i></a>
                        </>
                        : null
                    }
                </div>
            </Layout>
        </>
    )
}

export default Home