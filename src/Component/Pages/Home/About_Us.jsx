import React, { useEffect, useRef, useState } from 'react'
import Testimonial from './Testimonial'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Project from './Project';
// import Our_solution from './Our_solution';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About_Us() {
    const [countStarted, setCountStarted] = useState
        (false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.3, // Trigger when 30% of the component is in view
        onChange: (inView) => {
            if (inView) {
                setCountStarted(true);
            }
        }
    });

    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    // for images magnetic
    const bannerImgRef = useRef(null);
    const handleMouseMove = (e) => {
        const bannerImg = bannerImgRef.current;
        const { left, top, width, height } = bannerImg.getBoundingClientRect();
        const xPos = (e.clientX - left) / width;
        const yPos = (e.clientY - top) / height;

        const moveX = (xPos - 0.5) * 30; // Adjust the multiplier for more or less movement
        const moveY = (yPos - 0.5) * 30;

        bannerImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
    };

    const handleMouseLeave = () => {
        const bannerImg = bannerImgRef.current;
        bannerImg.style.transform = 'translate(0px, 0px) scale(1)';
    };

    return (
        <div >
            {/* About Our Comppany section */}
            <div ref={ref} className='about-us-back'>
                <div className='container-xl container-fluids about-our-company-sec'>
                    <div className='mb-5'>
                        <div className="section-title three text-animation row">
                            <div className='about-our-company col-lg-4' data-aos="flip-up" >
                                <h2 className='text-lg-start text-md-center text-center'>ABOUT OUR<span>COMPANY</span> </h2>
                            </div>
                            <div className='about-our-company col-lg-8'>
                                <div className="dash-and-paragraph three row">
                                    <div className='col-lg-6' data-aos="flip-up">
                                        <svg className='about-icon-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                                            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
                                        </svg>
                                    </div>
                                    <div className="btn-and-paragraph col-lg-6 d-flex justify-content-lg-start justify-content-center">
                                        <p data-aos="flip-up">
                                            <div className='about-our-company'>Digital agencies can vary in size and </div>
                                            <div className='about-our-company'>specialization. Some may focus on specific </div>
                                            <div className='about-our-company'>niches, such as healthcare or </div>
                                            <div className='about-our-company'>e-commerce,while others may offer a </div>
                                            <div className='about-our-company'>comprehensive.</div></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-lg-4 gy-5">
                        <div className="col-lg-5">
                            <div className="counter-and-btn">
                                <ul className="counter-wrap">
                                    <li className="single-counter">
                                        <div className="icon about-counter-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z"></path><path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z"></path><path d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z" fill="#F5BEBE"></path><path d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z" fill="#F5BEBE"></path></svg> </div>
                                        <div className="content">
                                            <div className="number">
                                                {/* <h3 className='about-counter-number' end={145} duration={4} delay={0.5} >145</h3> */}
                                                {countStarted ? <CountUp className='about-counter-number' end={145} duration={3} delay={0.5} /> : 0}
                                                <span>+</span>
                                            </div>
                                            <p>Delivered Software Projects.</p>
                                        </div>
                                    </li>
                                    <li className="single-counter">
                                        <div className="icon about-counter-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M64.3529 46.3883L60.521 44.9041C59.9731 46.3175 59.3088 47.683 58.5349 48.9865L62.0681 51.0853C62.9586 49.5856 63.7228 48.0146 64.3529 46.3883ZM51.1152 62.079L49.0036 58.553C47.7033 59.3319 46.3405 60.0012 44.9292 60.5541L46.4277 64.3812C48.0511 63.7445 49.619 62.9746 51.1152 62.079ZM59.0406 55.3386L55.9009 52.6869C54.9218 53.8456 53.8493 54.9221 52.6944 55.9057L55.3568 59.0359C56.6839 57.9064 57.916 56.6698 59.0406 55.3386ZM64.3235 23.5375C63.6889 21.9136 62.9208 20.3451 62.0271 18.8481L58.4991 20.9553C59.276 22.2566 59.9435 23.6202 60.4949 25.0319L64.3235 23.5375ZM55.2969 10.9151L52.6415 14.0521C53.7992 15.0323 54.8743 16.106 55.8561 17.2623L58.9899 14.6034C57.8619 13.275 56.6267 12.0415 55.2969 10.9151ZM46.3545 5.59211L44.8656 9.42297C46.2783 9.97264 47.6428 10.6386 48.9453 11.4139L51.0485 7.8827C49.5499 6.9906 47.9798 6.22444 46.3545 5.59211ZM23.5895 5.55957C21.9504 6.19188 20.367 6.96019 18.856 7.85645L20.9533 11.3909C22.2666 10.6117 23.6429 9.94378 25.0677 9.39412L23.5895 5.55957ZM17.226 14.0452L14.5723 10.9071C13.2319 12.0413 11.9878 13.2845 10.8526 14.6242L13.988 17.2806C14.9761 16.1145 16.0591 15.0323 17.226 14.0452ZM5.49707 23.638L9.33066 25.119C9.88163 23.6946 10.5506 22.3187 11.3306 21.0056L7.79777 18.9062C6.9004 20.4166 6.13082 21.9994 5.49707 23.638ZM14.644 59.155L17.2885 56.0093C16.1183 55.0251 15.0317 53.9457 14.0398 52.782L10.9115 55.4477C12.0512 56.7844 13.2996 58.0243 14.644 59.155ZM25.1482 60.6385C23.7209 60.0931 22.3417 59.4291 21.0253 58.6533L18.9393 62.1944C20.4538 63.0865 22.0404 63.8503 23.6823 64.4778L25.1482 60.6385ZM11.3706 49.0629C10.5865 47.7515 9.91332 46.3768 9.35828 44.9532L5.52906 46.4454C6.16754 48.0828 6.94179 49.664 7.84371 51.1724L11.3706 49.0629Z"></path><rect x="29" width="12" height="11" fill="#8FBEF5"></rect><rect x="58" y="29" width="12" height="11" fill="#8FBEF5"></rect><rect y="29" width="12" height="11" fill="#8FBEF5"></rect><rect x="29" y="59" width="12" height="11" fill="#8FBEF5"></rect></svg> </div>
                                        <div className="content">
                                            <div className="number">
                                                {/* <h3 className='about-counter-number' end={100} duration={4} delay={0.5} >100 </h3> */}
                                                {countStarted ? <CountUp className='about-counter-number' end={100} duration={3} delay={0.5} /> : 0}
                                                <span>%</span>
                                            </div>
                                            <p>Service Satisfaction Guarentee.</p>
                                        </div>
                                    </li>
                                    <li className="single-counter">
                                        <div className="icon about-counter-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M27.1432 57.7834L21.1707 57.8162C24.3661 59.2642 26.5889 61.1645 27.7981 63.4905C28.5755 64.9858 28.729 66.3076 28.7304 67.1132L37.1813 67.1174C37.0198 64.6878 35.9943 62.4288 34.2525 60.6956C32.3503 58.803 29.8283 57.7641 27.1432 57.7834ZM2.92324 32.8344L2.91162 41.3931C3.71348 41.3931 5.02775 41.5449 6.51484 42.3203C8.83264 43.5288 10.7274 45.7559 12.1728 48.9612L12.2222 42.8783C12.244 40.1935 11.215 37.6659 9.32455 35.7608C7.59752 34.0204 5.34549 32.9958 2.92324 32.8344Z" fill="#F5BEBE"></path><path d="M12.1414 52.8312C10.7623 48.2083 8.62963 45.0097 5.96977 43.5788C4.6816 42.8859 3.54984 42.7621 2.90986 42.7613L2.87842 66.1298L12.1084 56.8931L12.1414 52.8312ZM17.286 57.8376L13.0745 57.8607L3.84119 67.1008L27.3623 67.1126C27.3597 66.467 27.2334 65.3291 26.5395 64.035C25.1051 61.3596 21.9061 59.218 17.286 57.8376ZM27.1063 37.8548C25.7273 33.2322 23.5945 30.0335 20.9347 28.6027C19.6464 27.9097 18.5149 27.7861 17.8748 27.7853L17.8434 51.1541L27.0734 41.9173L27.1063 37.8548Z"></path><path d="M27.1874 27.9024C27.2092 25.2177 26.1802 22.69 24.2897 20.785C22.5627 19.0446 20.3107 18.0199 17.8886 17.8584L17.877 26.4171C18.6788 26.4171 19.9932 26.569 21.48 27.3442C23.7977 28.5527 25.6926 30.7797 27.138 33.9849L27.1874 27.9024ZM32.0237 42.8629L28.0397 42.8848L18.8064 52.1249L42.3035 52.1365C42.2796 51.4875 42.1165 50.3554 41.3933 49.0681C39.8878 46.3889 36.6487 44.2446 32.0237 42.8629Z"></path><path d="M42.1085 42.8075L35.9161 42.8415C39.1209 44.2869 41.3765 46.1821 42.6415 48.5006C43.4631 50.0062 43.65 51.3361 43.6723 52.1373L52.1465 52.1415C51.985 49.712 50.9595 47.4528 49.2176 45.7196C47.3153 43.827 44.7878 42.7893 42.1085 42.8075ZM35.8999 13.6268C34.6115 12.9337 33.48 12.8101 32.84 12.8094L32.8086 36.1781L42.0386 26.9414L42.0716 22.8792C40.6923 18.2565 38.5598 15.0575 35.8999 13.6268Z" fill="#F5BEBE"></path><path d="M42.1522 12.9264C42.1741 10.2416 41.145 7.71396 39.2546 5.80893C37.5276 4.0685 35.2755 3.04379 32.8534 2.88232L32.8418 11.4412C33.6437 11.4412 34.9579 11.5929 36.445 12.3683C38.7627 13.5767 40.6576 15.8038 42.1028 19.0091L42.1522 12.9264ZM47.1243 27.886L43.0046 27.9086L33.7713 37.1487L57.2825 37.1604C57.2712 36.513 57.1296 35.378 56.4248 34.0876C54.9619 31.4098 51.7464 29.2669 47.1243 27.886Z" fill="#F5BEBE"></path><path d="M57.1298 27.8314L51.0124 27.8649C54.2117 29.312 56.4476 31.2106 57.6793 33.5342C58.4735 35.0326 58.6408 36.3573 58.6509 37.1613L67.1115 37.1656C66.95 34.7359 65.9245 32.4769 64.1826 30.7437C62.2938 28.8644 59.791 27.8315 57.1298 27.8315V27.8314ZM47.189 19.8186C47.189 21.4491 48.5143 22.7756 50.1435 22.7756C51.7726 22.7756 53.0979 21.4491 53.0979 19.8186C53.0979 18.188 51.7726 16.8613 50.1435 16.8613C48.5143 16.8613 47.189 18.1879 47.189 19.8186Z"></path><path d="M59.3815 14.9502C60.4745 14.9502 61.3606 14.0641 61.3606 12.9711C61.3606 11.878 60.4745 10.9919 59.3815 10.9919C58.2884 10.9919 57.4023 11.878 57.4023 12.9711C57.4023 14.0641 58.2884 14.9502 59.3815 14.9502Z"></path></svg> </div>
                                        <div className="content">
                                            <div className="number">
                                                {/* <h3 className='about-counter-number' end={145} duration={4} delay={0.5} >145 </h3> */}
                                                {countStarted ? <CountUp className='about-counter-number' end={145} duration={3} delay={0.5} /> : 0}
                                                <span>%</span>
                                            </div>
                                            <p>Highly Accredited Security.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className='about-btn-hover'>
                                    <a className=' text-decoration-none text-dark' href="https://axleo-wp.egenslab.com/about-me/" target="_blank" rel="nofollow">
                                        <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                            </path>
                                        </svg>
                                        </span>
                                        <span className="content">About Axleo</span>
                                        <span className="icon two about-us-btn-icon1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                            </path>
                                        </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-sm-5"
                                    ref={bannerImgRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="about-left">
                                        <div className="about-img magnetic-item">
                                            <img decoding="async" src="images/about-02.webp" alt="image" className='img-fluid' />
                                        </div>
                                        <p className="text-animation2">Some may focus on specific niches, such as healthcare or e-commerce, while others may offer a comprehensive.</p>
                                    </div>
                                </div>
                                <div className="col-sm-7 d-sm-flex  d-none">
                                    <div className="about-right-img animet-images magnetic-item overflow-hidden">
                                        <img decoding="async" src="images/about-01.webp" alt="image" className='about-us-img img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* To Provide Smart Solution */}
            <div className='to-provide-smart-sec py-5'>
                <div className="container-xl container-fluids">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title four text-animation vector-and-review">
                                <div className='to-smart-solution' data-aos="flip-up">
                                    <h2>TO PROVIDE SMART <span className='text-start'>SOLUTION</span></h2>
                                </div>
                                <div className='to-smart-solution'>
                                    <div className="dash-and-paragraph three" data-aos="flip-up">
                                        <div className="btn-and-paragraph">
                                            <a className='text-decoration-none' href="#">Explore more <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                </path>
                                            </svg>
                                            </a>
                                            <p className='vector-and-review'>
                                                <div className='to-smart-solution'>Offer a wide range of services to help businesses </div>
                                                <div className='to-smart-solution'>establish and enhance their online presence.</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* our solution part section */}
                <div className="elementor-widget-container my-5">
                    <div className="home2-services-section">
                        <div className="container-lg container-fluid">
                            <div className="services-wrapper">
                                <div className="service-card">
                                    <h3> 1. UI/UX Design</h3>
                                    <p>Conducting research to understand the target audience, behaviors.</p>
                                    <ul>
                                        <li>
                                            <a href="#">Color</a>
                                        </li>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Typography</a>
                                        </li>
                                        <li>
                                            <a href="#">Wireframe</a>
                                        </li>
                                        <li>
                                            <a href="#">Visual</a>
                                        </li>
                                    </ul>
                                    <a className="primary-btn2 btn-hover" href="#" target="_top" rel="nofollow">Explore More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                    </svg><span style={{ top: "49.7px", left: "58.4px;" }}></span>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <h3> 2. App Development</h3>
                                    <p>The process of creating software applications for mobile devices, such as smartphones.</p>
                                    <ul>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Typography</a>
                                        </li>
                                        <li>
                                            <a href="#">Wireframe</a>
                                        </li>
                                        <li>
                                            <a href="#">Color</a>
                                        </li>
                                        <li>
                                            <a href="#">Visual</a>
                                        </li>
                                    </ul>
                                    <a className="primary-btn2 btn-hover" href="#" target="_blank" rel="nofollow">Explore More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                    </svg><span style={{ top: "-314.3px", left: "28.45px" }}></span>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <h3> 3. Block-Chain</h3>
                                    <p>Conducting research to understand the target audience, behaviors.</p>
                                    <ul>
                                        <li>
                                            <a href="#">Visual</a>
                                        </li>
                                        <li>
                                            <a href="#">Color</a>
                                        </li>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Typography</a>
                                        </li>
                                        <li>
                                            <a href="#">Wireframe</a>
                                        </li>
                                    </ul>
                                    <a className="primary-btn2 btn-hover" href="#" target="_blank" rel="nofollow">Explore More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                    </svg><span></span>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <h3> 4. Web Development</h3>
                                    <p>Web development is the process of building and maintaining websites or web applications.</p>
                                    <ul>
                                        <li>
                                            <a href="#">Typography</a>
                                        </li>
                                        <li>
                                            <a href="#">Visual</a>
                                        </li>
                                        <li>
                                            <a href="#">Color</a>
                                        </li>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Wireframe</a>
                                        </li>
                                    </ul>
                                    <a className="primary-btn2 btn-hover" href="#" target="_blank" rel="nofollow">Explore More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                    </svg><span></span>
                                    </a>
                                </div>
                                <div className="service-card border-bottom-0 ">
                                    <h3> 5. Cloud Service</h3>
                                    <p>Conducting research to understand the target audience, behaviors.</p>
                                    <ul>
                                        <li>
                                            <a href="#">Wireframe</a>
                                        </li>
                                        <li>
                                            <a href="#">Typography</a>
                                        </li>
                                        <li>
                                            <a href="#">Visual</a>
                                        </li>
                                        <li>
                                            <a href="#">Color</a>
                                        </li>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                    </ul>
                                    <a className="primary-btn2 btn-hover" href="#" target="_blank" rel="nofollow">Explore More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                    </svg><span style={{ top: "53.1px", left: "5.45001px" }}></span>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <h3> 6. Cyber Security</h3>
                                    <p>Conducting research to understand the target audience, behaviors.</p>
                                    <ul>
                                        <li>
                                            <a href="#">Visual</a>
                                        </li>
                                        <li>
                                            <a href="#">Color</a>
                                        </li>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Wireframe</a>
                                        </li>
                                        <li>
                                            <a href="#">Typography</a>
                                        </li>
                                    </ul>
                                    <a className="primary-btn2 btn-hover" href="#" target="_blank" rel="nofollow">Explore More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                    </svg>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exper and projects */}
            <Project></Project>

            {/* inovative idea section */}
            <div>
                <div className='innovativ-banner'>
                    <div className='container-lg container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12' data-aos="flip-up">
                                <div className='innovative-text-sec'>
                                    <div className='innovative-style'>
                                        <h6 className='d-flex align-items-center mb-4'>
                                            <div></div>
                                            <span className='ps-3 text-white h5 mb-0'>
                                                Innovative Idea
                                            </span>
                                        </h6>

                                        <h2 className='text-white innovative-big-text mb-0'>
                                            “ Drawing on the technical expertise of IT professionals to assess and address complex technical.”
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container-lg container-fluids'>
                        <div className='row'>
                            <div className='col-lg-12' data-aos="fade-down">
                                <div className='text-lg-end text-md-center text-center innovative-clitch-img d-lg-block d-md-block d-none'>
                                    <img src="/images/clitch-big-img.png" alt="clitch-big-img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Solution Process Section  */}
            {/* <Our_solution></Our_solution> */}

            {/* Work Section */}
            <div>
                <div>
                    <div className="home2-portfolio-section">
                        <div className="container-lg container-fluid">
                            <div className="row mb-60">
                                <div className="col-lg-12">
                                    <div className="section-title text-animation vector-and-review">
                                        <div className='work-section-style'>
                                            <h2>Work <span className='d-lg-flex d-md-flex d-sm-none d-none'>22</span></h2>
                                        </div>
                                        <div className='work-section-style'>
                                            <div className="work-dash-and-paragraph three">
                                                <div className="dash d-lg-block d-md-block d-sm-none d-none">
                                                </div>
                                                <div className="btn-and-paragraph">
                                                    <a href="#" target="_blank" rel="nofollow">Explore More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                        </path>
                                                    </svg>
                                                    </a>
                                                    <p className='vector-and-review'>
                                                        <div className='work-section-style'>Offer a wide range of services to help businesses </div>
                                                        <div className='work-section-style'>establish and enhance their online presence.</div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-lg-5 g-4 justify-content-between py-5">
                                <div className="col-lg-6 col-md-6">
                                    <div className="magnetic-wrap">
                                        <div className="portfolio-card magnetic-item"
                                            ref={bannerImgRef}
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="image-and-tag">
                                                <ul className="tag">
                                                    <li><a href="#">color</a></li>
                                                    <li><a href="#">Development</a></li>
                                                    <li><a href="#">Web Design</a></li>
                                                </ul>
                                                <div className="portfolio-img position-relative">
                                                    <img fetchpriority="high" decoding="async" width="1920" height="1000" src="images/interactive-05.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid" alt="" />
                                                    <a className="details-btn" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                            </path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="portfolio-content">
                                                <h4>
                                                    <a href="#">Sculpting theFuture</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="magnetic-wrap">
                                        <div className="portfolio-card magnetic-item">
                                            <div className="image-and-tag">
                                                <ul className="tag">
                                                    <li><a href="#">Campaign</a></li>
                                                    <li><a href="#">testing</a></li>
                                                    <li><a href="#">Web Design</a></li>
                                                </ul>
                                                <div className="portfolio-img position-relative">
                                                    <img decoding="async" width="1920" height="1000" src="images/interactive-04.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid" />
                                                    <a className="details-btn" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                            </path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="portfolio-content">
                                                <h4>
                                                    <a href="#">Where Vision Meets Technology.</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="magnetic-wrap">
                                        <div className="portfolio-card magnetic-item">
                                            <div className="image-and-tag">
                                                <ul className="tag">
                                                    <li><a href="#">Development</a></li>
                                                    <li><a href="#">Software</a></li>
                                                    <li><a href="#">Web Design</a></li>
                                                </ul>
                                                <div className="portfolio-img position-relative">
                                                    <img decoding="async" width="1920" height="1000" src="images/interactive-03.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid" alt="" />
                                                    <a className="details-btn" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                            </path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="portfolio-content">
                                                <h4>
                                                    <a href="#">We Compose Digital Masterpieces.</a>
                                                </h4>
                                            </div>
                                        </div></div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="magnetic-wrap">
                                        <div className="portfolio-card magnetic-item">
                                            <div className="image-and-tag">
                                                <ul className="tag">
                                                    <li><a href="#">color</a></li>
                                                    <li><a href="#">Segmentation</a></li>
                                                    <li><a href="#">testing</a></li>
                                                </ul>
                                                <div className="portfolio-img position-relative">
                                                    <img loading="lazy" decoding="async" width="1920" height="1000" src="images/interactive-02.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid" alt="" />
                                                    <a className="details-btn" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                            </path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="portfolio-content">
                                                <h4>
                                                    <a href="#">Corporate Brand Revitalization.</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <Testimonial></Testimonial>

            {/* Partner Section */}
            <div>
                <div>
                    <div className="partner-area">
                        <div className="container-lg container-fluid pb-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="partner-wrap">
                                        <div className="title1">
                                            <h6>Our Trusted Partner</h6>
                                        </div>
                                        <div className="marquee dark overflow-hidden py-5">
                                            <div className="marquee__group">
                                                <a href="#"><img decoding="async" src="images/partner-light-01.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-02.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-03.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-04.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-05.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-06.png" alt="Logo" /></a>
                                            </div>
                                            <div aria-hidden="true" className="marquee__group">
                                                <a href="#"> <img decoding="async" src="images/partner-light-01.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-02.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-03.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-04.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-05.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-06.png" alt="Logo" /></a>
                                            </div>
                                        </div>
                                        <div className="title2">
                                            <h6>Almost 20+ Partner we have</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* We Used Technology Section */}
            <div>
                <div>
                    <div className="home2-technology-section">
                        <div className="container-lg container-fluid">
                            <div className="row mb-60">
                                <div className="section-title four white text-animation vector-and-review">
                                    <div className='techno-stlye-1'>
                                        <h2>We Used Advance <span>TECHNOLOGY</span></h2>
                                    </div>
                                    <div className='techno-style-2'>
                                        <div className="dash-and-paragraph three">
                                            <div className="btn-and-paragraph">
                                                <p className='vector-and-review'>
                                                    <div className='techno-style-3'>Offer a wide range of services to help businesses </div>
                                                    <div className='techno-style-3'>establish and enhance their online presence.
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="technology-tab-wrap">
                                        <ul className="nav nav-tabs" id="technologyTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="Front-End-tab" data-bs-toggle="tab" data-bs-target="#tech-Front-End" type="button" role="tab" aria-controls="tech-Front-End" aria-selected="false" tabIndex="-1">
                                                    Front-End</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="Back-End-tab" data-bs-toggle="tab" data-bs-target="#tech-Back-End" type="button" role="tab" aria-controls="tech-Back-End" aria-selected="false" tabIndex="-1">
                                                    Back-End</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="Mobile-tab" data-bs-toggle="tab" data-bs-target="#tech-Mobile" type="button" role="tab" aria-controls="tech-Mobile" aria-selected="true">
                                                    Mobile</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="technologyTabContent">
                                            <div className="tab-pane fade" id="tech-Front-End" role="tabpanel" aria-labelledby="Front-End-tab">
                                                <div className="row g-4 align-items-end">
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper big technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/html.svg" alt="Logo" />
                                                            </div>
                                                            <span>HTML</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/css.svg" alt="Logo" />
                                                            </div>
                                                            <span>CSS</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/javascript.svg" alt="Logo" />
                                                            </div>
                                                            <span>Javascript</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/vue.svg" alt="Logo" />
                                                            </div>
                                                            <span>Vue JS</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/react.svg" alt="Logo" />
                                                            </div>
                                                            <span>React JS</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper big technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/angular.svg" alt="Logo" />
                                                            </div>
                                                            <span>Angular JS</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/d3.svg" alt="Logo" />
                                                            </div>
                                                            <span>D3 JS</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/jquery.svg" alt="Logo" />
                                                            </div>
                                                            <span>JQuery</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/typescript.svg" alt="Logo" />
                                                            </div>
                                                            <span>TypeScript</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/graphql.svg" alt="Logo" />
                                                            </div>
                                                            <span>GraphQL</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">
                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tech-Back-End" role="tabpanel" aria-labelledby="Back-End-tab">
                                                <div className="row g-4 align-items-end">
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper big technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/node-js.svg" alt="Logo" />
                                                            </div>
                                                            <span>Node JS</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/ruby.svg" alt="Logo" />
                                                            </div>
                                                            <span>Ruby</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/django.svg" alt="Logo" />
                                                            </div>
                                                            <span>D Jnago</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/express-js.svg" alt="Logo" />
                                                            </div>
                                                            <span>Express JS</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/asp.svg" alt="Logo" />
                                                            </div>
                                                            <span>ASP .Net</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper big technology-sec-style" >
                                                            <div className="icon">
                                                                <img decoding="async" src="images/laravel.svg" alt="Logo" />
                                                            </div>
                                                            <span>Laravel</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/firebase.svg" alt="Logo" />
                                                            </div>
                                                            <span>Firebase</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade active show" id="tech-Mobile" role="tabpanel" aria-labelledby="Mobile-tab">
                                                <div className="row g-4 align-items-end">
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper big technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/flutter.svg" alt="Logo" />
                                                            </div>
                                                            <span>Flutter</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/android.svg" alt="Logo" />
                                                            </div>
                                                            <span>Android</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/ios.svg" alt="Logo" />
                                                            </div>
                                                            <span>Iso App</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/firebase.svg" alt="Logo" />
                                                            </div>
                                                            <span>Firebase</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/react.svg" alt="Logo" />
                                                            </div>
                                                            <span>React Native</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper big technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/swift.svg" alt="Logo" />
                                                            </div>
                                                            <span>Swift</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/java.svg" alt="Logo" />
                                                            </div>
                                                            <span>Java</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                <img decoding="async" src="images/kotlin.svg" alt="Logo" />
                                                            </div>
                                                            <span>Kotlin</span>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div></div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover d-lg-block d-md-none d-none">

                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                            <div className="icon">
                                                                {/* <img decoding="async" src="images/empty-technology.png" alt="Logo" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Blog Section */}
            <div>
                <div className="home2-blog-sec">
                    <div className="container-lg container-fluid">
                        <div className="row mb-60">
                            <div className="section-title four white text-animation vector-and-review">
                                <div className='techno-stlye-1'>
                                    <h2>Our Latest  <span className='text-start'>ARTICLE</span></h2>
                                </div>
                                <div className='techno-style-2'>
                                    <div className="dash-and-paragraph three">
                                        <div className="btn-and-paragraph">
                                            <p className='vector-and-review'>
                                                <div className='techno-style-3'>Services to help businesses establish and enhance  </div>
                                                <div className='techno-style-3'>theironline presence.</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="home2-blog-section">
                        <div className="container-lg container-fluid">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="magnetic-wrap"><div className="blog-card2 magnetic-item">
                                        <a href="3" className="blog-img">
                                            <img loading="lazy" decoding="async" width="600" height="400" src="images/blog-st-img12-600x400.webp" className="attachment-blog-grid-thumb size-blog-grid-thumb wp-post-image img-fluid w-100" alt="" /> </a>
                                        <div className="blog-content">
                                            <ul className="tags">
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z">
                                                            </path>
                                                            <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z">
                                                            </path>
                                                        </svg> Innovative </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <g>
                                                                <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z">
                                                                </path>
                                                                <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z">
                                                                </path>
                                                            </g>
                                                        </svg> 20 May, 2024 </a>
                                                </li>
                                            </ul>
                                            <h4><a href="#">Comprehensive SEO Services for Increased Visibility</a></h4>
                                            <a className="explore-btn" href="#">
                                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div></div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="magnetic-wrap"><div className="blog-card2 magnetic-item">
                                        <a href="#" className="blog-img">
                                            <img loading="lazy" decoding="async" width="600" height="400" src="images/blog-st-img11-600x400.webp" className="attachment-blog-grid-thumb size-blog-grid-thumb wp-post-image img-fluid w-100" alt="" /> </a>
                                        <div className="blog-content">
                                            <ul className="tags">
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z">
                                                            </path>
                                                            <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z">
                                                            </path>
                                                        </svg> Creative Design </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <g>
                                                                <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z">
                                                                </path>
                                                                <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z">
                                                                </path>
                                                            </g>
                                                        </svg> 20 May, 2024 </a>
                                                </li>
                                            </ul>
                                            <h4><a href="#">Professional Web Design for Modern Businesses</a></h4>
                                            <a className="explore-btn" href="#">
                                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div></div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="magnetic-wrap"><div className="blog-card2 magnetic-item">
                                        <a href="#" className="blog-img">
                                            <img loading="lazy" decoding="async" width="600" height="400" src="images/blog-st-img10-600x400.webp" className="attachment-blog-grid-thumb size-blog-grid-thumb wp-post-image img-fluid w-100" alt="" /> </a>
                                        <div className="blog-content">
                                            <ul className="tags">
                                                <li>
                                                    <a href="https://axleo-wp.egenslab.com/category/creative-design/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z">
                                                            </path>
                                                            <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z">
                                                            </path>
                                                        </svg> Creative Design </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <g>
                                                                <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z">
                                                                </path>
                                                                <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z">
                                                                </path>
                                                            </g>
                                                        </svg> 20 May, 2024 </a>
                                                </li>
                                            </ul>
                                            <h4><a href="#">Creative Branding Solutions to Elevate Your Brand</a></h4>
                                            <a className="explore-btn" href="#">
                                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lets Talk Section */}
            <div>
                <div className='lets-contact-section'>
                    <div className="contact-section">
                        <div className="container-lg container-fluid">
                            <div className="row g-lg-4 gy-5">
                                <div className="col-lg-8">
                                    <div className="section-title text-animation vector-and-review">
                                        <div className='lest-talk-sec-style-1'>
                                            <h2>Let’s <span>TALK</span></h2>
                                        </div>
                                        <div className='lest-talk-sec-style-2'>
                                            <div className="dash-and-paragraph">
                                                <div className="dash"></div>
                                                <div className="content-and-social">
                                                    <p className='vector-and-review'>
                                                        <div className='lest-talk-sec-style-3'>Crafting a contact text for a digital agency
                                                        </div>
                                                        <div className='lest-talk-sec-style-3'>involvesproviding esential information for potential
                                                        </div>
                                                        <div className='lest-talk-sec-style-3'>clients or collaborators to reach out.</div>
                                                    </p>
                                                    <div className="social-area">
                                                        <h6>Connect Us</h6>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="6" viewBox="0 0 50 6">
                                                            <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z"></path>
                                                        </svg>
                                                        <ul>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-facebook-f" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-x-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
                                    <div className="btn_wrapper lets-talk-btn-style d-block m-lg-0 m-md-auto m-auto">
                                        <a className="circle-btn btn-hover" href="#" target="_blank" rel="nofollow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                </path>
                                            </svg> Contact <strong>Now</strong> <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
