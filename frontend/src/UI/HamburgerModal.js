import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { toast } from "react-toastify";
import { toastErrorOptions } from '../services/toast/config';

const HamburgerModal = ({isOpen}) => {

    const navigate = useNavigate();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        setIsUserLoggedIn(!!sessionStorage.getItem('USER_ID'));
    }, []);

    const toggleDropDown = () => {
        if(!isUserLoggedIn){
            toast.error("Please Login", toastErrorOptions);
        }else{
            setIsDropDownOpen(!isDropDownOpen);
        }
    };

    const toCreateEvent = () => {
        navigate('/organize_event');
    };
  
    const toYourEvent = () => {
        navigate('/your_events');
    };

    const toAccount = () => {
        navigate('/account');
    }

    const handleLogout = () => {
        sessionStorage.removeItem('TOKEN');
        sessionStorage.removeItem('USER_ID');
        setIsUserLoggedIn(false);
        navigate('/');
    }

  return (
    <Wrapper isOpen={isOpen}>
        <Container>

            <CloseButton>
                <X />
            </CloseButton>

            <Links>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink>About</StyledLink>
                <StyledLink>Contact</StyledLink>

                <DropDown onClick={ toggleDropDown }>
                    Account
                    {isUserLoggedIn && (
                    <DropDownContent isOpen={isDropDownOpen}>
                        <Text onClick={ toAccount }>My Account</Text>
                        <Text onClick={ toYourEvent }>Your Events</Text>
                        <Text onClick={ toCreateEvent }>Create Event</Text>
                        <Text onClick={ handleLogout }>Log Out</Text>
                    </DropDownContent>
                    )}
                </DropDown>
            </Links>

        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Container = styled.div`
    background: rgba(130, 82, 170, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    position: fixed;
    top: -60vh;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    display: flex;
    flex-direction: column;
`;

const CloseButton = styled.div`
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    align-items: center;
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-top: 20px;
`;

const StyledLink = styled(Link)`
    padding: 9px 0;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: #fff;
    background: rgba(130, 82, 170, 0.2);
    &:hover{
        background: rgba(130, 82, 170, 0.3); 
    }
`;

const DropDown = styled.div`
    text-decoration: none;
    color: #fff;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    padding: 9px 0;

    display:flex;
    align-items: center;
    justify-content: center;
`;

const DropDownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 34px;
  right: 0;
  left: -130px;
  background-color: #fff;
  color: red;
  width: 50vh;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0px;
  z-index: 111;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const Text = styled.p`
  color: #111;
  padding: 6px 0;
  border-bottom: 1px solid gray;
  &:hover{
    background: #e0e0e0;
  }
`;

export default HamburgerModal