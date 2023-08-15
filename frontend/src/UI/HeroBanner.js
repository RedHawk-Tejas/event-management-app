import React, { useState } from 'react';
import { styled, keyframes } from 'styled-components';
import { ChevronDown, ChevronsDown, MoveRight } from 'lucide-react';
import LoginModal from './LoginModal';

const HeroBanner = ({ setIsUserLoggedIn }) => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const openLogin = () => {
        setIsLoginOpen(true);
    };

    const closeLogin = () => {
        setIsLoginOpen(false);
    }

  return (
    <Wrapper>

      <MainSection>

        <Content>Discover a world of new events <br /> and elevate your moments with us</Content>

        <Content1>Join now</Content1>

        <Arrow>
            <BouncingChevronsDown size={36} color='#ac44d8'/>
            <BouncingChevronDown size={40} color='#DCB0EE'/>
        </Arrow>

        <LoginButton>
          <StyledButton onClick={openLogin}>Login</StyledButton>
          <StyledIcon><MoveRight /></StyledIcon>
        </LoginButton>

      </MainSection>

      { isLoginOpen && <LoginModal setIsUserLoggedIn={setIsUserLoggedIn} onClose={closeLogin}/> }

    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 95vh;
  display: flex;
  flex-direction: column;
  // border-bottom: 1px solid white;
`;


const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Content = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
 
  @media only screen and (max-width: 400px) {
    padding-right: 6px;
    padding-left: 6px;
    padding-top: 20px;
}
`;

const Content1 = styled.div`
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 2px;
`;

const LoginButton = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    border: 2px solid #ac44d8;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background: linear-gradient(to left, #ac44d8 50%, transparent 50%);
        background-size: 200% 100%;
        background-position: 100% 0;
        transition: background-position 0.3s ease-in-out;
    }
`;

const StyledButton = styled.div`
    flex: 0.9;
    text-align: center;
    background: transparent;
    transition: background 0.3s ease-in-out;
    font-weight: 600;
    font-size: 17px;
    text-transform: uppercase;
`;


const StyledIcon = styled.div`
    flex: 0.1;
    text-align: center;
    padding: 3px 10px;
    background: #ac44d8;
    border-radius: 0 20px 20px 0;
`;

const Arrow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const bounceAnimation = keyframes`
    0%, 100% {
        transform: translateY(18px);
    }
    50% {
        transform: translateY(-6px);
    }
`;

const BouncingChevronsDown = styled(ChevronsDown)`
    animation: ${bounceAnimation} 1s infinite;
`;

const BouncingChevronDown = styled(ChevronDown)`
    transition: color 0.3s ease-in-out;
    color: red;
`;


export default HeroBanner;
