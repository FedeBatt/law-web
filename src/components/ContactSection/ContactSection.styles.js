import styled from "styled-components";

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
    font-size: 45px;
    color: #101522;
`;

export const Form = styled.footer`
    margin-top: 16px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 16px;
    border: none;
    border-bottom: 1px solid #CEB69F;
    outline: none;
    color: #101522;
    margin: 12px 0;
    font-size: 14px;
    border-radius: 12px;

    &&::placeholder {
        color: #101522;
    }
`;

export const TextAreaInput = styled.textarea`
    width: 100%;
    padding: 16px;
    border: 1px solid #CEB69F;
    outline: none;
    color: #101522;
    margin: 12px 0;
    font-size: 14px;
    border-radius: 12px;

    &&::placeholder {
        color: #101522;
    }
`;

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
