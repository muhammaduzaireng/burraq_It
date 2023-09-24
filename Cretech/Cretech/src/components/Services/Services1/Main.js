import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Breadcumb from '../../Breadcumb/Main'
import BG from '../../../assets/images/background/cta-two-bg-1-1.jpg'
import BgImg from  "../../../assets/images/background/page-header-bg-1-1.jpg"

const Service1 = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imagePaths = [
    "assets/images/resources/client-1-1.svg",
    "assets/images/resources/client-1-2.svg",
    "assets/images/resources/client-1-3.svg",
    "assets/images/resources/client-1-4.svg",
    "assets/images/resources/client-1-5.svg",
    "assets/images/resources/client-1-6.svg",
    "assets/images/resources/client-1-1.png",
    "assets/images/resources/Picture1.png",
    "assets/images/resources/Picture2.png",
    "assets/images/resources/Picture3.png",
    "assets/images/resources/Picture4.png",            
    "assets/images/resources/Picture5.png",
    "assets/images/resources/Picture6.png",
    "assets/images/resources/Picture7.png",  
    "assets/images/resources/Picture8.png",
    "assets/images/resources/Picture9.png",
    "assets/images/resources/Picture10.png",
    "assets/images/resources/Picture11.png",
    "assets/images/resources/Picture12.png",
    "assets/images/resources/Picture13.png",
    "assets/images/resources/Picture14.png",
    "assets/images/resources/Picture15.png",
    "assets/images/resources/Picture16.png",
    "assets/images/resources/Picture17.png",    
    "assets/images/resources/Picture18.png",
    "assets/images/resources/Picture20.png", 
    "assets/images/resources/Picture21.png", 
    "assets/images/resources/Picture22.png", 
    "assets/images/resources/Picture23.png", 
    "assets/images/resources/Picture24.png",  
    "assets/images/resources/Picture25.png",   
    "assets/images/resources/Picture26.png",   
    "assets/images/resources/Picture27.png",   
    "assets/images/resources/Picture28.png",   
    "assets/images/resources/Picture29.png",   
    "assets/images/resources/Picture30.png",   
    "assets/images/resources/Picture31.png",   
    "assets/images/resources/Picture32.png",   
    "assets/images/resources/Picture33.png",   
    "assets/images/resources/Picture34.png",   
    "assets/images/resources/Picture35.png",   
    "assets/images/resources/Picture36.png",   
    "assets/images/resources/Picture37.png",   
    "assets/images/resources/Picture38.png",   
    "assets/images/resources/Picture39.png",   
    "assets/images/resources/Picture40.png",   
    "assets/images/resources/Picture41.png",   
    "assets/images/resources/Picture42.png",   
    "assets/images/resources/Picture43.png",   
    "assets/images/resources/Picture44.png",  
    "assets/images/resources/Picture45.png",

  ];

  const imageData = [
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 1',
      headerImage: 'assets/images/projects/audinateCover.jpg'
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 2',
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 3',
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 4',
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 1',
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 1',
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 1',
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 1',
    },
    {
      title: 'Image 1',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 1',
    },
    
    // Add more data objects for each image
  ];
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShow(true);
  };

  const selectedImageData = imageData[selectedImageIndex];


  const [show, setShow] = useState (false);
  const logoOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
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
  const serviceOptions = {
    loop: false,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
    margin: 0,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 1,
        margin: 30
      },
      1200: {
        items: 2,
        margin: 30
      },
      1700: {
        items: 3,
        margin: 30
      }
    }
  }
  
  return (
    <>
      <Breadcumb Title="Audio - Video" Breadcumb="Audio - Video"  backgroundImage={BgImg} />
      <section className="section-padding--top section-padding--bottom about-one">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-one__image">
                <img src="assets/images/resources/about-1-1.png" className="wow fadeInUp"
                  data-wow-duration="1500ms" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="section-title ">
                  <p className="section-title__text">About Company</p>
                  <h2 className="section-title__title">Creating Optimal Experiences to Display a Better World</h2>
                </div>
                <div className="about-one__text">
                Burraq, with its reputable brands, skilled team, and solid technical foundation, 
                has emerged as a market leader in its niche industry. Renowned consultants, system integrators, 
                and end-users trust Burraq, which has successfully assisted top-tier clients with seamless integration 
                and deployment.
                </div>
                <ul className="about-one__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Engaging audio and video: Delivering high-quality AV experiences from broadroom to large-scale events.
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Indoor and outdoor capabilities: Excelling in all environments, we create memorable experiences that endure.
                  </li>
                  {/* <li>
                    <i className="fa fa-check-circle"></i>
                    Velit esse cillum dolore eu fugiat nulla pariatur.
                  </li> */}
                </ul>
                <Link to="/about" className="thm-btn about-one__btn"><span>Learn More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="client-carousel client-carousel--two">
        <div className="container">
          <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
          {imagePaths.map((imagePath, index) => (
          <div className="item" key={index}>
            <img
              onClick={() => handleImageClick(index)}
              src={imagePath}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
            

          </OwlCarousel>
        </div>
      </div>
      
      
      {show && ( 
        <section className="project-details section-padding--bottom">
				<div className="container">
					<div className="project-details__image">
						<img src={selectedImageData.headerImage} alt="" />
					</div>
					<div className="project-details__info">
						<div className="project-details__info__item">
							<h4 className="project-details__info__title">Origin:</h4>
							<p className="project-details__info__text">{selectedImageData.origin}</p>
						</div>

						<div className="project-details__info__item">
							<h4 className="project-details__info__title">Category:</h4>
							<p className="project-details__info__text"><Link to="#">{selectedImageData.category}</Link></p>

						</div>
						<div className="project-details__info__item">
							<h4 className="project-details__info__title">Established:</h4>
							<p className="project-details__info__text">{selectedImageData.established}</p>
						</div>
						
						<div className="project-details__info__item">
							<div className="project-details__info__social">
								<Link to="#"><i className="fab fa-twitter"></i></Link>
								<Link to="#"><i className="fab fa-facebook"></i></Link>
								<Link to="#"><i className="fab fa-instagram"></i></Link>
							</div>
						</div>
					</div>
					<h3 className="project-details__title">Manufacturing Specialist</h3>
					<div className="project-details__content">
          <p>
            {selectedImageData.description}
          </p>
						<ul className="project-details__list">
							<li>
								<i className="fa fa-check-circle"></i>
								LED Tubes, Pars and Bulbs, DMX Box and App.
							</li>
							
						</ul>
					</div>
				</div>
			</section>
)}  
      <section className="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
        <div className="cta-two__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
          style={{ backgroundImage: `url(${BG})` }}></div>
        <div className="container">
          <div className="cta-two__inner">
            <h3 className="cta-two__title">Better IT Solutions And Services
              At Your <span>Fingertips</span></h3>
            <Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
          </div>
        </div>
      </section>

      <section className="section-padding--bottom section-padding--top service-one">
        <div className="container-fluid">

          <OwlCarousel className="thm-owl__carousel service-one__carousel" {...serviceOptions}>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-1.jpg" alt="" />
                  {/* <div className="service-card-one__logo">G</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Audio</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-2.jpg" alt="" />
                  {/* <div className="service-card-one__logo">B</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Video</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-3.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">ILightning</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-4.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Conference, Boardroom and Event Halls</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-5.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Cables and Infrastructure</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-6.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Acoustics</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="section-padding--bottom">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Company Benefits</p>
            <h2 className="section-title__title">We Provide Comprehensive Integrated & Scalable Audio and Video Solutions <br />in Collabration with Top Brands</h2>

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
    </>
  )
}

export default Service1