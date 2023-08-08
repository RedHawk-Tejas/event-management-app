import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar';
import CheckoutEventDetail from '../components/CheckoutEventDetail';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  return (
    <Wrapper>
        <Navbar />

        <Container>
            <Section>
                <Left>
                    <CheckoutEventDetail/>
                </Left>
                <Middle>
                    <CheckoutForm/>
                </Middle>
                <Right>a</Right>
            </Section>
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

const Section = styled.div`
    display: flex;
    border: 1px solid white;
    margin: 40px 60px;
    height: 79vh;
`;

const Left = styled.div`
    flex: 1;  
    background: #222;  
`;

const Middle = styled.div`
    flex: 1;  
`;

const Right = styled.div`
    flex: 1;  
`;

export default Checkout