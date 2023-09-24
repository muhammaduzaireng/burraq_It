import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../components/About/Main'
import BlogDetails from '../components/Blog/BlogDetails/Main'
import Blogs from '../components/Blog/Blogs/Main'
import Contact from '../components/Contact/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import Home2 from '../components/Home2/Main'
import Home3 from '../components/Home3/Main'
import Navbar from '../components/Navbar/Main'
import ProjectDetails from '../components/Project/ProjectDetails/Main'
import Projects from '../components/Project/Projects/Main'
import WhatWeDo from '../components/WhatWeDo/Projects/Main.js'
import CyberSecurity from '../components/Services/CyberSecurity/Main'
import InfrastructurePlan from '../components/Services/InfrastructurePlan/Main'
import ITConsultant from '../components/Services/ITConsultant/Main'
import ITManagement from '../components/Services/ITManagement/Main'
import QATesting from '../components/Services/QATesting/Main'
import Service1 from '../components/Services/Services1/Main'
import Service2 from '../components/Services/Services2/Main'
import Team from '../components/Team/Main'


const Routing = () => {
    const [homepage, sethomepage] = useState(false)
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/home-02" || location.pathname === "/home-03"){
        sethomepage(false)
      }else{
        sethomepage(true)
      }
    }, [location])
    
    return (
        <>
            {homepage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home-02" element={<Home2 />} />
                <Route path="/home-03" element={<Home3 />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/service-01" element={<Service1 />} />
                <Route path="/service-02" element={<Service2 />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/it-management" element={<ITManagement />} />
                <Route path="/qa-testing" element={<QATesting />} />
                <Route path="/infrastructure-plan" element={<InfrastructurePlan />} />
                <Route path="/it-consultant" element={<ITConsultant />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/whatwedo" element={<WhatWeDo />} />
                <Route path="/project-details" element={<ProjectDetails />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog-details" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Routing