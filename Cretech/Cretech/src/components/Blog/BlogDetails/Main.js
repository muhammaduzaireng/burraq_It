import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import BlogSidebar from '../BlogSidebar/Main'

const BlogDetails = () => {
  return (
    <>
    <Breadcumb Title="Blog Details" Breadcumb="BLOG" />
    <section className="section-padding--bottom section-padding--top">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="blog-details__image">
							<img src="assets/images/blog/blog-d-1-1.jpg" alt="" />
						</div>
						<div className="blog-card-one__meta">
							<div className="blog-card-one__date">
								<i className="fa fa-calendar-alt" aria-hidden="true"></i>
								July, 25, 2022
							</div>
							<Link to="/blog" className="blog-card-one__category">Designer</Link>
						</div>
						<h3 className="blog-card-one__title blog-details__title">Web design done Delightful
							Visualization Examples</h3>
						<div className="blog-details__content">
							<p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
								variations of passages of Lorem Ipsum available, but the majority have alteration in
								some injected or words which don't look even slightly believable. If you are going to
								use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden
								in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
								predefined chunks as necessary, making this the first true generator on the Internet. It
								uses a dictionary of over 200 Latin words, combined with a handful of model sentence
								structures, to generate Lorem Ipsum which looks reasonable. </p>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type simen book. It has
								survived not only five centuries, but also the leap into electronic typesetting.</p>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has
								been the industry's standard dummy text ever since the when an unknown printer took a
								galley of type and scrambled it to make a type specimen book. It has survived not only
								five centuries, but also the leap into unchanged.</p>
						</div>
						<div className="blog-details__meta">
							<div className="blog-details__tags">
								<span>Tags</span>
								<Link to="#">Development</Link>
								<Link to="#">Designing</Link>
							</div>
							<ul className="blog-details__share">
								<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
								<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
							</ul>
						</div>
						<div className="author-one">
							<div className="author-one__image">
								<img src="assets/images/blog/author-1-1.jpg" alt="" />
							</div>
							<div className="author-one__content">
								<h3 className="author-one__title">Christine Eve</h3>
								<p className="author-one__text">Lorem ipsum is simply free text by copytyping refreshing.
									Neque porro est qui dolorem ipsum quia quaed veritatis et quasi architecto.</p>
							</div>
						</div>
						<div className="comments-one">
							<h3 className="comments-one__title">2 Comments</h3>
							<div className="comments-one__item">
								<div className="comments-one__item__image">
									<img src="assets/images/blog/comment-1-1.png" alt="" />
								</div>
								<div className="comments-one__item__content">
									<h3 className="comments-one__item__title">Kevin Martin</h3>
									
									<p className="comments-one__item__text">It has survived not only five centuries, but
										also the leap into electronic typesetting simply fee text aunchanged. It was
										popularised in the sheets containing lorem ipsum is simply free text.</p>
									
									<Link to="#" className="thm-btn comments-one__item__btn"><span>Reply</span></Link>
									
								</div>
							</div>
							<div className="comments-one__item">
								<div className="comments-one__item__image">
									<img src="assets/images/blog/comment-1-2.png" alt="" />
								</div>
								<div className="comments-one__item__content">
									<h3 className="comments-one__item__title">Sarah Albert</h3>
									
									<p className="comments-one__item__text">It has survived not only five centuries, but
										also the leap into electronic typesetting simply fee text aunchanged. It was
										popularised in the sheets containing lorem ipsum is simply free text.</p>
									
									<Link to="#" className="thm-btn comments-one__item__btn"><span>Reply</span></Link>
									
								</div>
							</div>
						</div>
						<div className="comment-form">
							<h3 className="comment-form__title">Leave a Comment</h3>
							<form action="assets/inc/sendemail.php"
								className="contact-one__form contact-form-validated comment-form__form">
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
										<button className="thm-btn contact-one__btn" type="submit"><span>Submit
												comment</span></button>
									</div>
								</div>
							</form>

						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default BlogDetails