import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonial() {
    return (
        <div className='testimonial'>
            <>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="mySwiper position-relative py-5"

                >
                    <SwiperSlide>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 d-flex justify-content-md-center'>
                                    <img src="images/testimonial-img-01.webp" alt="testimonial-img-01" className='img-fluid rounded-3' />
                                </div>
                                <div className='col-lg-7'>
                                    <div class="testimonal-content">
                                        <span>Great Agency!</span>
                                        <p>By actively seeking, analyzing, and acting upon feedback, a agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.</p>
                                        <div class="author-area">
                                            <div class="content">
                                                <h6>Mr. Daniel Scoot</h6>
                                                <span className='testimonial-post-text'>CEO at astra.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 d-flex justify-content-md-center'>
                                    <img src="images/testimonial-img-02.webp" alt="testimonial-img-02" className='img-fluid rounded-3' />
                                </div>
                                <div className='col-lg-7'>
                                    <div class="testimonal-content">
                                        <span>Great Agency!</span>
                                        <p>By actively seeking, analyzing, and acting upon feedback, a agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.</p>
                                        <div class="author-area">
                                            <div class="content">
                                                <h6>Mr. Daniel Scoot</h6>
                                                <span className='testimonial-post-text'>CEO at astra.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 d-flex justify-content-md-center'>
                                    <img src="images/testimonial-img-03.webp" alt="testimonial-img-03" className='img-fluid rounded-3' />
                                </div>
                                <div className='col-lg-7'>
                                    <div class="testimonal-content">
                                        <span>Great Agency!</span>
                                        <p>By actively seeking, analyzing, and acting upon feedback, a agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.</p>
                                        <div class="author-area">
                                            <div class="content">
                                                <h6>Mr. Daniel Scoot</h6>
                                                <span className='testimonial-post-text'>CEO at astra.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5'>

                            </div>
                            <div className='col-lg-7'>
                                <div className='swiper-button'>
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </>
        </div>
    )
}
