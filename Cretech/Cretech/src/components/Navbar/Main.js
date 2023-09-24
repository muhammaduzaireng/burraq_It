import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/burraq.svg'
import WOW from 'wowjs'

const Navbar = () => {
    const location = useLocation()
    const path = location.pathname
    const [sticky, setSticky] = useState(false)
    const [search, setSearch] = useState(false)
    const [mobile, setmobile] = useState(false)

    const [menu, setmenu] = useState({})
    const [home, setHome] = useState(false)
    const [header, setheader] = useState(false)
    const [pages, setpages] = useState(false)
    const [service, setservice] = useState(false)
    const [sectors, setsectors] = useState(false)
    const [project, setproject] = useState(false)
    const [blog, setblog] = useState(false)

    const activeMenu = () => {
        if (path === "/" ) {
            setmenu({ home: true })
        } else if (path === "/about" || path === "/team") {
            setmenu({ pages: true })
        } else if (path === "/" || path === "/service-02" || path === "qa-testing" || path === "/it-management" || path === "cyber-security" || path === "/it-consultant" || path === "/infrastructure-plan") {
            setmenu({ services: true })
        }
        else if (path === "/" || path === "/service-02" || path === "qa-testing" || path === "/it-management" || path === "cyber-security" || path === "/it-consultant" || path === "/infrastructure-plan") {
            setmenu({ sectors: true })
        } else if (path === "/projects" || path === "/project-details") {
            setmenu({ project: true })
        } else if (path === "/blog" || path === "/blog-details") {
            setmenu({ blog: true })
        } else if (path === "/contact") {
            setmenu({ contact: true })
        } else {
            setmenu({ home: true })
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    useEffect(() => {
        window.scroll(0, 0)
        new WOW.WOW({
            live: false
        }).init();
        activeMenu()
    }, [path])

    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 141 ? setSticky(true) : setSticky(false);
    }
    return (
        <>
            <div className="topbar">
                <div className="container-fluid">
                    <p className="topbar__text">LEADING FUTURE TECHNOLOGIES</p>
                    <ul className="topbar__info">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link to="mailto:info@burraq.net">info@burraq.net</Link>
                        </li>
                        <li>
                            <i className="fa fa-map-marker"></i>
                            ABU DHABI, UAE
                        </li>
                    </ul>
                    <ul className="topbar__social">
                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
            <nav className={`main-menu sticky-header ${sticky && "sticky-header--cloned sticky-fixed"}`}>
                <div className="container-fluid">
                    <div className="main-menu__logo">
                        <Link to="/">
                            <img src={Logo} width="150" height="90" alt="Buraq" />
                            
                        </Link>
                    </div>

                    <ul className="main-menu__list">
                        <li className={`menu-item-has-children ${menu.home && "current"}`}>
                            <Link to="/">Home</Link>
                            {/* <ul>
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
                            </ul> */}
                        </li>
                        <li className={`menu-item-has-children ${menu.project && "current"}`}>
                            <Link to="/projects">Projects</Link>
                            {/* <ul>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/project-details">Projects Details</Link></li>
                            </ul> */}
                        </li>
                        <li className={`menu-item-has-children ${menu.pages && "current"}`}>
                            <Link to="/whatwedo">What We DO</Link>
                            
                        </li>
                        <li className={`menu-item-has-children ${menu.services && "current"}`}>
                            <Link to="#">Solutions</Link>
                            <ul>
                                <li><Link to="/service-02">IT & NETWORKING</Link></li>
                                
                                
                                <li><Link to="/cyber-security">SURVEILLANCE & SECURITY</Link></li>
                                <li><Link to="/service-01">Audio & Video</Link></li>
                                
                                
                                <li><Link to="/qa-testing">CYBER & DATA SECURITY</Link></li>
                                <li><Link to="/infrastructure-plan">DATA CENTER</Link></li>
                                
                            </ul>
                        </li>
                        <li className={`menu-item-has-children ${menu.services && "current"}`}>
                            <Link to="/Sectors">Sectors</Link>
                            <ul>
                                <li><Link to="/service-01">Hospitality</Link></li>
                                <li><Link to="/service-02">Education</Link></li>
                                <li><Link to="/cyber-security">Finanace</Link></li>
                                <li><Link to="/it-management"></Link></li>
                                <li><Link to="/qa-testing">HealthCare</Link></li>
                                <li><Link to="/infrastructure-plan">Retails</Link></li>
                                <li><Link to="/it-consultant">Industrial</Link></li>
                                <li><Link to="/it-consultant">Defence</Link></li>
                            </ul>
                        </li>
                        
                        <li className={`menu-item-has-children ${menu.blog && "current"}`}>
                            <Link to="/blog">Blog</Link>
                            <ul>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children ${menu.contact && "current"}`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="main-menu__right">
                        <Link to="#" className="mobile-nav__toggler" onClick={() => setmobile(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Link>
                        <Link to="#" onClick={() => setSearch(true)} className="search-toggler">
                            <i className="icon-magnifying-glass"></i>
                        </Link>
                        <Link to="tel:+9725516060" className="main-menu__cta">
                            <i className="fa fa-phone-alt"></i>
                            <span className="main-menu__cta__text">
                                <b>+97 (2) 5516060</b>
                                Call Anytime
                            </span>
                        </Link>
                    </div>

                </div>
            </nav>
            <div className={`search-popup ${search && "active"}`}>
                <div className="search-popup__overlay search-toggler" onClick={() => setSearch(false)}></div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <span><i className="icon-magnifying-glass"></i></span>
                        </button>
                    </form>
                </div>
            </div>
            <div className={`mobile-nav__wrapper ${mobile && "expanded"}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
                <div className="mobile-nav__content">
                    <Link to="#" onClick={() => setmobile(false)} className="mobile-nav__close mobile-nav__toggler">
                        <span></span>
                        <span></span>
                    </Link>

                    <div className="logo-box">
                        <Link to="/" aria-label="logo image"><img src="assets/images/logo-light.png" width="98" height="33" alt="Cretech" /></Link>
                    </div>
                    <div className="mobile-nav__container"><ul className="mobile-menu__list">
                        <li className={`menu-item-has-children ${menu.home ? "current" : ""}`}>
                            <Link to="/" className={home ?"expanded": ""}>Home</Link>
                            {home && 
                            <ul style={{display:"block"}}>
                                {/* <li><Link to="/">Home One</Link></li> */}
                                {/* <li><Link to="/home-02">Home Two</Link></li>
                                <li><Link to="/home-03">Home Three</Link></li> */}
                                {/* <li className="menu-item-has-children current"><Link to="/" className={header ?"expanded": ""}>Header Styles<button aria-label="dropdown toggler" onClick={()=>setheader(!header)} className={header ?"expanded": ""}><i className="fa fa-angle-down"></i></button></Link>
                                    {header &&
                                    <ul style={{display:"block"}}>
                                        <li><Link to="/">Header One</Link></li>
                                        <li><Link to="/home-02">Header Two</Link></li>
                                        <li><Link to="/home-03">Header Three</Link></li>
                                    </ul>}
                                </li> */}
                            </ul>}
                        </li>
                        <li className={`menu-item-has-children ${menu.project ? "current" : ""}`}>
                            <Link to="#" className={project ?"expanded": ""}>Projects<button aria-label="dropdown toggler" onClick={()=>setproject(!project)} className={project ?"expanded": ""}><i className="fa fa-angle-down"></i></button></Link>
                            {project &&
                            <ul style={{display:"block"}}>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/project-details">Projects Details</Link></li>
                            </ul>}
                        </li>
                        <li className={`menu-item-has-children ${menu.project ? "current" : ""}`}>
                            <Link to="/whatwedo" className={project ?"expanded": ""}>What We Do</Link>
                            
                        </li>
                        <li className={`menu-item-has-children ${menu.services ? "current" : ""}`}>
                            <Link to="#" className={service ?"expanded": ""}>Solutions<button aria-label="dropdown toggler" onClick={()=>setservice(!service)} className={service ?"expanded": ""}><i className="fa fa-angle-down"></i></button></Link>
                            {service &&
                            <ul style={{display:"block"}}>
                                
                                <li><Link to="/service-02">IT & NETWORKING</Link></li>
                                
                                
                                <li><Link to="/cyber-security">SURVEILLANCE & SECURITY</Link></li>
                                <li><Link to="/service-01">Audio & Video</Link></li>
                                
                                
                                <li><Link to="/qa-testing">CYBER & DATA SECURITY</Link></li>
                                <li><Link to="/infrastructure-plan">DATA CENTER</Link></li>
                                
                            
                            </ul>}
                        </li>
                        <li className={`menu-item-has-children ${menu.sectors ? "current" : ""}`}>
                            <Link to="#" className={sectors ?"expanded": ""}>Sectors<button aria-label="dropdown toggler" onClick={()=>setsectors(!sectors)} className={sectors ?"expanded": ""}><i className="fa fa-angle-down"></i></button></Link>
                            {sectors &&
                            <ul style={{display:"block"}}>
                                <li><Link to="/service-01">Hospitality</Link></li>
                                <li><Link to="/service-02">Education</Link></li>
                                <li><Link to="/cyber-security">Finanace</Link></li>
                                <li><Link to="/it-management"></Link></li>
                                <li><Link to="/qa-testing">HealthCare</Link></li>
                                <li><Link to="/infrastructure-plan">Retails</Link></li>
                                <li><Link to="/it-consultant">Industrial</Link></li>
                                <li><Link to="/it-consultant">Defence</Link></li>
                            </ul>}
                        </li>
                        {/* <li className={`menu-item-has-children ${menu.pages ? "current" : ""}`}>
                            <Link to="#" className={pages ?"expanded": ""}>Pages<button aria-label="dropdown toggler" onClick={()=>setpages(!pages)} className={pages ?"expanded": ""}><i className="fa fa-angle-down"></i></button></Link>
                            {pages &&
                            <ul style={{display:"block"}}>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/team">Our Team</Link></li>
                            </ul>}
                        </li> */}
                        
                        
                        <li className={`menu-item-has-children ${menu.blog ? "current" : ""}`}>
                            <Link to="#" className={blog ?"expanded": ""}>Blog<button aria-label="dropdown toggler" onClick={()=>setblog(!blog)} className={blog ?"expanded": ""}><i className="fa fa-angle-down"></i></button></Link>
                            {blog &&
                            <ul style={{display:"block"}}>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                            </ul>}
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul></div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-phone"></i>
                            <a href="tel:+9725516060">+ 97 (2) 5516060</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:info@burraq.net">info@burraq.net</a>
                        </li>
                        <li>
                            <i className="fa fa-map-marker-alt"></i>
                            Abu Dhabi, UAE
                        </li>
                    </ul>
                    <ul className="mobile-nav__social">
                        <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-pinterest-p"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar