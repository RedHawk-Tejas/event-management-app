import React from 'react'
import { styled } from 'styled-components';

const AccountForm = () => {
  return (
    <Wrapper>
        <Header>
            <Text>Account Details</Text>
            <EditButton>edit</EditButton>
        </Header>

        <DetailBox>
            <AccountHeading>Name</AccountHeading>
            <Input></Input>
        </DetailBox>

        <DetailBox>
            <AccountHeading>Email</AccountHeading>
            <Input></Input>
        </DetailBox>

        <DetailBox>
            <AccountHeading>Contact Number</AccountHeading>
            <Input></Input>
        </DetailBox>

        <Header>
            <Text>Password Settings</Text>
        </Header>

        <DetailBox>
            <AccountHeading>Password</AccountHeading>
            <Input></Input>
        </DetailBox>

        <ChangeButton>Change</ChangeButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 0 20px;
`;

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

    @media only screen and (max-width: 400px) {
        font-size: 17px;
    }
`;

const EditButton = styled.button`
    padding: 5px 12px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    border-radius: 10px;
    border: 1px solid #ac44d8;
    outline: none;
    background: transparent;
    color: #fff;

    &:hover{
        background: #ac44d8;
    }

    &:active{
        transform: scale(0.95);
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
    background: #333;
    color: #fff;

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

const ChangeButton = styled.div`
    padding: 7px 14px;
    border: 1px solid #ac44d8;
    width: fit-content;
    margin: 10px 0 30px 20px;
    border-radius: 5px;
    outline: none;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        background: #ac44d8;
    }

    &:active{
        transform: scale(0.95);
    }
`;

export default AccountForm