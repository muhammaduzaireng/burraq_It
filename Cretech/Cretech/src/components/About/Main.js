import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import BG1 from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BG2 from '../../assets/images/shapes/testi-bg-1-1.png'
import Breadcumb from '../Breadcumb/Main'
import { Parallax } from 'react-parallax'

const About = () => {
    const logoOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        dots: false,
        margin: 30,
        items: 2,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 30,
                items: 2
            },
            375: {
                margin: 30,
                items: 2
            },
            575: {
                margin: 30,
                items: 3
            },
            767: {
                margin: 50,
                items: 4
            },
            991: {
                margin: 40,
                items: 5
            },
            1199: {
                margin: 80,
                items: 5
            }
        }
    }
    return (
        <>
            <Breadcumb Title="About Us" Breadcumb="ABOUT" />
            <section className="about-four section-padding--top">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-four__image">
                                <img src="assets/images/resources/about-four-1-1.jpg" className="wow fadeInUp"
                                    data-wow-duration="1500ms" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-four__content">
                                <div className="section-title ">
                                    <p className="section-title__text">About Company</p>
                                    <h2 className="section-title__title">The World’s Networking
                                        Company</h2>
                                </div>
                                <div className="about-four__text">Since from 2000 Building Your Better IT Solution The
                                    definition of business is an occupation or trade & the purchase and sale of products Our
                                    Mission & Vision Voice and Data System are crucial to the success.</div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding--bottom section-padding--top">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="section-title__text">Our Team members</p>
                        <h2 className="section-title__title">Our Expert Person to Provide <br /> IT Solution Services</h2>

                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-1.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Michelle Monaghan</Link></h3>
                                    <p className="team-card-one__designation">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-2.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Jessica Brown</Link></h3>
                                    <p className="team-card-one__designation">Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-3.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Kevin Martin</Link></h3>
                                    <p className="team-card-one__designation">Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-4.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Sarah Albert</Link></h3>
                                    <p className="team-card-one__designation">Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="black-bg cta-two">
                <Parallax bgImage={BG1} bgImageAlt="" className="cta-two__bg section-padding-lg--top section-padding-lg--bottom" strength={300}>
                    <div className="container">
                        <div className="cta-two__inner">
                            <h3 className="cta-two__title">Better IT Solutions And Services
                                At Your <span>Fingertips</span></h3>
                            <Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
                        </div>
                    </div>
                </Parallax>
            </section>
           
            <div className="client-carousel client-carousel--two">
                <div className="container">
                    <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default About