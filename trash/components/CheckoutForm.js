import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import useRazorpay from "react-razorpay";
import axios from 'axios';


const CheckoutForm = () => {

  const [Razorpay] = useRazorpay();
  const location  = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get('price');
  const eventId = queryParams.get('eventId');
  const userId = localStorage.getItem('id');

  console.log(userId, eventId);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [tickets, setTickets] = useState(1);

  const total = price * tickets;


  const placeOrder = async() => {

    try {

      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:9080/api/payment/Transaction', {userId, eventId}, {
        headers: {
          Authorization: `Bearer ${token}`,
      },
      })


      // const successHandler = () => {
      //   console.log(response);
      // };
  
      const options = {
        key: response.data.key,
        amount: response.data.amount,
        currency: "INR",
        name: "FamFest",
        description: "Test Transaction",
        image: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/oiy9ukfmzzwo7c4cy0jg",
        order_id: response.data.orderId,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "Tejas Kadam",
          email: "tejaskadam@gmail.com",
          contact: "9876543210", 
        },
        notes: {
          address: "FamFest Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }
  
      const razorpay = new Razorpay(options);
      razorpay.open();
      console.log(razorpay); 
      
    } catch (error) {
      console.log(error);
    }

  }

  

  return (
    <Wrapper>

        <Title>Checkout Form</Title>

        <Section>

          <Group>
            <Label>Full Name</Label>
            <Input></Input>
          </Group>

          <Group>
            <Label>Email</Label>
            <Input></Input>
          </Group>

          <Group>
            <Label>Mobile Number</Label>
            <Input></Input>
          </Group>

          <Group>
            <Label>Number of Tickets</Label>
            <Input value={tickets} onChange={ (e) => setTickets(e.target.value) }></Input>
          </Group>

        </Section>

        <Order>
          <Total>₹{total}</Total>
          <PayButton onClick={ placeOrder }>Pay</PayButton>
        </Order>


    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 70px; 30px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px 12px;
  width: 40vh;
  color: white;
  background: #111;
  outline: none;
  border: 1px solid #ac44d8;
  border-radius: 10px;
`;

const Order = styled.div`
  // border: 1px solid white;
  width: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Total = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-decoration: underline dashed;
  color: white;
`;

const PayButton = styled.button`
  padding: 8px 30px;
  cursor: pointer;
  background: #111;
  color: #ac44d8;
  border: 1px solid #ac44d8;
  border-radius: 10px;
`;

export default CheckoutForm