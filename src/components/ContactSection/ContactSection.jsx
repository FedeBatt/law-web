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
    ModalImage,
    ModalMessage,
    ModalSubMessage,
    TextAreaInput,
} from "./ContactSection.styles";

import image from "../../assets/undraw-contact.svg";
import SubmitButton from "../SubmitButton/SubmitButton";
import Modal from "../Modal/Modal";

import mailSuccess from "../../assets/mailSuccess.svg";

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
            let response = await fetch(`${import.meta.env.VITE_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "Application/json;charset=utf-8" },
                body: JSON.stringify(formDetails),
            });
            if (response.status === 200) {
                setStatus({
                    success: true,
                    message: "Mensaje enviado con éxito.",
                    subMessage: "Nos pondremos en contacto contigo en breve.",
                    modalOpen: true
                });
            }
        } catch (err) {
            setStatus({
                success: false,
                message: "Ups! Algo salió mal, intentalo más tarde.",
            });
        } finally {
            setFormDetails(formInitialState);
            setIsFetching(false);
            setTimeout(() => {
                setStatus({
                    success: false,
                    message: "",
                    subMessage: "",
                    modalOpen: false
                });
            }, 4000);
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
                            placeholder="Nombre"
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
                            placeholder="Email"
                            name="email"
                            autoComplete="new-password"
                            value={formDetails.email}
                            onChange={(e) =>
                                onFormUpdate("email", e.target.value)
                            }
                            required
                        />
                        <Input
                            placeholder="Número de celular"
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
            <Modal isOpen={status.modalOpen}>
                <ModalImage src={mailSuccess} />
                <ModalMessage>Mensaje enviado con éxito.</ModalMessage>
                <ModalSubMessage>Nos pondremos en contacto contigo pronto.</ModalSubMessage>
            </Modal>
        </ContactContainer>
    );
};

export default ContactSection;
