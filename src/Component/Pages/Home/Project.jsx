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
                <div class="home2-counter-area">
                    <div class="container-lg container-fluid">
                        <div class="row justify-content-lg-center justify-content-center">
                            <div class="col-lg-10 col-md-12 col-12">
                                <div class="row g-4">
                                    <div class="col-lg-4">
                                        <div class="single-counter py-lg-0 py-md-3 py-3 mb-0">
                                            <div class="content">
                                                <div class="number d-flex justify-content-center">
                                                    {/* <h2 class="counter">34</h2> */}
                                                    <h2 class="counter">{countStarted ? <CountUp end={34} duration={3} delay={0.5} /> : 0}</h2>
                                                </div>
                                                <p>Professional Experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="single-counter py-lg-0 py-md-3 py-3 mb-0">
                                            <div class="content">
                                                <div class="number d-flex justify-content-center">
                                                    {/* <h2 class="counter">145</h2> */}
                                                    <h2 class="counter">{countStarted ? <CountUp end={145} duration={3} delay={0.5} /> : 0}</h2>
                                                </div>
                                                <p>Completed Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="single-counter py-lg-0 py-md-3 py-3 mb-0">
                                            <div class="content">
                                                <div class="number d-flex justify-content-center">
                                                    {/* <h2 class="counter">5</h2> */}
                                                    <h2 class="counter">{countStarted ? <CountUp end={5} duration={3} delay={0.5} /> : 0}</h2>
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
