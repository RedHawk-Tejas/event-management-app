import React, { useState } from "react";
import { styled } from "styled-components";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginCard = () => {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const toggleShowPassword = () => {
    setIsVisible(!isVisible);
  };

  const handleLogin = async() => {
    try {
        // const response = await axios.post("apiLink", {username, password});
        // const status = response.status;

        var status = 100;

        if(status === 200){
            toast("Login Successful.");
            navigate("/homepage");
        } else {
            toast("Check your crendials.");
        }
    } catch (error) {
        
    }
  }

//   const notify = () => toast("Wow so easy!");

  return (
    <LoginContainer>
      <Toggle>
        <Button active={1} onClick={handleToggle}>
          Login
        </Button>
        <Button active={0} onClick={handleToggle}>
          Sign Up
        </Button>
      </Toggle>

      <Form>
        {isLogin ? (
          <>
            <Input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>

            <PasswordInput>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type={!isVisible ? "password" : "text"}
                placeholder="Password"
                required
                value={password}
              ></Input>
              <span
                onClick={toggleShowPassword}
                style={{ marginRight: "10px" }}
              >
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
            <Input
              style={{ marginTop: "10px" }}
              type="text"
              placeholder="Name"
              required
            ></Input>
            <Input
              style={{ marginTop: "10px" }}
              type="email"
              placeholder="Email"
              required
            ></Input>
            <PasswordInput>
              <Input
                type={!isVisible ? "password" : "text"}
                placeholder="Password"
                required
              ></Input>
              <span
                onClick={toggleShowPassword}
                style={{ marginRight: "10px" }}
              >
                {isVisible ? (
                  <Eye size={22} color="#800080" />
                ) : (
                  <EyeOff size={22} color="#800080" />
                )}
              </span>
            </PasswordInput>
            <PasswordInput>
              <Input
                type={!isVisible ? "password" : "text"}
                placeholder="Confirm Password"
                required
              ></Input>
              <span
                onClick={toggleShowPassword}
                style={{ marginRight: "10px" }}
              >
                {isVisible ? (
                  <Eye size={22} color="#800080" />
                ) : (
                  <EyeOff size={22} color="#800080" />
                )}
              </span>
            </PasswordInput>
            <Submit>Sign Up</Submit>
          </>
        )}
      </Form>
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
`;

const Form = styled.div`
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
  // margin-bottom: 13px;
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
