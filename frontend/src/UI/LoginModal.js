import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { handleLogin, handleSignup} from '../services/api/postMethods';
import { toast } from "react-toastify";
import { toastErrorOptions, toastSuccessOptions } from '../services/toast/config';
import Toastify from '../services/toast/Toastify'

const LoginModal = ({onClose, setIsUserLoggedIn}) => {

  const navigate = useNavigate();
  const modalRef = useRef();
  const [showLogin, setShowLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    const loginStatus = await handleLogin(email, password);
    if(loginStatus === 200){
      setIsUserLoggedIn(true);
      toast.success("Login Successful", toastSuccessOptions);
      onClose();
      navigate('/');
    } else {
      toast.error("Check Credentials", toastErrorOptions);
    }
  };

  const handleSignUpClick = async () => {
    const signupStatus = await handleSignup(name, email, password);
    if(signupStatus === 200){
      setIsUserLoggedIn(true);
      toast("Signup Successful");
    } else {
      toast("Invalid Details");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <Wrapper>
      <Card ref={modalRef}>
        { showLogin ? (
          <>
            <Title>login</Title>

            <Box>

              <Group>
                <Label>Email</Label>
                <Input value={email} onChange={ (e) => setEmail(e.target.value) }></Input>
              </Group>

              <Group>
                <Label>Password</Label>
                <Input value={password} onChange={ (e) => setPassword(e.target.value) }></Input>
              </Group>

            </Box>

            <Button>
              <StyledButton onClick={handleLoginClick}>login</StyledButton>
              <StyledIcon><ArrowRightCircle /></StyledIcon>
            </Button>

            <StyledLink onClick={() => setShowLogin(false)}>create account</StyledLink>
            <StyledLink to="forgot_password" style={{paddingBottom: '10px'}} >forgot password ?</StyledLink>
          </> ) : (
          <>
            <Title>signup</Title>

            <Box>

              <Group>
                <Label>Name</Label>
                <Input value={name} onChange={ (e) => setName(e.target.value) }></Input>
              </Group>
              
              <Group>
                <Label>Email</Label>
                <Input value={email} onChange={ (e) => setEmail(e.target.value) }></Input>
              </Group>

              <Group>
                <Label>Password</Label>
                <Input value={password} onChange={ (e) => setPassword(e.target.value) }></Input>
              </Group>

            </Box>

            <Button>
                <StyledButton onClick={ handleSignUpClick }>signup</StyledButton>
                <StyledIcon><ArrowRightCircle /></StyledIcon>
            </Button>
            <Toastify/>
          </>
        )}
      </Card>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(130, 82, 170, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  height: 100vh;
  width: 99.9%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -60px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ac44d8;
  height: fit-content;
  width: 45vh;
  background: #111;
  color: white;
  border-radius: 30px;
  box-shadow: 0 0 5px 2px #ac44d8;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 23px;
  margin: 20px 0;
  // border-bottom: 3px solid #ac44d8;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px;
  margin-top: 5px;
  width: 80%;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid black;
  outline: none;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 20px;
  padding: 7px 20px;
  border-radius: 100px;
  outline: none;
  border: none;
  cursor: pointer;
  // color :#ac44d8;
  transition: all .2s;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  &:hover{
    color: #fff;
    background-color: #ac44d8;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active{
    transform: scale(0.95);
  }
`;

const StyledButton = styled.div`
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
`;

const StyledIcon = styled.div`
  transition: transform .3s ease-in-out;
  &:hover{
    transform: translateX(5px);
  }
`;

const StyledLink = styled(Link)`
  color: #5DADE2;
  font-size: 14px;
  padding-bottom: 10px;

`;

export default LoginModal