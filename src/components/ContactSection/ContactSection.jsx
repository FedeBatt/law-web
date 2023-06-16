import React, { useState } from "react";

import {
    ConctactDescription,
    ConctactTitle,
    ContactCol,
    ContactContainer,
    ContactWrapper,
    IconGmail,
    IconInstagram,
    IconLinkedin,
    IconWhatsapp,
    Image,
    ImageCol,
    ImageContainer,
    SocialMediaContainer,
    SocialMediaTitle,
} from "./ContactSection.styles";

import image from "../../assets/undraw-contact.svg";

export const SOCIAL_MEDIA = [
    {
        title: 'Gmail',
        icon: <IconGmail />,
        url: `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${import.meta.env.VITE_EMAIL_USER}&su=${encodeURIComponent('Consulta juridica a traves de la web')}`,
    },
    {
        title: 'Whatsapp',
        icon: <IconWhatsapp />,
        url: 'https://wa.link/bopulq'
    },
    {
        title: 'Linkedin',
        icon: <IconLinkedin />,
        url: 'https://www.linkedin.com/in/florencia-agustina-formini-832047211/',
    },
    {
        title: 'Instagram',
        icon: <IconInstagram />,
        url: 'https://www.instagram.com/abogada.formini/?igshid=MmJiY2I4NDBkZg%3D%3D'
    },
    
]

const ContactSection = ({ id }) => {

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <ContactContainer id={id}>
            <ContactWrapper>
                <ContactCol>
                    <ConctactTitle>Hacé valer tus derechos</ConctactTitle>
                    <ConctactDescription>
                        Contactame a través de mis redes
                    </ConctactDescription>
                    {SOCIAL_MEDIA.map(item =>
                        <SocialMediaContainer onClick={() => handleButtonClick(item.url)} key={item.title}>
                            {item.icon}
                            <SocialMediaTitle>{item.title}</SocialMediaTitle>
                        </SocialMediaContainer>
                    )}
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
