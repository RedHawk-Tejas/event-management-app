import React from 'react'
import { styled } from 'styled-components';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

  // const notify = () => toast("Message Send!");

  return (
    <Wrapper>
        
      <LeftContainer>

        <Logo>Fam<span style={{ color: '#AC44D8' }}>Fest.</span></Logo>

        <Content>&#169; 2023. India, All Rights Reserved.</Content>

      </LeftContainer>

      <RightContainer>

        <Title>Contact us</Title>

        <Message>

        <Row>

        <LeftSide>
          <Input placeholder="Your Name"></Input>
          <Input placeholder="Your Mail"></Input>
        </LeftSide>

        <RightSide>
          <Textarea rows="4" cols="35" placeholder="Your Message"></Textarea>
        </RightSide>

        </Row>

        <Button>Send Message</Button>
        {/* <ToastContainer /> */}

        </Message>

      </RightContainer>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  // width: 98vw;
  display: flex;
  align-items: center; 
  justify-content: space-around;
  color: white;
  border-top: 1px solid #c0c0c0;
  background: #0A090B;
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

const Message = styled.div`
`;

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
  // background: #222;
`;

const Textarea = styled.textarea`
  padding: 10px 20px; 
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  outline: none;
  border: 2px solid #ac44d8;
  // background: #222;
`;

const RightSide = styled.div``;

const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid #ac44d8;
  margin-top: 20px;
  margin-left: 15px;
  border-radius: 10px;
  background: #AC44D8;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease-out;
  &:hover{
    font-size: 15px;
  }
`;

export default Footer