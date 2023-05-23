import React, { useState } from "react";
import Video from "../../assets/fondo.jpg";
import Button from "../Button/Button";

import {
    ArrowForward,
    ArrowRight,
    Content,
    CtaWrapper,
    Description,
    MainBg,
    MainContainer,
    Title,
    VideoBg
} from "./MainContent.styles";

const MainContent = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <MainContainer>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video}  />
            </MainBg>
            <Content>
                <Title>Bienvenidos a Estudio Jurídico Formini</Title>
                <Description>
                    Resolvemos tus problemas legales con compromiso y experiencia
                </Description>
                <CtaWrapper>
                    <Button
                        to="contact"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        $primary={true}
                        $dark={true}
                    >
                        Contactame {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </CtaWrapper>
            </Content>
        </MainContainer>
    );
};

export default MainContent;
