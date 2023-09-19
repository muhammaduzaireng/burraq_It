import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import BGImg from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BGImg1 from '../../assets/images/background/slider-1-1.jpeg'
import BGImg1_1 from '../../assets/images/background/slider-1-2.jpeg'
import BGImg2 from '../../assets/images/background/slider-1-2.jpg'
import BGImg3 from '../../assets/images/shapes/service-four-bg-1-1.png'
import BGImg4 from '../../assets/images/shapes/funfact-one-bg.png'
import BGImg5 from '../../assets/images/shapes/testi-bg-1-1.png'
import BGImg6 from '../../assets/images/shapes/team-home-bg-1-1.jpg'
import BGImg7 from '../../assets/images/shapes/about-three-s-1.png'
import img1 from '../../assets/images/resources/about-five-1-1.jpg'
import img2 from '../../assets/images/resources/about-five-1-2.jpg'
import AnimatedNumber from "animated-number-react"
import { Parallax } from 'react-parallax'

const Home = () => {

    const [ytShow, setytShow] = useState(false)
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
    const sliderOptions = {
        loop: true,
        items: 1,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        margin: 0,
        dots: true,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false
    }
    const projectOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        dots: false,
        margin: 0,
        items: 1,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            768: {
                margin: 30,
                items: 2
            },
            992: {
                margin: 30,
                items: 3
            }
        }
    }
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
            <div className="slider-one">
                <OwlCarousel className="slider-one__carousel owl-theme thm-owl__carousel" {...sliderOptions}>
                    <div className="item slider-one__slide-1">
                        <div className="slider-one__bg" style={{ backgroundImage: `url(${BGImg1})` }}>
                        </div>
                        <div className="slider-one__line"></div>
                        <div className="slider-one__shape-1"></div>
                        <div className="slider-one__shape-2"></div>
                        <div className="slider-one__shape-3"></div>
                        <div className="container">
                            <div className="slider-one__content ">
                                <div className="slider-one__floated lettering-text">technology</div>
                                <p className="slider-one__text">Welcome to best IT Solutions</p>
                                <div className="slider-one__title-wrapper">
                                    <h2 className="slider-one__title">Provide IT Solutions <br />
                                        and Services</h2>
                                </div>
                                <div className="slider-one__btns">
                                    <Link to="/about" className="thm-btn slider-one__btn"><span>Learn More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item slider-one__slide-1-1">
                        <div className="slider-one__bg" style={{ backgroundImage: `url(${BGImg1_1})` }}>
                        </div>
                        <div className="slider-one__line"></div>
                        <div className="slider-one__shape-1"></div>
                        <div className="slider-one__shape-2"></div>
                        <div className="slider-one__shape-3"></div>
                        <div className="container">
                            <div className="slider-one__content ">
                                <div className="slider-one__floated lettering-text">technology</div>
                                <p className="slider-one__text">Welcome to best IT Solutions</p>
                                <div className="slider-one__title-wrapper">
                                    <h2 className="slider-one__title">Provide IT Solutions <br />
                                        and Services</h2>
                                </div>
                                <div className="slider-one__btns">
                                    <Link to="/about" className="thm-btn slider-one__btn"><span>Learn More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item slider-one__slide-2">
                        <div className="slider-one__bg" style={{ backgroundImage: `url(${BGImg2})` }}>
                        </div>
                        <div className="slider-one__line"></div>
                        <div className="slider-one__shape-1"></div>
                        <div className="slider-one__shape-2"></div>
                        <div className="slider-one__shape-3"></div>
                        <div className="container">
                            <div className="slider-one__content ">
                                <div className="slider-one__floated lettering-text">technology</div>
                                <p className="slider-one__text">Welcome to best IT Solutions</p>
                                <div className="slider-one__title-wrapper">
                                    <h2 className="slider-one__title">Provide IT Solutions <br />
                                        and Services</h2>
                                </div>
                                <div className="slider-one__btns">
                                    <Link to="/about" className="thm-btn slider-one__btn"><span>Learn More</span></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

            <section className="section-padding--bottom section-padding--top about-five">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-five__images">
                                <div className="about-five__images__shape"></div>
                                <img src={img1} className="wow fadeInUp"
                                    data-wow-duration="1500ms" alt="" />
                                <img src={img2} alt="" />
                                <div className="about-five__video">
                                    <Link to="#" onClick={() => setytShow(true)} className="video-popup">
                                        <i className="fa fa-play"></i>
                                    </Link>
                                </div>
                                <div className="about-five__images__caption count-box wow fadeInUp" data-wow-duration="1500ms">
                                    <span className="count-text"><AnimatedNumber value={25} duration={2500} formatValue={(v) => Math.round(v)} /></span>
                                    Years <br />
                                    Experience
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-five__content">
                                <div className="section-title ">
                                    <p className="section-title__text">About Company</p>
                                    <h2 className="section-title__title">SYSTEM INTEGRATION & CONSULTANCY COMPANY</h2>

                                </div>
                                <div className="about-five__text">Burraq Integrated Solutions, since its inception is providing end-to-end 
                                tunrkey solutions & consultancy in the field of technology. Throughout these years, 
                                Burraq Integrated Solutions has forged a coveted place for itself by streamlining 
                                their business processes and providing the best value and quality service to its clients. 
                                At Burraq, we believe that customer satisfaction and client relationships are the key drivers of success</div>
                                <div className="about-five__text">At Burraq, we believe that customer satisfaction and client relationships are 
                                the key drivers of success</div>
                                <ul className="about-five__box">
                                    <li className="about-five__box__item gray-bg">
                                        <i className="about-five__box__icon icon-consulting"></i>
                                        <div className="about-five__box__content">
                                            <h3 className="about-five__box__title"><Link to="/it-consultent">IT
                                                Consultant</Link></h3>
                                            <p className="about-five__box__text">Smarter Solutions</p>
                                        </div>
                                    </li>
                                    <li className="about-five__box__item gray-bg">
                                        <i className="about-five__box__icon icon-chip"></i>
                                        <div className="about-five__box__content">
                                            <h3 className="about-five__box__title"><Link to="/team">IT Specialist</Link></h3>
                                            <p className="about-five__box__text">Faster Solutions</p>
                                        </div>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className=" section-padding--top service-four gray-bg section-padding-xl--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
                style={{ backgroundImage: `url(${BGImg3})` }}>
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

            <section className="funfact-one">
                <div className="container">
                    <div className="funfact-one__inner wow fadeInUp background-size-cover" data-wow-duration="1500ms"
                        style={{ backgroundImage: `url(${BGImg4})` }}>
                        <ul className="funfact-one__list">
                            <li className="funfact-one__list__item">
                                <h3 className="funfact-one__list__title count-box">
                                    <span data-stop="255" data-speed="2500" className="count-text"><AnimatedNumber value={255} duration={2500} formatValue={(v) => Math.round(v)} /></span>
                                </h3>
                                <p className="funfact-one__list__text">Business Interogation</p>
                            </li>
                            <li className="funfact-one__list__item">
                                <h3 className="funfact-one__list__title count-box">
                                    <span data-stop="325" data-speed="2500" className="count-text"><AnimatedNumber value={325} duration={2500} formatValue={(v) => Math.round(v)} /></span>
                                </h3>
                                <p className="funfact-one__list__text">Strategies Planned</p>
                            </li>
                            <li className="funfact-one__list__item">
                                <h3 className="funfact-one__list__title count-box">
                                    <span data-stop="569" data-speed="2500" className="count-text"><AnimatedNumber value={596} duration={2500} formatValue={(v) => Math.round(v)} /></span>
                                </h3>
                                <p className="funfact-one__list__text">Projects Relased</p>
                            </li>
                            <li className="funfact-one__list__item">
                                <h3 className="funfact-one__list__title count-box">
                                    <span data-stop="769" data-speed="2500" className="count-text"><AnimatedNumber value={769} duration={2500} formatValue={(v) => Math.round(v)} /></span>
                                </h3>
                                <p className="funfact-one__list__text">Satisfied Clients </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section-padding--bottom section-padding--top project-one">
                <div className="container">
                    <div className="project-one__top">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="section-title ">
                                    <p className="section-title__text">Latest Project</p>
                                    <h2 className="section-title__title">Check We Have Solution <br />Done IT Project</h2>

                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="project-one__top__content">
                                    <p className="project-one__top__text">Pellentesque Viverra Eget Velit A Tincidunt. Sed
                                        Mattis Enim Nisl, Sit Amet Malesuada Sapien Pulvinar Ut.</p>
                                    <div className="project-one__top__btns">
                                        <Link to="/projects" className="thm-btn project-one__top__btn">
                                            <span>View All Projects</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <OwlCarousel className="thm-owl__carousel project-one__carousel thm-owl__carousel--with-shadow" {...projectOptions}>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src="assets/images/projects/project-1-1.jpg" alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/project-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/project-details" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src="assets/images/projects/project-1-2.jpg" alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/project-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/project-details" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src="assets/images/projects/project-1-3.jpg" alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/project-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/project-details" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src="assets/images/projects/project-1-4.jpg" alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/project-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/project-details" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src="assets/images/projects/project-1-5.jpg" alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/project-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/project-details" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src="assets/images/projects/project-1-6.jpg" alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/project-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/project-details" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            <section class="black-bg cta-two">
                <Parallax bgImage={BGImg} bgImageAlt="" className="section-padding-lg--top section-padding-lg--bottom" strength={1000}>
                    <div className="container">
                        <div className="cta-two__inner">
                            <h3 className="cta-two__title">Better IT Solutions And Services
                                At Your <span>Fingertips</span></h3>
                            <Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
                        </div>
                    </div>
                </Parallax>
            </section>
            
            
           
            

            <section className=" section-padding--top about-three about-three--home-one">
                <div className="about-three__shape wow fadeInRight" data-wow-duration="1500ms"
                    style={{ backgroundImage: `url(${BGImg7})` }}>
                </div>
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-three__image">
                                <img src="assets/images/resources/about-three-1-1.png" className="wow fadeInUp"
                                    data-wow-duration="1500ms" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-three__content">
                                <div className="section-title ">
                                    <p className="section-title__text">Company Benefits</p>
                                    <h2 className="section-title__title">Why You Should Choose
                                        Our Services</h2>
                                </div>
                                <div className="about-three__text">Choose Infetech to have custom software solutions for your
                                    business with the most reasonable price.</div>
                                <ul className="about-three__list">
                                    <li className="about-three__list__item">
                                        <div className="about-three__list__icon">
                                            <i className="icon-cloud"></i>
                                        </div>
                                        <div className="about-three__list__content">
                                            <h3 className="about-three__list__title"><Link to="cyber-security">Cloud
                                                Based Services</Link></h3>
                                            <p className="about-three__list__text">Services address a range of simply free text
                                                application and infrastructure needs.</p>
                                        </div>
                                    </li>
                                    <li className="about-three__list__item">
                                        <div className="about-three__list__icon">
                                            <i className="icon-group"></i>
                                        </div>
                                        <div className="about-three__list__content">
                                            <h3 className="about-three__list__title"><Link to="/team">Expert Team Members</Link>
                                            </h3>
                                            <p className="about-three__list__text">Services address a range of simply free text
                                                application and infrastructure needs.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

           

            <section className="cta-one">
                <div className="container">
                    <div className="cta-one__inner text-center wow fadeInUp" data-wow-duration="1500ms">
                        <div className="cta-one__circle"></div>
                        <div className="section-title ">
                            <p className="section-title__text">Need Any Technology Solution</p>
                            <h2 className="section-title__title section-title__title--light">Let’s Work Togather on Project</h2>
                        </div>
                        <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Start Now</span></Link>
                    </div>
                </div>
            </section>
            {ytShow &&
                <div className="YouTubePopUp-Wrap">
                    <div className="YouTubePopUp-Content">
                        <span className="YouTubePopUp-Close" onClick={() => setytShow(false)}></span>
                        <iframe src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1" title='ytvideo' allowFullScreen></iframe>
                    </div>
                </div>}
        </>
    )
}

export default Home