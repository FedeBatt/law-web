import React, { useState } from "react";
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    IconInstagram,
    IconWhatsapp,
    IconLinkedin,
} from "./Footer.styles.js";

const Footer = () => {
    const [linkedinHovered, setLinkedinHovered] = useState(false);
    const [githubHovered, setGithubHovered] = useState(false);
    const [emailHovered, setEmailHovered] = useState(false);

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Mis redes
                            </FooterLinkTitle>
                            <FooterLink
                                onMouseOver={() => setLinkedinHovered(true)}
                                onMouseOut={() => setLinkedinHovered(false)}
                                to="https://www.linkedin.com/in/florencia-agustina-formini-832047211/"
                                target="_blank" 
                            >
                                <IconLinkedin $isHovered={linkedinHovered} />{" "}
                                Linkedin
                            </FooterLink>
                            <FooterLink
                                to="https://wa.link/bopulq"
                                onMouseOver={() => setGithubHovered(true)}
                                onMouseOut={() => setGithubHovered(false)}
                                target="_blank"
                            >
                                <IconWhatsapp $isGitHovered={githubHovered} />{" "}
                                WhatsApp
                            </FooterLink>
                            <FooterLink
                                to="https://www.instagram.com/abogada.formini/?igshid=MmJiY2I4NDBkZg%3D%3D"
                                onMouseOver={() => setGithubHovered(true)}
                                onMouseOut={() => setGithubHovered(false)}
                                target="_blank"
                            >
                                <IconInstagram $isGitHovered={githubHovered} />{" "}
                                Instagram
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Estudio Jurídico Formini</FooterLinkTitle>
                            <FooterLinkTitle>© 2023 All rights reserved.</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
