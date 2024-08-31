import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const bannerImgRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    const handleMouseMove = (e) => {
        const bannerImg = bannerImgRef.current;
        const { left, top, width, height } = bannerImg.getBoundingClientRect();
        const xPos = (e.clientX - left) / width;
        const yPos = (e.clientY - top) / height;

        const moveX = (xPos - 0.5) * 30; // Adjust the multiplier for more or less movement
        const moveY = (yPos - 0.5) * 30;

        bannerImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        const bannerImg = bannerImgRef.current;
        bannerImg.style.transform = 'translate(0px, 0px) scale(1)';
    };
    return (
        <div>
            {/* hero section */}
            <div className='hero-section'>
                <div className='container-xl container-fluid'>
                    <div className='row'>
                        <div className='col-xxl-8 col-xl-7 col-lg-7 d-lg-flex d-block align-items-center'>
                            <div className='banner-content-wrap'>
                                <h1 className="text-animation2">We Compose <span>Software</span> Masterpieces</h1>
                                <div className='banner-content'>
                                    <div className='vector-and-review  text-animation'>
                                        <div>
                                            <div className='hero-vector'>
                                                <i className="fa-solid fa-arrow-right-long d-lg-block d-none"></i>
                                            </div>
                                        </div>
                                        <div className='hero-rating'>
                                            <a href="#" className="rating-area text-decoration-none ">
                                                <div className="review">
                                                    <span>Review On</span>
                                                    <span className='clutch-review-text'>Clutch</span>
                                                </div>
                                                <div className="rating">
                                                    <ul className="star">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(50 Review)</span>
                                                </div>
                                            </a></div>
                                    </div>
                                    <div className="content-and-btn text-animation" style={{ perspective: "400px" }}>
                                        <div className='hero-banner-review-text'>
                                            <p style={{ perspective: "400px" }} data-aos="fade-up">
                                                <div className='hero-banner-review-text'>Axleo is a business that provides services related to online </div>
                                                <div className='hero-banner-review-text'><span>marketing,web development, design,</span>  and other digital </div>
                                                <div className='hero-banner-review-text' s>solutions clients.</div>
                                            </p>
                                        </div>
                                        <div className='hero-banner-review-text' s>
                                            <div className="banner-btn">
                                                <a className='hero-button-hover text-decoration-none' href="http://+990737621432" target="_blank" rel="nofollow">
                                                    <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                    </svg></span>
                                                    <span className="content">Schedule a Call</span>
                                                    <span className="icon two"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                    </svg></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-5 col-lg-5 d-lg-flex d-none'>
                            <div className='magnetic-wrap'>
                                <div
                                    className='banner-img magnetic-item'
                                    ref={bannerImgRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src="images/banner-img.webp" alt="banner-img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* animation section */}
            <div className="elementor-widget-container">
                <div className="text-slider-section">
                    <div className="marquee">
                        <div className="marquee__group">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> Welcome to Aadhya Infotech
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> EMAIL MARKETING
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> DIGITAL STUDIO
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> UI/UX DESIGN
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> EMAIL MARKETING
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> DIGITAL STUDIO
                            </span>
                        </div>
                        <div className="marquee__group">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> Welcome to Aadhya Infotech
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> EMAIL MARKETING </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> DIGITAL STUDIO
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> UI/UX DESIGN
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> EMAIL MARKETING
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z"></path>
                                </svg> DIGITAL STUDIO
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
