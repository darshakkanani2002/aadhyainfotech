import React from 'react'
import Home from './Pages/Home/Home'
import About_Us from './Pages/Home/About_Us'

export default function Navbar() {
    return (
        <div>
            <div className='hero-bg-banner'>
                <nav className="navbar navigation_bar navbar-expand-lg">
                    <div className="container-fluid px-lg-5 px-3">
                        <div className="col-lg-2">
                            <a className="navbar-brand py-0" href="index.html">
                                <img src="images/logo.svg" className="logo"
                                    alt="logo" />
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav"
                            aria-controls="navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                            <div className="offcanvas-header justify-content-end">
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav m-auto mb-2 mt-0 mb-lg-0">
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link" aria-current="page" href="index.html" data-section="home">Home</a>
                                    </li>
                                    {/* <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link text-nowrap text-white" href="#" data-section="about">ABOUT</a>
                                </li> */}
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link text-nowrap" href="services.html" data-section="services">Services
                                        </a>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link text-nowrap" href="projects.html" data-section="project">Pages</a>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link" href="blog.html" data-section="blog">Portfolio</a>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link text-nowrap" href="./contact.html" data-section="contact">Contact Us</a>
                                    </li>
                                </ul>
                                <div className="p-1 nav-contact-button mt-3 mt-lg-0" role="search">
                                    <div><a href="#"><button className="nav-bar-contact-btn text-nowrap">Schedule a Call </button></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Home></Home>
            </div>
            <About_Us></About_Us>
        </div>
    )
}
