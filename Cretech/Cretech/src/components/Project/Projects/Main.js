import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'

const Projects = () => {
  return (
    <>
    <Breadcumb Title="Projects" Breadcumb="PROJECT" />
    <section className="section-padding--bottom section-padding--top">
			<div className="container">
				<div className="row gutter-y-30">
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
						data-wow-delay="000ms">
						<div className="project-card-one">
							<div className="project-card-one__image">
								<img src="assets/images/projects/project-1-1.jpg" alt=""/>
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
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
						data-wow-delay="100ms">
						<div className="project-card-one">
							<div className="project-card-one__image">
								<img src="assets/images/projects/project-1-2.jpg" alt=""/>
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
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
						data-wow-delay="200ms">
						<div className="project-card-one">
							<div className="project-card-one__image">
								<img src="assets/images/projects/project-1-3.jpg" alt=""/>
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
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
						data-wow-delay="300ms">
						<div className="project-card-one">
							<div className="project-card-one__image">
								<img src="assets/images/projects/project-1-4.jpg" alt=""/>
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
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
						data-wow-delay="400ms">
						<div className="project-card-one">
							<div className="project-card-one__image">
								<img src="assets/images/projects/project-1-5.jpg" alt=""/>
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
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
						data-wow-delay="500ms">
						<div className="project-card-one">
							<div className="project-card-one__image">
								<img src="assets/images/projects/project-1-6.jpg" alt=""/>
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
				</div>
			</div>
		</section>
    </>
  )
}

export default Projects