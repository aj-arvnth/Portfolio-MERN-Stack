import React from 'react'
import Header from '../../components/Header'
import About from './About';
import Intro from './Intro'
import Projects from './Projects';
import Experiences from './Experiences';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';


function Home() {
    return (
        <div>
            {/* <video autoPlay loop muted style={{
                position: "fixed",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src={vi} type="video/mp4" />
            </video> */}
            {/* <img src={bgk} alt='' style={{
                position: "fixed",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}/> */}
            <Header />
            <div className=' bg-primary px-40 sm:px-5'>
                <Intro />
                <About />
                <Experiences />
                <Projects />
                <Contact />
                <Footer />
                <LeftSider />
            </div>
        </div>
    );
}

export default Home
