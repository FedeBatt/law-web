import React, { useState } from "react";

import {
    ConctactTitle,
    ContactCol,
    ContactContainer,
    ContactWrapper,
    Form,
    Image,
    ImageCol,
    ImageContainer,
    Input,
    TextAreaInput,
} from "./ContactSection.styles";

import image from "../../assets/undraw-contact.svg";
import SubmitButton from "../SubmitButton/SubmitButton";

const ContactSection = ({ id }) => {
    const formInitialState = {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialState);
    const [status, setStatus] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (event) => {
        try {
            setIsFetching(true);
            event.preventDefault();
            let response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: { "Content-Type": "Application/json;charset=utf-8" },
                body: JSON.stringify(formDetails),
            });
            let result = response.json();
            setFormDetails(formInitialState);
            if (result.code === 200) {
                setStatus({
                    success: true,
                    message: "Mensaje enviado con éxito.",
                });
            } else {
                setStatus({
                    success: false,
                    message: "Ups! Algo salió mal, intentalo más tarde.",
                });
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <ContactContainer id={id}>
            <ContactWrapper>
                <ContactCol>
                    <ConctactTitle>Contactame</ConctactTitle>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            placeholder="nombre"
                            name="name"
                            autoComplete="new-asd"
                            value={formDetails.name}
                            onChange={(e) =>
                                onFormUpdate("name", e.target.value)
                            }
                            required
                        />
                        <Input
                            type="email"
                            placeholder="email"
                            name="email"
                            autoComplete="new-password"
                            value={formDetails.email}
                            onChange={(e) =>
                                onFormUpdate("email", e.target.value)
                            }
                            required
                        />
                        <Input
                            placeholder="número de celular"
                            name="phoneNumber"
                            autoComplete="new-passwo"
                            value={formDetails.phoneNumber}
                            onChange={(e) =>
                                onFormUpdate("phoneNumber", e.target.value)
                            }
                            required
                        />
                        <TextAreaInput
                            cols={30}
                            rows={10}
                            placeholder="Aquí deje su mensaje..."
                            value={formDetails.message}
                            onChange={(e) =>
                                onFormUpdate("message", e.target.value)
                            }
                            required
                        />
                        <SubmitButton $primary onClick={handleSubmit}>
                            {isFetching ? "Enviando..." : "Enviar"}
                        </SubmitButton>
                    </Form>
                </ContactCol>
                <ImageCol>
                    <ImageContainer>
                        <Image src={image} alt="image" />
                    </ImageContainer>
                </ImageCol>
            </ContactWrapper>
        </ContactContainer>
    );
};

export default ContactSection;
