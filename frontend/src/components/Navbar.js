import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { User2 } from 'lucide-react';

const Navbar = ({searchQuery, setSearchQuery}) => {

  const navigate = useNavigate();

  const [isDropDownOpen, setisDropDownOpen] = useState(false);


  const toggleDropDown = () => {
    setisDropDownOpen(!isDropDownOpen);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <MainNavbar>

      <Link style={{ textDecoration: 'none'}} to="/famfest/home">
        <Logo>
          Fam<span style={{ color: '#AC44D8' }}>Fest.</span>
        </Logo>
      </Link>
      
      <RightContainer>

        <Input value={searchQuery} onChange={ (e) => setSearchQuery(e.target.value) } placeholder="Search"></Input>

        <Link to="/famfest/organize_event">
          <Button>Organize Event</Button>
        </Link>

        <DropDown onClick={toggleDropDown}>
          <User2 style={{ cursor: 'pointer', paddingLeft: '20px',}} />
          <DropDownContent onClick={ removeToken }  isOpen={isDropDownOpen}>
            <p>Log Out</p>
          </DropDownContent>
        </DropDown>

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
  z-index: 10;

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
  margin-right: 20px;
  @media only screen and (max-width: 800px) {
    width: 220px;
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 8px 10px;
  color: #ac44d8;
  background: #111;
  border: 1px solid #ac44d8;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    color: #fff;
  background: #ac44d8;
  }
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  
`;

const DropDownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 35px;
  right: -30px;
  background-color: #fff;
  color: red;
  min-width: 60px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 7px 12px;
  z-index: 111;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;



export default Navbar;
