import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import OwlCarousel from 'react-owl-carousel'

const WhatWeDo = () => {
	const options = {
        loop: false,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        items: 1,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            576: {
                margin: 30,
                items: 2
            },
            768: {
                margin: 30,
                items: 3
            },
            992: {
                margin: 30,
                items: 4
            },
            1200: {
                margin: 30,
                items: 5
            }
        },
    };
  return (
    <>
    <Breadcumb Title="What We Do" Breadcumb="What We Do" />
    <section
                className=" section-padding--top service-four gray-bg section-padding-xl--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
                >
                <div className="container">
                    <div className="section-title text-center">
                        <p className="section-title__text">Popular Services</p>
                        <h2 className="section-title__title">We Provide Our Client Best <br />IT Solution Services</h2>

                    </div>
                    <OwlCarousel
                        className="thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
                        {...options}
                    >
                        <div className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__icon">
                                    <i className="icon-new-product"></i>
                                </div>
                                <div className="service-card-three__content">
                                    <h3 className="service-card-three__title"><Link to="/infrastructure-plan">IT & NETWROKING</Link></h3>
                                    <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__icon">
                                    <i className="icon-new-product"></i>
                                </div>
                                <div className="service-card-three__content">
                                    <h3 className="service-card-three__title"><Link to="/infrastructure-plan">SECURITY & SURVEILLANCE</Link></h3>
                                    <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__icon">
                                    <i className="icon-protection"></i>
                                </div>
                                <div className="service-card-three__content">
                                    <h3 className="service-card-three__title"><Link
                                        to="/infrastructure-plan">AUDIO & VIDEO</Link></h3>
                                    <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__icon">
                                    <i className="icon-web-development"></i>
                                </div>
                                <div className="service-card-three__content">
                                    <h3 className="service-card-three__title"><Link to="/infrastructure-plan">CYBER & DATA SECURITY</Link></h3>
                                    <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__icon">
                                    <i className="icon-analysis"></i>
                                </div>
                                <div className="service-card-three__content">
                                    <h3 className="service-card-three__title"><Link to="/infrastructure-plan">DATA CENTER</Link></h3>
                                    <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
    </>
  )
}

export default WhatWeDo