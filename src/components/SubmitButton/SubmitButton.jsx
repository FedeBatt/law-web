import React from "react";
import { SubmitButton as SubmitButtonStyle } from "./SubmitButton.styles";

const SubmitButton = ({ children, ...rest }) => <SubmitButtonStyle {...rest} >{children}</SubmitButtonStyle>;

export default SubmitButton;
