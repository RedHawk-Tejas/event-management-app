import React, { useState } from 'react';
import { styled } from 'styled-components';
import { toast } from "react-toastify";
import { handleSendMsg } from '../services/api/postMethods';
import { toastErrorOptions, toastSuccessOptions } from '../services/toast/config';
import Toastify from '../services/toast/Toastify';

const Contact = () => {

    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userMessage, setMessage] = useState('');

    const handleSendMsgClick = async() => {
      if(!userName || !userEmail || !userMessage){
        toast.error("Please fill all details", toastErrorOptions);
        return;
      }
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if(!emailRegex.test(userEmail)){
        toast.error("Email is not valid", toastErrorOptions);
        return;
      }
        const messageStatus = await handleSendMsg(userName, userEmail, userMessage);
        if(messageStatus === 200){
            toast.success("Message Send", toastSuccessOptions);
            setName("");
            setEmail("");
            setMessage("");
        } else {
            toast.error("Check Credentials", toastErrorOptions);
        }
    } 

  return (
    <Wrapper id="contact">
        <LeftContainer>
            <Logo>Fam<span style={{ color: '#AC44D8' }}>Fest.</span></Logo>
            <Content>&#169; 2023. India, All Rights Reserved.</Content>
        </LeftContainer>

        <RightContainer>
            <Title>Contact us</Title>
            <Message>
                <Row>

                <LeftSide>
                    <Input type='text' placeholder="Your Name" value={userName} onChange={ (e) => setName(e.target.value) }></Input>
                    <Input type='email' placeholder="Your Mail" value={userEmail} onChange={ (e) => setEmail(e.target.value) }></Input>
                </LeftSide>

                <RightSide>
                    <Textarea type='text' rows="4" cols="35" placeholder="Your Message" value={userMessage} onChange={ (e) => setMessage(e.target.value) }></Textarea>
                </RightSide>

                </Row>
                <Button onClick={ handleSendMsgClick }>Send Message</Button>
                <Toastify />
            </Message>
        </RightContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-around;
  color: white;
  border-top: 1px solid #c0c0c0;
  // background: #0A090B;
  padding: 60px 60px;

  @media only screen and (max-width: 850px){
    flex-direction: column;
  }
`;

const LeftContainer = styled.div``;

const Logo = styled.h2`
  font-size: 25px;

  @media only screen and (max-width: 850px){
    text-align: center;
  }
`;

const Content = styled.div``;

const RightContainer = styled.div``;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;

  @media only screen and (max-width: 850px){
    text-align: center;
    margin-top: 20px;
  }
  
`;

const Message = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 565px){
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px 20px; 
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  outline: none;
  border: 2px solid #ac44d8;
`;

const Textarea = styled.textarea`
  padding: 10px 20px; 
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  outline: none;
  border: 2px solid #ac44d8;
  resize: none;
`;

const RightSide = styled.div``;

const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid #963bbf;
  margin-top: 20px;
  margin-left: 15px;
  border-radius: 10px;
  background: #AC44D8;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease-out;
  &:hover{
    background: #963bbf;
  }
  &:active{
    transform: scale(0.95);
  }
`;

export default Contact