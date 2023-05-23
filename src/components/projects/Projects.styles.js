import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #CEB69F;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectH1 = styled.p`
    font-size: 2.5rem;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
