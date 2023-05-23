import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const SlideContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    padding: 40px 0;
`;

export const SlideContent = styled(Carousel)`
    && > div {
        & > button {
            background-color: transparent;
            box-shadow: none;
            color: #fff;
        }

        & > button:hover {
            box-shadow: none;
            background-color: transparent;
        }

        & > button:enabled {
            box-shadow: none;
            background-color: transparent;
        }

        & > button:disabled {
            color: transparent;
            box-shadow: none;
            background-color: transparent;
        }
    }

    && > div:nth-child(2) {
        & > button {
            display: none;
        }
    }
`;
