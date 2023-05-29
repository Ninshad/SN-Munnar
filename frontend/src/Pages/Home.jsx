import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import Layout from '../Components/Layout';
import Rooms from '../Components/Rooms';



const testimonials = [
    {
      id: 1,
      name: 'Harleen',
      img: '/Images/testimonial/testimonial-harleen.jpg',
      quote: `The room, service, facilities, amenities, cleanliness were excellent. The management and staff r pretty friendly and were proactive. 
      There is a restaurant located just next to the hotel in case you want to have some yummy Dosas in the afternoon/ evening. 
      Our room was in excellent condition, infact one of the best rooms in the complete vacation, good space and great value for money. 
      Breakfast was served at a small restaurant in the ground floor 8am-10am mostly South Indian delicacies, and they kept a dessert everyday.
      They have a big aquarium in the reception area and couple of vintage cars which are maintained in fantastic condition.
      we used to walk around and went to the local shops, chocolate factory, church etc
      there is a nice park very close to the hotel where we were fortunate to experience local dance shows every evening as part of initiative by Kerala Tourism ...
      Tried Kerala paratha with chicken which was yummy.
      Great stay at SN hotel, Thank You!`
    },
    {
        id: 2,
        name: 'Shefik',
        img: '/Images/testimonial/testimonial-shefik.jpg',
        quote: `If you are looking for a comfortable stay in Munnar, SN hotel can be a perfect option. 
        Situated near to Ksrtc bus station and town centre, hotel provides decent services in a budget rate. 
        Rooms are neat and clean and staffs were really cordial. 
        Restaurant offers good food in moderate rate. You can move to any spot from here easily. 
        There are lots of restaurants, shops in walkable distance. Perfect place for couples and family as privacy and security is guaranteed..`
      },
    {
      id: 3,
      name: 'Balaji',
      img: '/Images/testimonial/testimonial-balaji.jpg',
      quote: `Clean and compact rooms. They provide free breakfast with minimum items. SN restaurant available near the hotel.
      Near to private bus stand. Around 1.3 KM for Munnar town. Super market and other restaurants available near by hotel.`
    },
    {
      id: 4,
      name: 'Agerell',
      img: '/Images/testimonial/testimonial-agerell.jpg',
      quote: `We had a room with a view over the mountain, it was so serene and beautiful !
      After taking the night bus to Munnar from Kochi, we arrived tired. 
      After booking the room we took a nap with the window open and woke up with tiny birds sitting in our room singing for us. 
      Outside was more birds, cows and the most beautiful nature.
      The staff helped us get a guide for the tour to the top view of Munnar and the other sightseeing of the area. 
      The guide was very helpful and friendly, he told us about the history and fun anecdotes, he helped us find local food and when the tour was finished he recommended a local theater to see a temple performance.
      The hotel feels very vintage, with vintage cars and a 1960-1970 feel to it, but its also very fresh ! I loved the interior !
      Only downside is the fact that you can only shower with warm water for an hour in the morning. Otherwise this place was perfect, I would absolutely recommend it !`
    },
  ];


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


    //Testimonial
    const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = () => {
    const index = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const prevTestimonial = () => {
    const index = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    const index = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

//   setInterval(nextTestimonial, 3000);



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
                        <img class="w-carousal-100" src="/Images/banner/banner1.jpeg" alt="Image"/>
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {/* <div class="p-3" style="max-width: 700px;"     >   style={{maxWidth:'700px'}} */}
                            <div class="p-3" >
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar. </h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">It’s a pleasure and an honor to have you as a guest.</h1>
                                <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:+1234567890">Enquiry</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-carousal-100" src="/Images/banner/banner2.jpeg" alt="Image"/>
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {/* <div class="p-3"  style="max-width: 700px;"             > */}
                            <div class="p-3" >
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Munnar: A place where your dreams set sail.</h1>
                                <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:+1234567890">Enquiry</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-carousal-100" src="/Images/banner/banner3.jpeg" alt="Image"/>
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {/* <div class="p-3"  style="max-width: 700px;"             > */}
                            <div class="p-3" >
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Relaxation at a beautiful peak.</h1>
                                <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                {/* <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a> */}
                                <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:+1234567890">Enquiry</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-carousal-100" src="/Images/banner/banner4.jpeg" alt="Image"/>
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {/* <div class="p-3"  style="max-width: 700px;"             > */}
                            <div class="p-3" >
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                <a class="btn btn-light py-md-3 px-md-5 animated slideInRight" href="tel:+1234567890">Enquiry</a>
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

        {/* About Start */}
        <div class="container-xxl py-5">
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
                        <a class="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
                    </div>
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-end">
                                {/* <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" style="margin-top: 25%;"/> */}
                                <img class="img-fluid-about rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/Images/about/about2.jpeg" style={{marginTop: '25%'}}/>
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid-about rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/Images/about/about1.jpeg"/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid-about rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/Images/about/about3.jpeg"/>
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid-about rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/Images/about/about4.jpeg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}


        {/* Room Start */}
        <Rooms/>
        {/* Room End */}


        {/* Video Start */}
        <div class="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div class="row g-0">
                <div class="col-md-6 bg-dark d-flex align-items-center">
                    <div class="p-5">
                        <h6 class="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
                        <h1 class="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
                        <p class="text-white mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <a href="" class="btn btn-primary py-md-3 px-md-5 me-3">Our Rooms</a>
                        <a href="" class="btn btn-light py-md-3 px-md-5">Book A Room</a>
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

        <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {/* 16:9 aspect ratio */}
                        <div class="ratio ratio-16x9">
                            <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Video Start */}


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


              {/* Testimonial Start */}


              <div class="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
                  <div className="carousel-background">
                      <div className="testimonial-carousel">
                      <div className="owl-nav">
                        <div className="owl-prev">
                            <button className='testimonial-button' onClick={prevTestimonial}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                          
                        </div>
                        <div className="owl-next">
                        <button className='testimonial-button' onClick={nextTestimonial}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </div>
                      </div>


                          <div class="testimonial-carousel py-5">
                              <div class="testimonial-item position-relative bg-white rounded overflow-hidden">
                                  <p >{testimonials[currentIndex].quote}</p>
                                  <div class="d-flex align-items-center">
                                      <img class="img-fluid flex-shrink-0 rounded" src={testimonials[currentIndex].img} style={{ width: '45px', height: '45px' }} />
                                      <div class="ps-3">
                                          <h6 class="fw-bold mb-1">{testimonials[currentIndex].name}</h6>
                                      </div>
                                  </div>
                                  <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

        {/* Testimonial End */}

        {/* Back to Top */}
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </Layout>
    </>
  )
}

export default Home