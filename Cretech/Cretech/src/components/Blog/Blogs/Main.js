import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'

const Blogs = () => {
    return (
        <>
            <Breadcumb Title="Blog Page" Breadcumb="BLOG" />
            <section className="section-padding--top section-padding--bottom">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="000ms">
                            <div className="blog-card-one">
                                <div className="blog-card-one__image">
                                    <img src="assets/images/blog/blog-1-1.jpg" alt="" />
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
                                    <h3 className="blog-card-one__title"><Link to="/blog-details">Web design done Delightful
                                        Visualization Examples</Link></h3>
                                    <Link to="/blog-details" className="blog-card-one__more">
                                        Read More
                                        <i className="fa fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="100ms">
                            <div className="blog-card-one">
                                <div className="blog-card-one__image">
                                    <img src="assets/images/blog/blog-1-2.jpg" alt="" />
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
                                    <h3 className="blog-card-one__title"><Link to="/blog-details">Technology Support Allows
                                        Erie non-profit to Serve</Link></h3>
                                    <Link to="/blog-details" className="blog-card-one__more">
                                        Read More
                                        <i className="fa fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="200ms">
                            <div className="blog-card-one">
                                <div className="blog-card-one__image">
                                    <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                                    <Link to="/blog-details"></Link>
                                </div>
                                <div className="blog-card-one__content">
                                    <div className="blog-card-one__meta">
                                        <div className="blog-card-one__date">
                                            <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                                            July, 25, 2022
                                        </div>
                                        <Link to="/blog" className="blog-card-one__category">SEO</Link>
                                    </div>
                                    <h3 className="blog-card-one__title"><Link to="/blog-details">Software Makes Your Profit
                                        Double if You Scale Properly</Link></h3>
                                    <Link to="/blog-details" className="blog-card-one__more">
                                        Read More
                                        <i className="fa fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="300ms">
                            <div className="blog-card-one">
                                <div className="blog-card-one__image">
                                    <img src="assets/images/blog/blog-1-4.jpg" alt="" />
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
                                    <h3 className="blog-card-one__title"><Link to="/blog-details">Bring to the table win-win
                                        survival strategies to </Link></h3>
                                    <Link to="/blog-details" className="blog-card-one__more">
                                        Read More
                                        <i className="fa fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="400ms">
                            <div className="blog-card-one">
                                <div className="blog-card-one__image">
                                    <img src="assets/images/blog/blog-1-5.jpg" alt="" />
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
                                    <h3 className="blog-card-one__title"><Link to="/blog-details">Capitalize on low hanging
                                        fruit to identify a ballpark </Link></h3>
                                    <Link to="/blog-details" className="blog-card-one__more">
                                        Read More
                                        <i className="fa fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="500ms">
                            <div className="blog-card-one">
                                <div className="blog-card-one__image">
                                    <img src="assets/images/blog/blog-1-6.jpg" alt="" />
                                    <Link to="/blog-details"></Link>
                                </div>
                                <div className="blog-card-one__content">
                                    <div className="blog-card-one__meta">
                                        <div className="blog-card-one__date">
                                            <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                                            July, 25, 2022
                                        </div>
                                        <Link to="/blog" className="blog-card-one__category">SEO</Link>
                                    </div>
                                    <h3 className="blog-card-one__title"><Link to="/blog-details">User generated content in
                                        real-time will have multiple </Link></h3>
                                    <Link to="/blog-details" className="blog-card-one__more">
                                        Read More
                                        <i className="fa fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs