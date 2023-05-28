import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";
import MainContent from "../components/MainContent/MainContent";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/projects/Projects";
import Sidebar from "../components/Sidebar/Sidebar";
import ContactSection from "../components/ContactSection/ContactSection";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <MainContent />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Projects id="areas" />
            <ContactSection id="contact" />
            <Footer id="footer" />
        </>
    );
};

export default Home;
