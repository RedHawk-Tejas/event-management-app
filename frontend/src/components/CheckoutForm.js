import React from 'react'
import { styled } from 'styled-components'

const CheckoutForm = () => {
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
            <Label>Address</Label>
            <Input></Input>
          </Group>

          <Group>
            <Label>Pin Code</Label>
            <Input></Input>
          </Group>

        </Section>


    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  // border: 1px solid red;
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

export default CheckoutForm