import {
    CardContainer,
    CardContent,
    CardImage,
    ImageContainer,
    Overlay,
    StyledLink,
    Text,
    TextWrapper,
    Title,
} from "./Card.styles";

import familia from "../../assets/family.svg";
import suceciones from "../../assets/home.svg";
import damage from "../../assets/damage.svg";
import work from "../../assets/work.svg";
import oldPeople from "../../assets/oldPeople.svg";
import contract from "../../assets/contract.svg";

const Card = ({ title, description }) => {
    const renderLogo = () => {
        switch (title) {
            case "Derecho de Familia":
                return familia;
            case "Sucesiones":
                return suceciones;
            case "Daños y Perjuicios":
                return damage;
            case "Derecho Laboral":
                return work;
            case "Derecho Previsional":
                return oldPeople;
            case "Contratos":
                return contract;
            default:
                return null;
        }
    };

    return (
        <CardContainer>
            <ImageContainer>
                <Overlay />
                <CardImage src={renderLogo()} />
            </ImageContainer>
            <CardContent>
                <TextWrapper>
                    <Title>{title}</Title>
                    <Text>{description}</Text>
                </TextWrapper>
            </CardContent>
        </CardContainer>
    );
};

export default Card;
