import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
    border-radius: 25px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 380px;
    width: 320px;
    
    @media screen and (max-width: 768px) {
        height: 350px;
        margin: 0 12px;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
`;

export const CardImage = styled.img`
    position: relative;
    height: 150px;
    width: 150px;
    object-fit: cover;
`;

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #101522;
    border-radius: 25px 25px 0 25px;

    &&::before,
    &&::after {
        position: absolute;
        content: "";
        height: 40px;
        width: 40px;
        background-color: #101522;
        right: 0;
        bottom: -40px;
    }

    &&::after {
        border-radius: 0 25px 0 0;
        background-color: #fff;
    }
`;

export const CardContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    padding: 14px 16px;
`;
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #333;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
   
`;

export const Text = styled.p`
    font-size: 14px;
    color: #707070;
    margin-top: 12px;
    text-align: center;
    margin-bottom: 12px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const PlusIcon = styled(MdArrowForward)`
    font-size: 20px;
    color: #fff;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    color: #01bf71;
    border: 2px solid #01bf71;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    width: 45px;
    align-self: flex-end;
`
