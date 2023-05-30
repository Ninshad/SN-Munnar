import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


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

const Testimonial = () => {
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

    const isTestimonial = window.location.pathname === '/testimonial' 

    return (
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
                            <p >{testimonials[currentIndex].quote.trim().split(/\s+/).length < 50 || isTestimonial ? testimonials[currentIndex].quote
                                : `${testimonials[currentIndex].quote.split(' ').slice(0, 100).join(' ')}...`}
                            </p>
                            {testimonials[currentIndex].quote.trim().split(/\s+/).length > 50 && !isTestimonial ? <Link to="/testimonial">Testimonial</Link> : null}
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
    )
}

export default Testimonial