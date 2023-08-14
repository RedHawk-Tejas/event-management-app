import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../../frontend/src/components/Navbar';
import CheckoutForm from '../../frontend/src/components/CheckoutForm';

const Checkout = () => {
  return (
    <Wrapper>
        <Navbar />

        <Container>
            <CheckoutForm/>
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: #111;
    color: #fff;
    height: 100vh;
    overflow-y: auto;
`;

const Container = styled.div`
    height: 79vh;
`;


export default Checkout