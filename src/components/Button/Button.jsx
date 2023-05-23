import React from "react";
import { Button as ButtonStyle } from "./Button.styles";

const Button = ({ children, ...rest }) => <ButtonStyle {...rest} >{children}</ButtonStyle>;

export default Button;
