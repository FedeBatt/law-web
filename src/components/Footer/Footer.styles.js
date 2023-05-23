import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.div`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 200px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.p`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 4px;

    &&:hover {
        opacity: 0.4;
        transition: 0.3s ease-out;
    }
`;

export const IconLinkedin = styled(FaLinkedin)`
    font-size: 20px;
    margin-right: 6px;
    opacity: ${({ $isHovered }) => ($isHovered ? "#01bf71" : "#fff")};
    transition: ${({ $isHovered }) => $isHovered && "0.3s ease-out"};
`;

export const IconWhatsapp = styled(FaWhatsapp)`
    font-size: 20px;
    margin-right: 6px;
    opacity: ${({ $isGitHovered }) => ($isGitHovered ? "#01bf71" : "#fff")};
    transition: ${({ $isGitHovered }) => $isGitHovered && "0.3s ease-out"};
`;

export const IconInstagram = styled(FaInstagram)`
    font-size: 20px;
    margin-right: 6px;
    opacity: ${({ $isGitHovered }) => ($isGitHovered ? "#01bf71" : "#fff")};
    transition: ${({ $isGitHovered }) => $isGitHovered && "0.3s ease-out"};
`;
