import { CreditCard, MoveLeft, User2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import AccountForm from '../UI/AccountForm';
import Transaction from '../UI/Transaction';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAccountDetailsBasedOnUserId } from '../services/redux/accDetailsAction';


const Account = () => {

    const [activeSection, setActiveSection] = useState('account'); 

    const handleSectionChange = (section) => {
        setActiveSection(section); 
    };

    const dispatch = useDispatch();

    const { details } = useSelector(state => state.account);

    useEffect(() => {
        const userId = sessionStorage.getItem('USER_ID');
        dispatch(fetchAccountDetailsBasedOnUserId(userId));
    }, [dispatch]);

  return (
    <Wrapper>

        <Section1>
            <BackButton to='/'><MoveLeft />back</BackButton>
        </Section1>

        <Section2>
            <Column1>
                <UserGroup>
                    <UserName>{details.name}</UserName>
                    <UserEmail>{details.email}</UserEmail>
                </UserGroup>

                <Group onClick={() => handleSectionChange('account')}>
                    <User2 />
                    Account
                </Group>

                <Group onClick={() => handleSectionChange('transaction')}>
                    <CreditCard />
                    Transaction
                </Group>
            </Column1>

            <Column2>
                {activeSection === 'account' && <AccountForm details={details} />}
                {activeSection === 'transaction' && <Transaction />}
            </Column2>

        </Section2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: #111;
    color: #fff;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Section1 = styled.div`
    width: 80%;
    margin-top: 40px;
`;

const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    text-decoration: none;
`;

const Section2 = styled.div`
    width: 80%;
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

const Column1 = styled.div`
    flex: 0.2;
    height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    padding: 10px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background: #333;
    }

    @media only screen and (max-width: 400px) {
        font-size: 16px;
    }
`;

const UserGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`;

const UserName = styled.div`
    font-size: 20px;
    font-weight: 500;
`;

const UserEmail = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #999;
`;

const Column2 = styled.div`
    border: 1px solid #ac44d8;
    flex: 0.8;
    height: fit-content;
    border-radius: 15px;
    // padding: 0 20px
`;



export default Account