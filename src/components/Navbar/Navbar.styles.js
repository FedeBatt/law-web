import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.div`
    transition: 0.4s all ease;
    background-color: ${({ $scrollNav }) =>
        $scrollNav ? "#101522" : "transparent"};
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const NavImage = styled.img`
    max-width: 90px;
    max-height: 90px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        color: #fff;
        right: 0;
        transform: translate(-100%, 6%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
        transition: all 0.2s ease-in-out;
    }

    &.active {
        border-bottom: 3px solid #fff;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
