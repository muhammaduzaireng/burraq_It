import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main'

const InfrastructurePlan = () => {
	const [clicked, setClicked] = useState(0);
	const faqs = [
		{
			question: "Nulla eu nisi pellentesque, ultrices lorem eget, mattis dolo",
			answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
		},
		{
			question: "Praesent nec ante sed libero tempus rutrum",
			answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
		},
		{
			question: "Integer et mi in eros commodo bibendum",
			answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
		},
		{
			question: "Proin commodo turpis eu leo tempus varius",
			answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
		}
	]
	return (
		<>
			<Breadcumb Title="Infrastructure Plan" Breadcumb="SERVICES" />
			<section className="section-padding--bottom section-padding--top service-details--page">
				<div className="container">
					<div className="row ">
						<div className="col-lg-8">
							<div className="service-details__image">
								<img src="assets/images/services/service-d-1.jpg" alt="" />
							</div>
							<h3 className="service-details__title">Business & Finance</h3>
							<div className="service-details__content">
								<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
									dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt
									explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
									finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								<h4>When an unknown printer took a galley of type and scrambled it to make a type specimen
									book.</h4>
								<p>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new
									design printng and type setting Ipsum take a look at our round. When an unknown printer
									took a galley of type and scrambled it to make a type specimen book. It has survived not
									only five centuries, but also the leap into electronic typesetting.</p>
							</div>
							<div className="row gutter-y-30 service-details__box-wrapper">
								<div className="col-md-6 col-sm-12">
									<div className="service-details__box">
										<i className="service-details__box__icon icon-consulting"></i>
										<div className="service-details__box__content">

											<h3 className="service-details__box__title">
												<Link to="#">IT Consultant</Link>
											</h3>
											<p className="service-details__box__text">There are many of of lorem Ipsum, but the
												majori have suffered.</p>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="service-details__box">
										<i className="service-details__box__icon icon-chip"></i>
										<div className="service-details__box__content">
											<h3 className="service-details__box__title">
												<Link to="#">IT Specialist</Link>
											</h3>
											<p className="service-details__box__text">There are many of of lorem Ipsum, but the
												majori have suffered.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row gutter-y-30">
								<div className="col-md-6 col-sm-12">
									<img src="assets/images/services/service-d-2.jpg" className="service-details__sub-image"
										alt="" />
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="service-details__caption">
										<h3 className="service-details__caption__title">Our Benefits</h3>
										<p className="service-details__caption__text">Duis aute irure dolor in reprehenderit in
											voluptate velit esse cillum.</p>
										<ul className="service-details__caption__list">
											<li>
												<i className="fa fa-check-circle"></i>
												Praesent efficitur quam sit amet
											</li>
											<li>
												<i className="fa fa-check-circle"></i>
												Nunc cursus dolor id purus euismod
											</li>
											<li>
												<i className="fa fa-check-circle"></i>
												Quisque tincidunt eros ac place viverra
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="accrodion-grp service-details__accrodion"
										data-grp-name="service-details__accrodion-1">
										{faqs.map((item, index) => (
											<div className={`accrodion wow fadeInUp ${index === clicked && "active"}`} key={index} data-wow-delay="0ms">
												<div className="accrodion-title">
													<h4 onClick={() => setClicked(index)}>{item.question}<span
														className="accrodion-icon"></span>
													</h4>
												</div>
												{index === clicked &&
													<div className="accrodion-content">
														<div className="inner">
															<p>{item.answer}</p>
														</div>
													</div>}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 sidebar-column">
							<ServiceSidebar />
						</div>
					</div>
				</div>
			</section>
		</>)
}

export default InfrastructurePlan