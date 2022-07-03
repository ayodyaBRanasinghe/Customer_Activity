import React from "react";
import styled from 'styled-components';

function Header()  {
    return (
        <MainContainer>
            <h1>explore <br/>
            what you like</h1>
            </MainContainer>
    );
    
}

export default Header; 

//MAIN CONTAINER
const MainContainer = styled.header`
background: url(../image/header-bg.jpg) no-repeat center/cover;
height: 25rem;

h1 {
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 900;
    position: absolute;
    top: 35%;
    left: 50%;
}
`;
