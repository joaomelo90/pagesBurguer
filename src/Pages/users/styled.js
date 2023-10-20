import styled from 'styled-components';




export const Container = styled.div`
background-color:#0A0A10;

display: flex;
flex-direction:column;
align-items: center;
gap:25px;

height:100%;
min-height:100vh;
`;

export const Image = styled.img`
margin-top:30px;

`;

export const User = styled.li`
display:flex;
justify-content:space-around;
align-items:center;
margin-top:20px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
width: 342px;
height:58px;

outline:none;
border:none;

p  { 
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
color: #FFF;
}
.name{
    font-weight: 700;
}
button{
    background:none;
    border:none;
    cursor:pointer;
}
`;

