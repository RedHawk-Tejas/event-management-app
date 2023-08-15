import React from 'react'
import { styled } from 'styled-components';

const Transaction = () => {
  return (
    <>
        <Header>
            <Text>Transaction Details</Text>
        </Header>

        <DetailBox>
            <Heading></Heading>
        </DetailBox>
    </>
  )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline #444;
`;

const DetailBox = styled.div`
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Heading = styled.div``;

export default Transaction