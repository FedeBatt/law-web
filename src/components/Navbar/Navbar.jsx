import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavImage,
    NavLogo,
    NavMenu,
} from "./Navbar.styles";

import logo from "../../assets/logo-png.png";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState();
    const { innerWidth: width, innerHeight: height } = window;

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, [width]);
    // offset={width < 1448 ? 30 : -80}

    return (
        <Nav $scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <NavImage src={logo} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks
                            to="estudio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Estudio
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Acerca de
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to="areas"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Áreas
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={width < 1448 ? 30 : -80}
                            activeClass="active"
                            to="contact"
                        >
                            Contacto
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
