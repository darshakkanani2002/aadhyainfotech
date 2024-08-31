import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Our_solution() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);



    // callback function example
    // const clalcuate = (a, b, opearation) => {
    //     return opearation(a, b);
    // }

    // const add = clalcuate(8, 3, function (num1, num2) {
    //     return num1 + num2;
    // })

    // console.log(add);

    // for circle Progressbaar

    const containerRef = useRef(null);
    const svgRef = useRef(null);
    const progressBarRef = useRef(null);
    const pctRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const svg = svgRef.current;
        const progressBar = progressBarRef.current;
        const pct = pctRef.current;
        const totalLength = progressBar.getTotalLength();

        setTopValue(svg);

        progressBar.style.strokeDasharray = totalLength;
        progressBar.style.strokeDashoffset = totalLength;

        const handleScroll = () => {
            setProgress(container, pct, progressBar, totalLength);
        };

        const handleResize = () => {
            setTopValue(svg);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
        };
    }, []);

    const setTopValue = (svg) => {
        svg.style.top =
            document.documentElement.clientHeight * 0.5 -
            svg.getBoundingClientRect().height * 0.5 +
            'px';
    };

    const setProgress = (container, pct, progressBar, totalLength) => {
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;

        const percentage = scrollTop / (scrollHeight - clientHeight);
        if (percentage === 1) {
            container.classList.add('completed');
        } else {
            container.classList.remove('completed');
        }
        pct.innerHTML = Math.round(percentage * 100) + '%';
        progressBar.style.strokeDashoffset =
            totalLength - totalLength * percentage;
    };

    return (
        <div>
            <div className='position-relative mt-5 our-solution-sec-back' id='myElement'>
                <div className='container-lg container-fluid'>
                    <div className='mb-5'>
                        <div className="section-title three text-animation row">
                            <div className='about-our-company col-lg-4' data-aos="flip-up">
                                <h2 className='text-lg-start text-md-center text-center'>Our Solution<span>Proccess
                                </span> </h2>
                            </div>
                            <div className='about-our-company col-lg-8'>
                                <div className="dash-and-paragraph three row" data-aos="flip-up">
                                    <div className='col-lg-6'>
                                        <svg className='about-icon-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                                            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
                                        </svg>
                                    </div>
                                    <div className="btn-and-paragraph col-lg-6 d-flex justify-content-lg-start justify-content-center">
                                        <p>
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
                    <div className='row'>
                        <div className='col-lg-6 d-lg-block d-md-block d-sm-none d-none'>
                            <div className='position-sticky top-0'>
                                {/* <div className='d-flex justify-content-center'>
                                    <div className='our-solution-circle-1'>
                                        <div className='our-solution-circle-2 d-flex justify-content-center align-items-center'>
                                            <div>
                                                <div className='our-solution-circle-text'>
                                                    <h5>Step</h5>
                                                    <h3>0/4</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="circle-container position-relative" ref={containerRef}>
                                    <p class="pct position-absolute d-none" ref={pctRef}>0%</p>
                                    <div className='p-5 '>
                                        <svg class="complete our-solution-circle" ref={svgRef} width="400" height="400" viewport="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="grad">
                                                    <stop offset="0%" stopColor="#fbc2eb"></stop>
                                                    <stop offset="100%" stopColor="#a6c1ee"></stop>
                                                </linearGradient>
                                            </defs>
                                            <circle cx="50%" cy="50%" r="150"></circle>
                                            <circle class="progress-bar" ref={progressBarRef} cx="50%"
                                                cy="50%"
                                                r="150"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='our-solution-border ps-4 pb-4'>
                                <div className='our-solution-position'>
                                    <div className='our-solution-back'>
                                        <div className="our-solution-icon mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><g><path d="M67.6527 16.0958C68.7855 14.6144 67.827 11.5646 65.5614 12.436C60.246 14.5273 54.7564 19.1456 51.1838 23.6767C47.4368 28.4693 46.7397 34.5689 48.4825 40.3199C51.0095 48.6851 58.4161 54.1748 65.5614 58.6188C68.8726 60.7101 71.8353 55.4818 68.6112 53.3905C63.383 50.1665 57.5448 46.071 54.9307 40.3199C52.9265 35.7888 52.9265 30.6477 56.2377 26.6394C59.5489 22.7182 64.4286 20.1041 67.6527 16.0958ZM1.42836 53.3905C-1.88286 55.3947 1.16694 60.6229 4.47816 58.6188C11.6234 54.1748 18.943 48.6851 21.5571 40.3199C23.2998 34.7432 22.6899 28.6435 19.1172 24.0253C15.6317 19.407 9.96781 14.6144 4.5653 12.5231C2.29973 11.6518 1.25408 14.7016 2.474 16.1829C5.61095 20.1041 10.3164 22.7182 13.6276 26.4651C17.1131 30.4734 17.2873 35.7017 15.196 40.4942C12.4948 46.071 6.56946 50.1665 1.42836 53.3905ZM53.3622 1.36957C50.1381 6.59781 46.0426 12.436 40.2916 15.0501C35.7604 17.0543 30.6193 17.0543 26.611 13.7431C22.6027 10.4319 19.9886 5.55216 15.9803 2.32808C14.5861 1.1953 11.5363 2.24094 12.4077 4.50651C14.499 9.82189 19.1172 15.3115 23.6484 18.8842C28.4409 22.6311 34.5405 23.3282 40.2916 21.5854C48.6568 19.0584 54.1464 11.6518 58.5904 4.50651C60.5946 1.1953 55.4535 -1.85451 53.3622 1.36957ZM58.5904 65.5898C54.1464 58.4445 48.6568 51.125 40.2916 48.5108C34.7148 46.7681 28.6152 47.3781 23.9969 50.9507C19.3786 54.4362 14.5861 60.1001 12.4948 65.5026C11.6234 67.7682 14.6732 68.8138 16.1546 67.5939C20.0757 64.457 22.6899 59.7516 26.4368 56.4403C30.4451 52.9548 35.6733 52.7806 40.4659 54.8719C46.2169 57.486 50.2252 63.3242 53.5365 68.5524C55.4535 71.8636 60.5946 68.901 58.5904 65.5898Z"></path></g></svg>
                                        </div>
                                        <div>
                                            <div className="content">
                                                <h3 className='mb-3 text-white'>Discovery and Consultation.</h3>
                                                <p className='mb-4'>Understand the client's goals, challenges, and requirements through initial meetings and consultations.</p>
                                                <ul className='list-unstyled our-innovative-list'>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Client Meeting. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Needs Assessment </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Strategic Planning. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='our-solution-position'>
                                    <div className='our-solution-back'>
                                        <div className="our-solution-icon mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z"></path><path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z"></path><path d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z" fill="#F5BEBE"></path><path d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z" fill="#F5BEBE"></path></svg>
                                        </div>
                                        <div>
                                            <div className="content">
                                                <h3 className='mb-3 text-white'>Design and Architecture.</h3>
                                                <p className='mb-4'>If applicable, create a user-centric design for software interfaces, websites, or applications.</p>
                                                <ul className='list-unstyled our-innovative-list'>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Wireframing </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Design Mockups. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Strategic Planning. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Implementation. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='our-solution-position'>
                                    <div className='our-solution-back'>
                                        <div className="our-solution-icon mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M60.9 25.69H44.31V9.1C44.31 7.91 45.22 7 46.41 7H60.9C62.09 7 63 7.91 63 9.1V23.59C63 24.71 62.09 25.69 60.9 25.69ZM44.31 44.31H25.69V27.79C25.69 26.6 26.6 25.69 27.79 25.69H44.38V44.31H44.31ZM23.59 63H9.1C7.91 63 7 62.09 7 60.9V46.41C7 45.22 7.91 44.31 9.1 44.31H25.69V60.9C25.69 62.09 24.71 63 23.59 63ZM9.1 7H22.54C23.73 7 24.29 8.4 23.45 9.24L9.24 23.45C8.4 24.29 7 23.66 7 22.54V9.1C7 7.91 7.91 7 9.1 7Z"></path><path d="M60.9001 63.0001H46.4101C45.2201 63.0001 44.3101 62.0901 44.3101 60.9001V44.3101H60.9001C62.0901 44.3101 63.0001 45.2201 63.0001 46.4101V60.9001C63.0001 62.0901 62.0901 63.0001 60.9001 63.0001Z"></path></svg>
                                        </div>
                                        <div>
                                            <div className="content">
                                                <h3 className='mb-3 text-white'>Development</h3>
                                                <p className='mb-4'>Understand the client's goals, challenges, and requirements through initial meetings and consultations.</p>
                                                <ul className='list-unstyled our-innovative-list'>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Testing Plans. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Bug Fixing. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Agile Development. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Agile Development. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='our-solution-position-2'>
                                    <div className='our-solution-back'>
                                        <div className="our-solution-icon mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="52" viewBox="0 0 70 52" fill="#000000"><path d="M8.87109 17.9175H15.6444V51.0733H8.87109V17.9175ZM20.5935 17.9175H27.3668V51.0733H20.5935V17.9175ZM31.8339 17.9175H38.6072V51.0733H31.8339V17.9175Z"></path><path d="M60.0751 26.3969C60.0751 34.3723 53.7819 40.9057 45.8989 41.2947V45.5129C56.1078 45.1203 64.2926 36.6968 64.2926 26.3967C64.2926 15.8472 55.7071 7.26465 45.1542 7.26465H16.0967V11.4804H45.1544C53.3817 11.4804 60.0752 18.1718 60.0752 26.3968L60.0751 26.3969Z" fill="#F5BEBE"></path><path d="M45.1548 1.55981H16.0971V5.77558H45.1548C56.5291 5.77558 65.7826 15.0263 65.7826 26.3969C65.7826 37.5183 56.9301 46.6101 45.8995 47.0034V51.2229C59.2561 50.8279 70 39.843 70 26.3969C70 12.7017 58.8545 1.55981 45.1548 1.55981ZM11.0506 5.52314C11.0506 2.4777 8.572 0 5.52537 0C2.47874 0 0 2.4777 0 5.52314C0 8.56858 2.47874 11.0463 5.52537 11.0463C8.572 11.0463 11.0506 8.56858 11.0506 5.52314Z" fill="#F5BEBE"></path></svg>
                                        </div>
                                        <div>
                                            <div className="content">
                                                <h3 className='mb-3 text-white'>Documentation & Launch.</h3>
                                                <p className='mb-4'>Understand the client's goals, challenges, and requirements through initial meetings and consultations.</p>
                                                <ul className='list-unstyled our-innovative-list'>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Testing Plans. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Bug Fixing. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Agile Development. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Agile Development. </li>
                                                    <li>
                                                        <i className="bi bi-plus"></i>
                                                        Strategic Planning. </li>
                                                </ul>
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
    )
}
