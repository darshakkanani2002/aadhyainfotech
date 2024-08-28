import React, { useState } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Project() {
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
    return (
        <div >
            <div ref={ref} className='expert-section'>
                <div className="home2-counter-area">
                    <div className="container-lg container-fluid">
                        <div className="row justify-content-lg-center justify-content-center">
                            <div className="col-lg-10 col-md-12 col-12">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="single-counter py-lg-0 py-md-3 py-3 mb-0">
                                            <div className="content">
                                                <div className="number d-flex justify-content-center">
                                                    {/* <h2 className="counter">34</h2> */}
                                                    <h2 className="counter">{countStarted ? <CountUp end={34} duration={3} delay={0.5} /> : 0}</h2>
                                                </div>
                                                <p>Professional Experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-counter py-lg-0 py-md-3 py-3 mb-0">
                                            <div className="content">
                                                <div className="number d-flex justify-content-center">
                                                    {/* <h2 className="counter">145</h2> */}
                                                    <h2 className="counter">{countStarted ? <CountUp end={145} duration={3} delay={0.5} /> : 0}</h2>
                                                </div>
                                                <p>Completed Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-counter py-lg-0 py-md-3 py-3 mb-0">
                                            <div className="content">
                                                <div className="number d-flex justify-content-center">
                                                    {/* <h2 className="counter">5</h2> */}
                                                    <h2 className="counter">{countStarted ? <CountUp end={5} duration={3} delay={0.5} /> : 0}</h2>
                                                </div>
                                                <p>Year of Experienece</p>
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
