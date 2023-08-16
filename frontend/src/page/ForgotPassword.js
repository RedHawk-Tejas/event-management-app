import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components'
import { handleGenerateOTP } from '../services/api/getMethod';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastErrorOptions } from '../services/toast/config';
import Toastify from '../services/toast/Toastify';

const ForgotPassword = () => {
    
    const navigate = useNavigate();

    const [timer, setTimer] = useState(120);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [otp, setOTP] = useState("");
    const [showOTPCard, setShowOTPCard] = useState(true);
    const [email, setEmail] = useState("");
    const [otpInputs, setOtpInputs] = useState(Array(6).fill(""));

    useEffect(() => {
        let interval;

        if (isTimerRunning && timer > 0) {
            interval = setInterval(() => {
              setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        }
    }, [isTimerRunning, timer])

    const handleOtpInputChange = async (index, value) => {
        const updatedInputs = [...otpInputs];
        updatedInputs[index] = value;
        setOtpInputs(updatedInputs);
    };

    const matchOTP = () => {
        const enteredOTP = otpInputs.join("").trim();
        if(enteredOTP.toString() === otp.toString()){
            navigate("/reset_password",  { state: { email } });
        } else {
            toast.error("Invalid OTP", toastErrorOptions);
        }
    }

    const formatTime = timeInSeconds => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleResendOTP = () => {
        setTimer(120);
        setIsTimerRunning(true);
        handleGetOTP();
    };

    const handleGetOTP = async() => {
        const fetchedOTP = await handleGenerateOTP(email);
        console.log("Fetched OTP:", fetchedOTP);
        setOTP(fetchedOTP);
        setIsTimerRunning(true);
        setShowOTPCard(false);
    }

  return (
    <Wrapper>
        <Card>
            { showOTPCard ? (
            <>
                <Header>enter email</Header>

                <InputBox>
                    <EmailInput 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder='abc@gmail.com'></EmailInput>
                </InputBox>

                <SendButton onClick={ handleGetOTP }>Send</SendButton>
            </>) : (
            <>
                <Header>enter otp</Header>

                <InputBox>
                    {otpInputs.map((input, index) => (
                        <Input
                            key={index}
                            maxLength={1}
                            value={input}
                            onChange={(e) => handleOtpInputChange(index, e.target.value)}
                        />
                    ))}
                </InputBox>

                <MessageBox>OTP sent to your registered email address.</MessageBox>

                <SendButton style={{marginTop: '18px'}} onClick={ matchOTP}>Submit</SendButton>

                <MessageBox>
                    <Text>OTP will expire in</Text>
                    {timer > 0 ? (
                        <TimerText>{formatTime(timer)}</TimerText>
                    ): (
                        <ExpiredText>OTP Expired</ExpiredText>
                    )}
                </MessageBox>

                <Resend onClick={ handleResendOTP } disabled={isTimerRunning && timer > 0}>
                    Resend
                </Resend>
            </>
            )}
        </Card>
        <Toastify />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: rgba(130, 82, 170, 1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    min-height: 100vh;
    width: 99.9%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ac44d8;
    height: 47vh;
    width: 45vh;
    background: #111;
    color: white;
    border-radius: 30px;
    box-shadow: 0 0 5px 2px #ac44d8;
`;

const Header = styled.div`
    text-transform: uppercase;
    font-size: 20px; 
    font-weight: 600;
    margin: 40px 0;
`;

const InputBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
`;

const EmailInput = styled.input`
    width: 35vh;
    padding: 9px 8px;
    background: #333;
    border: none;
    outline: none;
    color: #fff;
    font-size: 15px;
    text-align: center;
    border-radius: 5px;
`;

const SendButton = styled.button`
    padding: 7px 20px;
    border: 1px solid #8E44AD;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
    margin-top: 110px; 
    border-radius: 5px;

    &:hover{
        background: #8E44AD;
    }

    &:active{
        transform: scale(0.95);
    }
`;


const Input = styled.input`
    width: 25px;
    padding: 9px 8px;
    background: #333;
    border: none;
    outline: none;
    color: #fff;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
`;

const MessageBox = styled.div`
    font-size: 14px;
    padding-top: 20px;
    text-align: center;
`;

const Text = styled.div`
    font-size: 14px;
`;

const TimerText = styled.div`
    font-size: 16px;
    text-align: center;
    padding: 4px;
    color: #58D68D;
`;

const ExpiredText = styled.div`
    color: red;
    text-align: center;
    padding: 4px;
`;

const Resend = styled.button`
    font-size: 14px;
    color: #8E44AD;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    &:active{
        transform: scale(0.95);
    }
`;

export default ForgotPassword