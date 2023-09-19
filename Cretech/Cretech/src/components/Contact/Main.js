import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../../assets/images/background/contact-one-bg-1-1.png'
import Breadcumb from '../Breadcumb/Main'

const Contact = () => {
    return (
        <>
        <Breadcumb Title="Contact" Breadcumb="CONTACT" />
            <section className="contact-one section-padding--top section-padding--bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <form action="assets/inc/sendemail.php" className="contact-one__form contact-form-validated">
                                <div className="section-title">
                                    <p className="section-title__text">Contact with us</p>
                                    <h2 className="section-title__title">Join Us To Get IT Free
                                        Consultations</h2>
                                </div>
                                <div className="row ">
                                    <div className="col-lg-6 col-md-12">
                                        <input type="text" placeholder="Your name" name="name" />
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <input type="email" placeholder="Email address" name="email" />
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <textarea name="message" placeholder="Write message"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="thm-btn contact-one__btn" type="submit"><span>send a
                                            message</span></button>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-one__info wow fadeInRight" data-wow-duration="1500ms"
                                style={{backgroundImage: `url(${BG})`}}>
                                <div className="contact-one__item">
                                    <h3 className="contact-one__item__title">Address</h3>
                                    <p className="contact-one__item__text">88 New Street, Washington DC <br />
                                        United States, America</p>
                                </div>
                                <div className="contact-one__item">
                                    <h3 className="contact-one__item__title">Phone</h3>
                                    <p className="contact-one__item__text">Local: <Link to="tel:222999888">222 999 888</Link><br />
                                        Mobile: <Link to="tel:0008888999">000 8888 999</Link></p>

                                </div>
                                <div className="contact-one__item">
                                    <h3 className="contact-one__item__title">Email</h3>
                                    <p className="contact-one__item__text"><Link
                                        to="mailto:info@burraq.net">info@burraq.net</Link><br /><Link
                                            to="mailto:inquiry@company.com">inquiry@company.com</Link></p>

                                </div>
                                <div className="contact-one__item">
                                    <ul className="contact-one__social">
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="google-map google-map--contact">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="google-map__one" title='gmap' allowFullScreen></iframe>

            </section>
        </>
    )
}

export default Contact