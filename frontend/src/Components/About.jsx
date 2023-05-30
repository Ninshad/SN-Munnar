import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const About = () => {
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

    const isAbout = window.location.pathname === '/about'

    return (
        <div class="container-xxl about-py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h6 class="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 class="mb-4">Welcome to <span class="text-primary text-uppercase">SN MUNNAR</span></h1>
                        <p class="mb-4">Hotel S.N & S.N Annexe is located in the heart of Munnar, within minutes from the business area and the bus station.
                            SN Hotel earlier known as SN Tourist Home is now fully renovated with excellent rooms and fine interiors.
                            The hotel has free Wi-Fi access to all its clients and has guest rooms which include deluxe and regular.
                            All bedrooms have en-suite bathrooms, some rooms have lush green mountain view and others have city view,
                            custom designed wood furnishings, satellite TV, and are equipped with personal safe boxes and direct dialing telephones.
                            All guests have 24 hour access to the business center and laundry services.
                            Our rooms feature comfort & style and are a world apart from other hotel.
                            The entire mattress is heat treated to eliminate stress and is made up of a high density form and pad.
                            So you can be sure of having the most enjoyable holiday trip in Munnar.</p>
                        <div id="counter-section" class="row g-3 pb-4">
                            <div class="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div class="border rounded p-1">
                                    <div class="border rounded text-center p-4">
                                        <i class="fa fa-hotel fa-2x text-primary mb-2"></i>
                                        <h2 class="mb-1" data-toggle="counter-up"><CountUp start={0} end={roomCount} duration={5} /></h2>
                                        <p class="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div class="border rounded p-1">
                                    <div class="border rounded text-center p-4">
                                        <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                        <h2 class="mb-1" data-toggle="counter-up"><CountUp start={0} end={staffCount} duration={5} /></h2>
                                        <p class="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div class="border rounded p-1">
                                    <div class="border rounded text-center p-4">
                                        <i class="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 class="mb-1" data-toggle="counter-up"><CountUp start={0} end={clientCount} duration={5} /></h2>
                                        <p class="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {!isAbout ?
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">Explore More</Link>
                            : null
                        }

                    </div>

                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-end">
                                <img class="img-fluid-about rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/Images/about/about2.jpg" style={{ marginTop: '25%' }} />
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid-about rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/Images/about/about1.jpg" />
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid-about rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/Images/about/about3.jpg" />
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid-about rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/Images/about/about4.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About