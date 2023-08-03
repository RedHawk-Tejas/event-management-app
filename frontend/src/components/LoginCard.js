import React, { useState } from "react";
import { styled } from "styled-components";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginCard = () => {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [active, setActive] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setActive(!active)
  };

  const toggleShowPassword = () => {
    setIsVisible(!isVisible);
  };

  const handleLogin = async() => {
    try {
        const response = await axios.post("http://localhost:9080/api/authentication/login", {email, password});
        console.log(response.data);

        const token = response.data.token;
        const user_id = response.data.id;
        localStorage.setItem('id', user_id);
        localStorage.setItem('token', token);

        const status = response.status;
        if(status === 200){
            navigate('/famfest/home');
        } 
    } catch (error) {
      const status = error.response.status;
      console.log(status);
      if(status === 403){
        toast("Invalid Credentials")
      }
    }
  }

  const handleSignup = async () => {
    try {
      if (!name || !email || !password || !confirmPass) {
        toast("Please fill all fields");
        return;
      }
  
      if (password !== confirmPass) {
        toast("Passwords do not match");
        return; // Return early if passwords don't match
      }
      
      const role = "user";
      const response = await axios.post("http://localhost:9080/api/authentication/register", {
        name,
        email,
        password,
        role,
      });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
      console.log(response);
      const status = response.status;
      if (status === 200) {
        toast("Registration Successful! Please, Login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <LoginContainer>
      <Toggle>
        <Button active={active} onClick={handleToggle}>
          Login
        </Button>
        <Button active={!active} onClick={handleToggle}>
          Sign Up
        </Button>
      </Toggle>

      <FormContainer>
        {isLogin ? (
          <>
            <Input value={email} onChange={(e) => setEmail(e.target.value)}
              type="text" placeholder="Email" required 
            ></Input>

            <PasswordInput>
              <Input value={password} onChange={(e) => setPassword(e.target.value)}
                type={!isVisible ? "password" : "text"} placeholder="Password" required 
              ></Input>
              <span onClick={toggleShowPassword} style={{ marginRight: "10px" }}>
                {isVisible ? (
                  <Eye size={22} color="#800080" />
                ) : (
                  <EyeOff size={22} color="#800080" />
                )}
              </span>
            </PasswordInput>

            <Submit onClick={handleLogin}>Login</Submit>
            <ToastContainer />
          </>
        ) : (
          <>
            <Input value={name} onChange={ (e) => setName(e.target.value) } 
              type="text" placeholder="Name" style={{ marginTop: "10px" }}
            ></Input>

            <Input value={email} onChange={ (e) => setEmail(e.target.value) } 
              type="email" placeholder="Email" style={{ marginTop: "10px" }} 
            ></Input>

            <PasswordInput>
              <Input value={password} onChange={ (e) => setPassword(e.target.value) } 
                type={!isVisible ? "password" : "text"} placeholder="Password" required
              ></Input>
                <span onClick={toggleShowPassword} style={{ marginRight: "10px" }}>
                {isVisible ? (
                  <Eye size={22} color="#800080" />
                ) : (
                  <EyeOff size={22} color="#800080" />
                )}
              </span>
            </PasswordInput>

            <PasswordInput>
              <Input value={confirmPass} onChange={ (e) => setConfirmPass(e.target.value) } 
                type="text" placeholder="Confirm Password" required></Input>
            </PasswordInput>
            <Submit onClick={handleSignup}>Sign Up</Submit>
            <ToastContainer />
          </>
        )}
      </FormContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  border: 1px solid #800080;
`;

const Toggle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  flex: 0 0 50%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border: none;
  outline: none;
  padding: 15px;
  cursor: pointer;

  background: ${({ active }) => (active ? "#fff" : "#444")};
  color: ${({ active }) => (active ? "#BB37CA" : "black")};
  border-bottom: ${({ active }) => (active ? "1px solid #c0c0c0" : "black")};

  &:hover {
    background: #BB37CA;
    color: #fff;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px 20px;
  width: 80%;
  border-radius: 10px;
  outline: none;
  border: none;
`;

const Submit = styled.button`
  background: #720e9e;
  color: white;
  font-weight: 600;
  padding: 10px 30px;
  border: 2px solid #bb37ca;
  outline: none;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    font-size: 14px;
    background: #bb37ca;
  }
`;

const PasswordInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 90%;
  border-radius: 10px;
  margin-top: 10px;
`;

export default LoginCard;
