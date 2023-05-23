import React from "react";
import {
    Column1,
    Column2,
    HeaderText,
    Img,
    ImgWrapper,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
} from "./InfoSection.styles";

const InfoSection = ({
    id,
    lightBg,
    imgStart,
    topLine,
    lightText,
    headLine,
    lightTextDesc,
    description,
    img,
    alt,
}) => {
    return (
        <InfoContainer $lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow $imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine $lightText={lightText}>{topLine}</TopLine>
                            <HeaderText $lightText={lightText}>
                                {headLine}
                            </HeaderText>
                            <Subtitle $darkText={lightTextDesc}>
                                {description}
                            </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
