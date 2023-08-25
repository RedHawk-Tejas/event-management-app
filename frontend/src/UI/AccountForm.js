import React from 'react'
import { styled } from 'styled-components';

const AccountForm = ({details}) => {

  return (
    <Wrapper>
        <Header>
            <Text>Account Details</Text>
        </Header>

        <DetailBox>
            <AccountHeading>Name</AccountHeading>
            <Input placeholder={details.name} readOnly></Input>
        </DetailBox>

        <DetailBox>
            <AccountHeading>Email</AccountHeading>
            <Input placeholder={details.email} readOnly></Input>
        </DetailBox>

        <DetailBox>
            <AccountHeading>Contact Number</AccountHeading>
            <Input placeholder={details.mobile} readOnly></Input>
        </DetailBox>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 30px 20px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline #444;

    @media only screen and (max-width: 400px) {
        font-size: 17px;
    }
`;

const DetailBox = styled.div`
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media only screen and (max-width: 380px) {
        padding: 20px 10px 0 8px;
    }
`;

const AccountHeading = styled.div`
    @media only screen and (max-width: 400px) {
        font-size: 14px;
    }
`;

const Input = styled.input`
    padding: 8px 20px;
    width: fit-content;
    border-radius: 6px;
    border: 1px solid #ac44d8;
    outline: none;
    background: #222;

    &::placeholder {
        color: #fff;
    }

    @media only screen and (max-width: 380px) {
        width: 30vh;
    }

    @media only screen and (max-width: 380px) {
        width: 25vh;
    }

    @media only screen and (max-width: 380px) {
        width: 20vh;
    }
`;

export default AccountForm