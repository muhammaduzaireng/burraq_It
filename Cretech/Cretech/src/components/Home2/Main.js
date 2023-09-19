import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import BG1 from '../../assets/images/background/slider-2-1.jpg'
import BG2 from '../../assets/images/background/slider-2-2.jpg'
import BG3 from '../../assets/images/shapes/about-seven-bg-1-1.png'
import BG4 from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BG5 from '../../assets/images/shapes/pricing-one-bg-1-2.png'
import BG6 from '../../assets/images/projects/project-3-1.jpg'
import BG7 from '../../assets/images/projects/project-3-2.jpg'
import BG8 from '../../assets/images/projects/project-3-3.jpg'
import BG9 from '../../assets/images/projects/project-3-4.jpg'
import BG10 from '../../assets/images/blog/blog-h2-1.jpg'
import { Parallax } from 'react-parallax'

const Home2 = () => {
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
	}, []);

	const isSticky = () => {
		const scrollTop = window.scrollY;
		scrollTop >= 250 ? setSticky(true) : setSticky(false);
	}

	const logoOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: false,
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
		loop: false,
		nav: false,
		autoWidth: true,
		navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
		dots: false,
		margin: 10,
		items: 1,
		smartSpeed: 700,
		responsive: {
			0: {
				margin: 10,
				items: 1,
				autoWidth: false
			},
			768: {
				margin: 10,
				items: 2,
				autoWidth: false
			},
			992: {
				margin: 10,
				items: 3
			},
			1200: {
				margin: 10,
				items: 4
			}
		}
	}
	return (
		<>
			<header className="header-two">
				<div className="topbar-two">
					<div className="container">
						<div className="topbar-two__inner">
							<div className="topbar-two__logo">
								<Link to="/">
									<img src="assets/images/burraq.svg" width="150" height="100" alt="Cretech" />
								</Link>
							</div>
							<ul className="topbar-two__list">
								<li className="topbar-two__list__item">
									<div className="topbar-two__list__icon">
										<i className="fa fa-envelope"></i>
									</div>
									<div className="topbar-two__list__content">
										<span>Send Email</span>
										<Link to="mailto:info@burraq.net">info@burraq.net</Link>
									</div>
								</li>
								<li className="topbar-two__list__item">
									<div className="topbar-two__list__icon">
										<i className="fa fa-map-marker"></i>
									</div>
									<div className="topbar-two__list__content">
										<span>Address</span>
										60 Golden Broklyn Street, New York
									</div>
								</li>
							</ul>
							<div className="topbar-two__btns">
								<Link to="/contact" className="thm-btn topbar-two__btn"><span>Free Consultation</span></Link>
							</div>
						</div>
					</div>
				</div>
				<nav className={`main-menu sticky-header ${sticky && "sticky-header--cloned sticky-fixed"}`}>
					<div className="container">
						<div className="main-menu__inner">
							<div className="main-menu__logo">
								<Link to="/">
									<img src="assets/images/logo-light.png" width="98" height="33" alt="Cretech" />
								</Link>
							</div>

							<ul className="main-menu__list">
								<li className="menu-item-has-children current">
									<Link to="/">Home</Link>
									<ul>
										<li><Link to="/">Home One</Link></li>
										<li><Link to="/home-02">Home Two</Link></li>
										<li><Link to="/home-03">Home Three</Link></li>
										<li className="menu-item-has-children"><Link to="/">Header Styles</Link>
											<ul>
												<li><Link to="/">Header One</Link></li>
												<li><Link to="/home-02">Header Two</Link></li>
												<li><Link to="/home-03">Header Three</Link></li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="#">Pages</Link>
									<ul>
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/team">Our Team</Link></li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/service-01">Services</Link>
									<ul>
										<li><Link to="/service-01">Services 01</Link></li>
										<li><Link to="/service-02">Services 02</Link></li>
										<li><Link to="/cyber-security">Cyber Security</Link></li>
										<li><Link to="/it-management">IT Management</Link></li>
										<li><Link to="/qa-testing">QA & Testing</Link></li>
										<li><Link to="/infrastructure-plan">Infrastructure Plan</Link></li>
										<li><Link to="/it-consultent">IT Consultent</Link></li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/projects">Projects</Link>
									<ul>
										<li><Link to="/projects">Projects</Link></li>
										<li><Link to="/project-details">Projects Details</Link></li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link to="/blog">Blog</Link>
									<ul>
										<li><Link to="/blog">Blog</Link></li>
										<li><Link to="/blog-details">Blog Details</Link></li>
									</ul>
								</li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>

							<div className="main-menu__right">
								<Link to="#" className="mobile-nav__toggler">
									<span></span>
									<span></span>
									<span></span>
								</Link>
								<Link to="tel:+9288009860" className="main-menu__cta">
									<i className="fa fa-phone-alt"></i>
									<span className="main-menu__cta__text">
										<b>+ 92 ( 8800 ) 9860</b>
									</span>
								</Link>
								<Link to="#" className="search-toggler">
									<i className="icon-magnifying-glass"></i>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<div className="slider-one slider-two">
				<ul className="slider-two__social">
					<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
					<li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
					<li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
					<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
				</ul>
				<OwlCarousel className="slider-one__carousel owl-theme thm-owl__carousel" {...sliderOptions}>
					<div className="item slider-one__slide-1">
						<div className="slider-one__bg" style={{ backgroundImage: `url(${BG1})` }}>
						</div>
						<div className="slider-one__shape-1"></div>
						<div className="container">
							<div className="slider-one__content ">
								<div className="slider-one__title-wrapper">
									<h2 className="slider-one__title">IT Solutions <br />
										to Grow <span>Your</span> <br />
										Business</h2>
								</div>
								<div className="slider-one__btns">
									<Link to="/about" className="thm-btn slider-one__btn"><span>Learn More</span></Link>
								</div>
							</div>
						</div>
					</div>

					<div className="item slider-one__slide-2">
						<div className="slider-one__bg" style={{ backgroundImage: `url(${BG2})` }}>
						</div>
						<div className="slider-one__shape-1"></div>
						<div className="container">
							<div className="slider-one__content ">
								<div className="slider-one__title-wrapper">
									<h2 className="slider-one__title">IT Solutions <br />
										to Grow <span>Your</span> <br />
										Business</h2>
								</div>
								<div className="slider-one__btns">
									<Link to="/about" className="thm-btn slider-one__btn"><span>Learn More</span></Link>
								</div>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>

			<section
				className="section-padding--top section-padding-xl--bottom section-has-bottom-margin background-repeat-no background-size-cover gray-bg about-seven"
				style={{ backgroundImage: `url(${BG3})` }}>
				<div className="container">
					<div className="row gutter-y-60">
						<div className="col-lg-5">
							<div className="about-seven__content">
								<div className="section-title">
									<p className="section-title__text">HOW CAN HELP YOU</p>
									<h2 className="section-title__title">Business Solutions <br /> to Growth Business</h2>
								</div>
								<div className="about-seven__text">System is a term used to refer to an organized collection
									symbols and processes that may be used to operate on such symbols. Perspiciatis unde
									omnis natus error voluptatems accusa.</div>
								<div className="about-seven__btns">
									<Link to="/service-01" className="thm-btn about-seven__btn"><span>Learn More</span></Link>
								</div>

							</div>
						</div>
						<div className="col-lg-7">
							<ul className="about-seven__list">
								<li className="about-seven__list__item text-center wow fadeInLeft" data-wow-duration="1500ms"
									data-wow-delay="000ms">
									<i className="about-seven__list__icon icon-dashboard"></i>
									<h3 className="about-seven__list__title">
										<Link to="/infrastructure-plan">Automated <br />
											Software</Link>
									</h3>
								</li>
								<li className="about-seven__list__item text-center wow fadeInLeft" data-wow-duration="1500ms"
									data-wow-delay="100ms">
									<i className="about-seven__list__icon icon-system"></i>
									<h3 className="about-seven__list__title">
										<Link to="/infrastructure-plan">Managed IT <br />
											Services</Link>
									</h3>
								</li>
								<li className="about-seven__list__item text-center wow fadeInLeft" data-wow-duration="1500ms"
									data-wow-delay="200ms">
									<i className="about-seven__list__icon icon-cloud-data"></i>
									<h3 className="about-seven__list__title">
										<Link to="/infrastructure-plan">Market <br />
											Strategy</Link>
									</h3>
								</li>
								<li className="about-seven__list__item text-center wow fadeInLeft" data-wow-duration="1500ms"
									data-wow-delay="300ms">
									<i className="about-seven__list__icon icon-data-visualization"></i>
									<h3 className="about-seven__list__title">
										<Link to="/infrastructure-plan">Data <br />
											Structuring</Link>
									</h3>
								</li>
								<li className="about-seven__list__item text-center wow fadeInLeft" data-wow-duration="1500ms"
									data-wow-delay="400ms">
									<i className="about-seven__list__icon icon-software-engineer"></i>
									<h3 className="about-seven__list__title">
										<Link to="/infrastructure-plan">Software <br />
											Develop</Link>
									</h3>
								</li>
								<li className="about-seven__list__item text-center wow fadeInLeft" data-wow-duration="1500ms"
									data-wow-delay="500ms">
									<i className="about-seven__list__icon icon-web-design"></i>
									<h3 className="about-seven__list__title">
										<Link to="/infrastructure-plan">Website <br />
											Develop</Link>
									</h3>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="cta-one cta-one--home-three">
				<div className="container">
					<div className="cta-one__inner  wow fadeInUp" data-wow-duration="1500ms">
						<div className="cta-one__circle"></div>
						<div className="section-title ">
							<h2 className="section-title__title section-title__title--light">Ready to Get Free Consulations <br />
								for Any Kind of it Solutions?</h2>
						</div>
						<div className="cta-one--home-three__btns">
							<Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Get A Quote</span></Link>
						</div>
					</div>
				</div>
			</section>


			<section className="section-padding--bottom section-padding--top">
				<div className="container">
					<div className="section-title text-center">
						<p className="section-title__text">Company Benefits</p>
						<h2 className="section-title__title">We Provide Best IT Solutions For Business <br />25 Years We Provide
							Solutions</h2>
					</div>
					<div className="row gutter-y-30">
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="service-card-two gray-bg">
								<h3 className="service-card-two__title"><Link to="/service-01">Quality Service</Link></h3>
								<p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
								</p>
								<div className="service-card-two__icon">
									<i className="icon-smart-tv"></i>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="service-card-two gray-bg">
								<h3 className="service-card-two__title"><Link to="/team">Expert Team</Link></h3>
								<p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
								</p>
								<div className="service-card-two__icon">
									<i className="icon-link"></i>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="service-card-two gray-bg">
								<h3 className="service-card-two__title"><Link to="/contact">Excellent Support</Link></h3>
								<p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
								</p>
								<div className="service-card-two__icon">
									<i className="icon-technical-support"></i>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="service-card-two gray-bg">
								<h3 className="service-card-two__title"><Link to="/about">Management</Link></h3>
								<p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
								</p>
								<div className="service-card-two__icon">
									<i className="icon-cctv"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="black-bg cta-two">
				<Parallax bgImage={BG4} bgImageAlt="" className="cta-two__bg section-padding-lg--top section-padding-lg--bottom" strength={300}>
					<div className="container">
						<div className="cta-two__inner">
							<h3 className="cta-two__title">Better IT Solutions And Services
								At Your <span>Fingertips</span></h3>
							<Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
						</div>
					</div>
				</Parallax>
			</section>

			<section className="section-padding--bottom section-padding--top pricing-one">
				<div className="pricing-one__shape wow fadeInUp" data-wow-duration="1500ms"
					style={{ backgroundImage: `url(${BG5})` }}>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="pricing-one__content">
								<div className="section-title">
									<p className="section-title__text">POPULAR PRICING</p>
									<h2 className="section-title__title">Choose Our Pricing Table Plan</h2>
								</div>
								<div className="pricing-one__text">Aperiamea queipsa quae abillo inve ntore veritatis et quasi
									architecto beatae vitae dicta sunt explicabo..</div>
								<ul className="pricing-one__circle">
									<li className="pricing-one__circle__item">
										<div className="circle-progress"
											data-options='{ "value": 0.75,"emptyFill": "rgba(225, 219, 236, 1)", "lineCap": "round", "size": 125, "fill": { "color": "#9c2ede" } }'>
											<span>75%</span></div>
										<h3 className="pricing-one__circle__title">Software</h3>
									</li>
									<li className="pricing-one__circle__item">
										<div className="circle-progress"
											data-options='{ "value": 0.8,"emptyFill": "rgba(225, 219, 236, 1)","lineCap": "round", "size": 125, "fill": { "color": "#9c2ede" } }'>
											<span>68%</span></div>
										<h3 className="pricing-one__circle__title">Technology</h3>
									</li>
								</ul>
								<div className="pricing-one__btns">
									<Link to="/service-01" className="thm-btn pricing-one__btn"><span>Learn More</span></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pricing-one__items">
								<div className="row">
									<div className="col-md-6 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="000ms">
										<div className="pricing-card-one">
											<div className="pricing-card-one__name">Regular Plan</div>
											<div className="pricing-card-one__price">$54.99</div>
											<div className="pricing-card-one__time">/Monthly</div>
											<ul className="pricing-card-one__list">
												<li>
													<i className="fa fa-check"></i>
													Business & Finance Analysing
												</li>
												<li>
													<i className="fa fa-check"></i>
													Managment & Marketing
												</li>
												<li>
													<i className="fa fa-check"></i>
													24/7 Customer Support
												</li>
												<li>
													<i className="fa fa-close"></i>
													Strategy & Research
												</li>
												<li>
													<i className="fa fa-close"></i>
													SEO Optimization
												</li>
											</ul>
											<div className="pricing-card-one__btns">
												<Link to="/contact"
													className="thm-btn thm-btn--dark pricing-card-one__btn"><span>GET
														STARTED</span></Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="100ms">
										<div className="pricing-card-one">
											<div className="pricing-card-one__name">Regular Plan</div>
											<div className="pricing-card-one__price">$64.99</div>
											<div className="pricing-card-one__time">/Monthly</div>
											<ul className="pricing-card-one__list">
												<li>
													<i className="fa fa-check"></i>
													Business & Finance Analysing
												</li>
												<li>
													<i className="fa fa-check"></i>
													Managment & Marketing
												</li>
												<li>
													<i className="fa fa-check"></i>
													24/7 Customer Support
												</li>
												<li>
													<i className="fa fa-check"></i>
													Strategy & Research
												</li>
												<li>
													<i className="fa fa-check"></i>
													SEO Optimization
												</li>
											</ul>
											<div className="pricing-card-one__btns">
												<Link to="/contact"
													className="thm-btn thm-btn--dark pricing-card-one__btn"><span>GET
														STARTED</span></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding--bottom section-padding--top project-three">
				<div className="container-fluid">
					<div className="section-title text-center">
						<p className="section-title__text">Latest Project</p>
						<h2 className="section-title__title">Populer Case Studies That <br />Complete Recently</h2>
					</div>

					<OwlCarousel className="thm-owl__carousel--range owl-theme" {...projectOptions}>
						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG6})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two project-card-two--large">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG7})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG8})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG9})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG6})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two project-card-two--large">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG7})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG8})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG9})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG6})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two project-card-two--large">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG7})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG8})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="project-card-two">
								<div className="project-card-two__bg"
									style={{ backgroundImage: `url(${BG9})` }}>
								</div>
								<div className="project-card-two__content">
									<div className="project-card-two__category">IT Consulting</div>
									<h3 className="project-card-two__title"><Link to="/project-details">Financial
										Investment</Link></h3>
								</div>
							</div>
						</div>
					</OwlCarousel>

				</div>
			</section>

			<section className="section-padding--bottom section-padding--top background-size-cover gray-bg work-process">
				<div className="container">
					<div className="section-title text-center">
						<p className="section-title__text">OUR WORKING PROCESS</p>
						<h2 className="section-title__title">Driving Client Results Utilizing New <br />Innovation Points of view
						</h2>
					</div>
					<div className="row gutter-y-30">
						<div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="000ms">
							<div className="work-process-card-one">
								<div className="work-process-card-one__count"></div>
								<h3 className="work-process-card-one__title"><Link to="/about">End to End <br />
									Solutions & Services
									Guaranteed</Link></h3>
								<div className="work-process-card-one__text">We help transform the world’s most important
									businesses into vigorous organizations that </div>
								<Link className="work-process-card-one__link" to="/about">Read More</Link>
							</div>
						</div>
						<div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="100ms">
							<div className="work-process-card-one">
								<div className="work-process-card-one__count"></div>
								<h3 className="work-process-card-one__title"><Link to="/service-01">Ahead of The Curve
									We Future-proof
									Your IT Solution</Link></h3>
								<div className="work-process-card-one__text">We help transform the world’s most important
									businesses into vigorous organizations that </div>
								<Link className="work-process-card-one__link" to="/service-01">Read More</Link>
							</div>
						</div>
						<div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="200ms">
							<div className="work-process-card-one">
								<div className="work-process-card-one__count"></div>
								<h3 className="work-process-card-one__title"><Link to="/contact">Experience
									Certainty Every
									Project Executed</Link></h3>
								<div className="work-process-card-one__text">We help transform the world’s most important
									businesses into vigorous organizations that </div>
								<Link className="work-process-card-one__link" to="/contact">Read More</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding--bottom section-padding--top blog-home-two">
				<div className="container">
					<div className="blog-home-two__top">
						<div className="row">
							<div className="col-lg-7">
								<div className="section-title">
									<p className="section-title__text">Direct from the Blog Posts</p>

									<h2 className="section-title__title">Checkout Our Latest <br />News & Articles</h2>
								</div>
							</div>
							<div className="col-lg-5">
								<div className="blog-home-two__top__text">Aperiamea queipsa quae abillo inve ntore veritatis et
									quasi architecto beatae vitae dicta sunt explicabo.</div>
							</div>
						</div>
					</div>
					<div className="row gutter-y-30">
						<div className="col-lg-6">
							<div className="blog-card-two">
								<div className="blog-card-two__bg"
									style={{ backgroundImage: `url(${BG10})` }}></div>
								<Link to="/blog" className="blog-card-one__category">Designer</Link>
								<div className="blog-card-two__content">
									<div className="blog-card-one__date">
										<i className="fa fa-calendar-alt" aria-hidden="true"></i>
										July, 25, 2022
									</div>
									<h3 className="blog-card-one__title"><Link to="/blog-details">Web design done Delightful
										Visualization Examples</Link></h3>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-card-one blog-card-one--home-two">
								<div className="blog-card-one__image">
									<img src="assets/images/blog/blog-h2-2.jpg" alt="" />
									<Link to="/blog-details"></Link>
								</div>
								<div className="blog-card-one__content">
									<div className="blog-card-one__meta">
										<div className="blog-card-one__date">
											<i className="fa fa-calendar-alt" aria-hidden="true"></i>
											July, 25, 2022
										</div>
										<Link to="/blog" className="blog-card-one__category">Designer</Link>
									</div>
									<h3 className="blog-card-one__title"><Link to="/blog-details">Technology Support
										Allows Erie non-profit
										to Serve</Link></h3>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-card-one blog-card-one--home-two">
								<div className="blog-card-one__image">
									<img src="assets/images/blog/blog-h2-3.jpg" alt="" />
									<Link to="/blog-details"></Link>
								</div>
								<div className="blog-card-one__content">
									<div className="blog-card-one__meta">
										<div className="blog-card-one__date">
											<i className="fa fa-calendar-alt" aria-hidden="true"></i>
											July, 25, 2022
										</div>
										<Link to="/blog" className="blog-card-one__category">Graphic</Link>
									</div>
									<h3 className="blog-card-one__title"><Link to="/blog-details">Software Makes Your
										Profit Double if You
										Scale Properly</Link></h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="client-carousel client-carousel--two client-carousel--home-two">
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
			</div></>
	)
}

export default Home2