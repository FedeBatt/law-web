import styled from "styled-components";

export const SubmitButton = styled.button`
    border-radius: 50px;
    background-color: ${({ $primary }) => ($primary ? "#101522" : "#010606")};
    white-space: nowrap;
    padding: ${({ $big }) => ($big ? "14px 48px" : "12px 30px")};
    color: ${({ $dark }) => ($dark ? "#010606" : "#fff")};
    font-size: ${({ $fontBig }) => ($fontBig ? "20px" : "16px")};
    outline: none;
    border: 1px solid #101522;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 100%;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: ${({ $primary }) => ($primary ? "#fff" : "#01BF71")};
        color: #000;
    }
`;
