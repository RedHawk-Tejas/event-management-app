import React, { useEffect, useState } from 'react'
import Navbar from '../UI/Navbar';
import { styled } from 'styled-components';
import useRazorpay from 'react-razorpay';
import { useLocation } from 'react-router-dom';
import { getPaymentDetails, sendPaymentDetails } from '../services/api/postMethods';
import { toast } from 'react-toastify';
import { toastErrorOptions, toastSuccessOptions } from '../services/toast/config';

const Payment = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [tickets, setTickets] = useState(1);

    useEffect(() => {
        setIsUserLoggedIn(!!sessionStorage.getItem('USER_ID'));
    }, []);

    const [Razorpay] = useRazorpay();
    const location  = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('price');
    const eventId = queryParams.get('eventId');
    const total = price * tickets;

    console.log(price, eventId);

    const handlePayment = async() => {
        try {
            if(tickets === 0){
                toast.error("Cannot proceed with 0 tickets", toastErrorOptions);
                return;
            }
            const paymentDetails = await getPaymentDetails(eventId, tickets);

            const options = {
                key: paymentDetails.key,
                amount: paymentDetails.amount,
                currency: "INR",
                name: "FamFest",
                description: "Test Transaction",
                image: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/oiy9ukfmzzwo7c4cy0jg",
                order_id: paymentDetails.orderId,
                handler: function (response) {
                    handleSendPaymentDetails(response);
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: number, 
                },
                notes: {
                    description: "Tickets for Event",
                },
                theme: {
                    color: "#8E44AD",
                },
            }

            const razorpay = new Razorpay(options);
            razorpay.open();
            console.log(razorpay); 
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleSendPaymentDetails = async(response) => {
        try {
            console.log(response);
            const razorpay_payment_id = response.razorpay_payment_id;
            const razorpay_order_id = response.razorpay_order_id;
            const razorpay_signature = response.razorpay_signature;
            const timestamp = new Date();

            const status = await sendPaymentDetails(total, tickets, razorpay_payment_id, razorpay_order_id, razorpay_signature, timestamp);
            if(status === 200){
                toast.success("Payment Done", toastSuccessOptions);
                setName("");
                setEmail("");
                setNumber("");
            } else {
                toast.error("Payment Failed", toastErrorOptions);
            }
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <Wrapper>

        <NavSection>
            <Navbar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
        </NavSection>

        <MainSection>
            <Box>
                <Group>
                    <Label>Full Name</Label>
                    <Input 
                        type='text'
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    ></Input>
                </Group>

                <Group>
                    <Label>Email</Label>
                    <Input 
                        type='text'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    ></Input>
                </Group>

                <Group>
                    <Label>Contact Number</Label>
                    <Input 
                        type='text'
                        value={number}
                        onChange={ (e) => setNumber(e.target.value) }
                    ></Input>
                </Group>

                <Group>
                    <Label>Number of Tickets</Label>
                    <Input 
                        type='number'
                        value={tickets} 
                        onChange={ (e) => {
                            const newValue = parseInt(e.target.value);
                            if(!isNaN(newValue) && newValue >= 0){
                                setTickets(newValue);
                            }
                        }}
                    ></Input>
                </Group>

                <Section>
                    <Total>₹{total}</Total>
                    <Button onClick={ handlePayment }>pay</Button>
                </Section>
                
            </Box>
        </MainSection>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: #111;
    color: #fff;
    width: 100%;
    height: 100vh;
`;

const NavSection = styled.div`
  height: 9vh;
`;

const MainSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 1px solid white;
    margin-top: 100px;
    // width: 60vh;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    gap: 4px;
    padding: 7px 20px;
`;

const Label = styled.label`
    // margin-top: 5px;
    font-weight: 500;
    font-size: 15px;
`;

const Input = styled.input`
    padding: 10px 20px;
    border: 1px solid #ac44d8;
    border-radius: 10px;
    outline: none;
    width: 30vh;
    background: #333;
    color: #fff;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding-top: 20px;
`;

const Total = styled.p`
    font-weight: 600;
    font-size: 22px;
    text-decoration: underline dashed;
`;

const Button = styled.button`
    padding: 10px 30px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 500;
    background: #ac44d8;
    cursor: pointer;
    color: #fff;
    &:hover{
        background: #963bbf;
    }
    &:active{
        transform: scale(0.95);
    }
`;

export default Payment