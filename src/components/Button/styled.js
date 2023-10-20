import Styled from 'styled-components'

export const Button = Styled.button`
width: 342px;
height: 68px;
padding: 0px 113px;
justify-content: center;
align-items: center;
background: ${props => props.isBack ? `rgba(255, 255, 255, 0.14)` : `#D93856` };

color:#ffffff;
font-size: 17px;
font-style: normal;
font-weight: 900;
line-height: 2.5px;
text-align: center;
white-space: nowrap;
cursor:pointer;

&:hover{
    opacity:0.8;
}
&:active{
    opacity:0.5;

    
}`

