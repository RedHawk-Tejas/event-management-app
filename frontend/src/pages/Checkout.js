import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar';

const Checkout = () => {
  return (
    <Wrapper>
        <Navbar />

        <Container>
            <Section>
                <Left>a</Left>
                <Middle>a</Middle>
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
`;

const Container = styled.div`
    // border: 1px solid white;
    height: 89vh;
`;

const Section = styled.div`
    display: flex;
    border: 1px solid white;
    margin: 10px;
`;

const Left = styled.div`
    flex: 1;    
`;

const Middle = styled.div`
    flex: 1;  
`;

const Right = styled.div`
    flex: 1;  
`;

export default Checkout