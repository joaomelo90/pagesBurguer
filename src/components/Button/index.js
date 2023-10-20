import React from 'react';
import { Button as StyledButton } from './styled';

function Button({children, ...props}){

    return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;