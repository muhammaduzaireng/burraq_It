import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import BG1 from '../../../assets/images/background/service-1-bg-1.png'
import BG2 from '../../../assets/images/shapes/about-three-s-1.png'
import BG3 from '../../../assets/images/shapes/testi-bg-2-1.png'
import Breadcumb from '../../Breadcumb/Main'

const Service2 = () => {
  const logoOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
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
      <Breadcumb Title="Services 02" Breadcumb="SERVICES" />
      <section className="section-padding--top section-padding--bottom about-two">

        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-two__content">
                <div className="section-title ">
                  <p className="section-title__text">HOW CAN HELP YOU</p>
                  <h2 className="section-title__title">Business Solutions to
                    Growth Business</h2>
                </div>
                <div className="about-two__text">System is a term used to refer to an organized collection
                  symbols and processes that may be used to operate on such symbols. Perspiciatis unde
                  omnis natus error voluptatems accusa.</div>
                <ul className="about-two__list">
                  <li>
                    Going Above and
                    Beyond
                  </li>
                  <li>
                    Committed to
                    People First
                  </li>
                </ul>
                <Link to="/about" className="thm-btn about-two__btn"><span>Learn More</span></Link>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two__image">
                <img src="assets/images/resources/about-two-1-1.jpg" alt="" className="wow fadeInUp"
                  data-wow-duration="1500ms" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding--top section-padding--bottom service-three black-bg"
        style={{ backgroundImage: `url(${BG1})` }}>
        <div className="container">
          <div className="service-three__block">
            <div className="row">
              <div className="col-lg-7">
                <div className="section-title">
                  <p className="section-title__text">What We offier</p>
                  <h2 className="section-title__title section-title__title--light">Help you Overcome your
                    Technology Challenges</h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="service-three__block__text">Accusa ntium doloremque laudantium totam rem
                  aperiamea
                  queipsa quae abillo inventore veritatis.</div>
              </div>
            </div>
          </div>
          <ul className="service-three__list">
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="000ms">
              <i className="icon-coding service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">Website</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="100ms">
              <i className="icon-apple service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">IOS</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="200ms">
              <i className="icon-android service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">Android</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="300ms">
              <i className="icon-iot service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">IOT</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="400ms">
              <i className="icon-smartband service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">Wearalables</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="500ms">
              <i className="icon-tv service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">TV</Link></h3>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding--bottom section-padding--top about-three">
        <div className="about-three__shape wow fadeInRight" data-wow-duration="1500ms"
          style={{ backgroundImage: `url(${BG2})` }}>
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
                      <h3 className="about-three__list__title"><Link to="/cyber-security">Cloud
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

      <section
        className="section-padding--bottom section-padding--top gray-bg testimonials-one background-repeat-no background-position-top-center"
        style={{ backgroundImage: `url(${BG3})` }}>
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Our clients</p>
            <h2 className="section-title__title">Trusted Worldwide Peoples</h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src="assets/images/resources/testi-1-1.jpg" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">On the other hand denounc with ghteo
                    indignation and dislike men who so beguiled and demoralized the charms of pleasure
                    the momen blinded by desire cannot foresee the pain and trouble.</div>
                  <h3 className="testimonials-one-card__title">Michal Rahul</h3>
                  <p className="testimonials-one-card__designation">Ul - UX Designer</p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src="assets/images/resources/testi-1-2.jpg" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">On the other hand denounc with ghteo
                    indignation and dislike men who so beguiled and demoralized the charms of pleasure
                    the momen blinded by desire cannot foresee the pain and trouble.</div>
                  <h3 className="testimonials-one-card__title">Jessica Brown</h3>
                  <p className="testimonials-one-card__designation">Ul - UX Designer</p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="client-carousel">
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

export default Service2