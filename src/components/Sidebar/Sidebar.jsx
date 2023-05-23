import React from "react";
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about">
                        Estudio
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="skills">
                        Acerca de
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="projects">
                        Áreas
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="contact">
                        Contacto
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
