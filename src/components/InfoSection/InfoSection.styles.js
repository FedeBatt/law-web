import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background-color: ${({ $lightBg }) => ($lightBg ? "#CEB69F" : "#fff")};

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 760px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 375px) {
        transform: scale(0.85);
    }
`;

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({$imgStart}) => $imgStart ? 'row-reverse' : 'row'};
    
    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: ${({ $lightText }) => ($lightText ? "#fff" : "#A9927D")};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const HeaderText = styled.p`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #101522;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ $darkText }) => ($darkText ? "#fff" : "#010606")};
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
