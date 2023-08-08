import React from 'react';
import { styled } from 'styled-components';

import LoginCard from '../components/LoginCard';

function LandingPage() {
  return (
    <HeroSection>
        <Navbar>
            <Logo>Fam<span style={{color: '#AC44D8'}}>Fest.</span></Logo>
        </Navbar>

        <Container>
            <InnnerContainer>
                <Content>
                    Unleash unforgettable experiences with India's premier event management website, connecting people to extraordinary moments.
                </Content>

                <LoginContainer>
                    <LoginCard/>
                </LoginContainer>

            </InnnerContainer>
        </Container>

    </HeroSection>
  )
}

const HeroSection = styled.section`
    background: #111;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    position: relative; 
`;

const Navbar = styled.nav`
    border-bottom: 1px solid #c0c0c0;
    padding: 20px 60px;

    @media only screen and (max-width: 420px){
        padding: 20px 30px;
    }
`;

const Logo = styled.h1`
    font-size: 30px;
    color: white;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10vw 60px;
    gap: 20px;

    @media only screen and (max-width: 600px){
        flex-direction: column;
        padding: 20px 60px;
    }
`;


const Content = styled.div`
    color: #DCB0EE;
    font-size: 44px; 
    text-align: start;
    font-weight: 500;

    @media only screen and (max-width: 420px){
        font-size: 32px;
        font-weight: 500;
    }
`;

const LoginContainer = styled.div``;


export default LandingPage