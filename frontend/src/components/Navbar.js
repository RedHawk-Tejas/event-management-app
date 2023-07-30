import React from 'react';
import { styled } from 'styled-components';
import { User2 } from 'lucide-react';

const Navbar = () => {
  return (
    <MainNavbar>

      <Logo>
        Fam<span style={{ color: '#AC44D8' }}>Fest.</span>
      </Logo>

      <RightContainer>

        <Input placeholder="Search"></Input>
        <User2 style={{ cursor: 'pointer', paddingLeft: '20px',}} />

      </RightContainer>

    </MainNavbar>
  );
};

const MainNavbar = styled.nav`
  color: white;
  background: #111;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c0c0c0;
  position: sticky;
  top: 0;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    padding: 20px 30px;
  }
`;

const Logo = styled.h1`
  font-size: 30px;
  color: white;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  width: 260px;
  border-radius: 20px;
  border: 2px solid #ac44d8;
  outline: #ac44d8;
  color: white;
  background: #111;
  @media only screen and (max-width: 800px) {
    width: 220px;
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;


export default Navbar;
