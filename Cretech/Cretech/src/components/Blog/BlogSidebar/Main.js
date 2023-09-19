import React from 'react'
import { Link } from 'react-router-dom'

const BlogSidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__item sidebar__item--search">
                <form action="#" className="sidebar__search">
                    <label for="search" className="sr-only">search here</label>
                    <input type="text" placeholder="Search Here" />
                    <button type="submit" aria-label="search submit" className="thm-btn">
                        <span><i className="icon-magnifying-glass"></i></span>
                    </button>
                </form>
            </div>
            <div className="sidebar__item sidebar__item--posts">
                <h3 className="sidebar__title">Latest Posts</h3>
                <ul className="sidebar__posts">
                    <li>
                        <div className="sidebar__posts__image">
                            <img src="assets/images/blog/blog-s-1-1.png" alt="" />
                        </div>
                        <div className="sidebar__posts__content">
                            <div className="sidebar__posts__date">
                                <i className="fa fa-comments"></i>
                                2 Comments
                            </div>
                            <h3 className="sidebar__posts__title"><Link to="/blog-details">Tech
                                experiences that
                                connect us</Link></h3>
                        </div>
                    </li>
                    <li>
                        <div className="sidebar__posts__image">
                            <img src="assets/images/blog/blog-s-1-2.png" alt="" />
                        </div>
                        <div className="sidebar__posts__content">
                            <div className="sidebar__posts__date">
                                <i className="fa fa-comments"></i>
                                2 Comments
                            </div>
                            <h3 className="sidebar__posts__title"><Link to="/blog-details">Tech
                                experiences that
                                connect us</Link></h3>
                        </div>
                    </li>
                    <li>
                        <div className="sidebar__posts__image">
                            <img src="assets/images/blog/blog-s-1-3.png" alt="" />
                        </div>
                        <div className="sidebar__posts__content">
                            <div className="sidebar__posts__date">
                                <i className="fa fa-comments"></i>
                                2 Comments
                            </div>
                            <h3 className="sidebar__posts__title"><Link to="/blog-details">Tech
                                experiences that
                                connect us</Link></h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="sidebar__item sidebar__item--category">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category">
                    <li>
                        <Link to="#">Web Development</Link>
                    </li>
                    <li>
                        <Link to="#">Digital Marketing</Link>
                    </li>
                    <li>
                        <Link to="#">Technology</Link>
                    </li>
                    <li>
                        <Link to="#">Data Analysis</Link>
                    </li>
                    <li>
                        <Link to="#">Cyber Security</Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar__item sidebar__item--tags">
                <h3 className="sidebar__title">Tags</h3>
                <div className="sidebar__tags">
                    <Link to="#">Development</Link>
                    <Link to="#">Designing</Link>
                    <Link to="#">Business</Link>
                    <Link to="#">Marketing</Link>
                    <Link to="#">technology</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar