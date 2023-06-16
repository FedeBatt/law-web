import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const ContactContainer = styled.div`
    display: flex;
    height: 100vh;
    @media screen and (max-width: 375px) {
        transform: scale(0.85);
    }
`;

export const ContactWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 760px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    padding: 100px 0;

    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        align-items: center;
        margin-top: 42px;
    }
`;

export const ContactCol = styled.div`
    width: 50%;
    margin-right: 5%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 24px;
        margin-right: 0;
    }
`;

export const ImageCol = styled.div`
    width: 45%;

    @media screen and (max-width: 768px) {
        width: 100%;
        display: none;
    }
`;

export const ConctactTitle = styled.p`
    font-size: 42px;
    font-weight: bold;
    color: #101522;
    margin-bottom: 12px;
`;


export const ConctactDescription = styled.p`
    font-size: 28px;
    color: #A9927D;
    margin-bottom: 24px;
`;


export const SocialMediaContainer = styled.button`
    align-items: center;
    border: 1px solid #101522;
    border-radius: 8px;
    background-color: #101522;      
    display: flex;
    padding: 16px 24px;
    margin: 12px 0; 
    width: 55%;
    transition: all 0.3s ease-in-out;
    color: #fff;      
    // justify-content: center;

    &:hover {
        cursor: pointer;
        color: #101522;      
        background-color: #CEB69F;  
        border: 1px solid #CEB69F;
    }
`

export const SocialMediaTitle = styled.p`
    font-size: 22px;
`

export const ImageContainer = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    padding-top: 54px;

    @media screen and (max-width: 768px) {
        margin: 0 0 10px 0;
    }
`;

export const IconLinkedin = styled(FaLinkedin)`
    font-size: 32px;
    margin-right: 12px;
    opacity: ${({ $isHovered }) => ($isHovered ? "#01bf71" : "#fff")};
    transition: ${({ $isHovered }) => $isHovered && "0.3s ease-out"};
`;

export const IconWhatsapp = styled(FaWhatsapp)`
    font-size: 32px;
    margin-right: 12px; 
    opacity: ${({ $isGitHovered }) => ($isGitHovered ? "#01bf71" : "#fff")};
    transition: ${({ $isGitHovered }) => $isGitHovered && "0.3s ease-out"};
`;

export const IconInstagram = styled(FaInstagram)`
    font-size: 32px;
    margin-right: 12px; 
    opacity: ${({ $isGitHovered }) => ($isGitHovered ? "#01bf71" : "#fff")};
    transition: ${({ $isGitHovered }) => $isGitHovered && "0.3s ease-out"};
`;

export const IconGmail = styled(FaEnvelope)`
    font-size: 32px;
    margin-right: 12px; 
    opacity: ${({ $isGitHovered }) => ($isGitHovered ? "#01bf71" : "#fff")};
    transition: ${({ $isGitHovered }) => $isGitHovered && "0.3s ease-out"};
`;
