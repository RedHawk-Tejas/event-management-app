import React from 'react';
import styled from 'styled-components';
import poster from '../images/poster.jpg'

const Header = () => {
  return (
    <Wrapper>

        <Img src={poster}></Img>

        <Container>
            <Title>Explore One of the Best Events.</Title>
        </Container>

        <SearchBar>
            <Input placeholder='Search for a event'></Input>
            <Button >Search</Button>
        </SearchBar>

    </Wrapper>
  )
}

const Wrapper = styled.div``;

const Img = styled.img`
    width: 100%;
    height: 89vh;
    object-fit: cover;
    position: absolute;
    left: 0;
    z-index: 1;
    background-color: #111;
`;

const Container = styled.div`
    position: absolute;
    z-index: 2;
    color: white;
    top: 80px;
    left: 0; 
    width: 100%;
    height: 89vh;
    background: #111;
    opacity: 0.5;
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 500;
    position: absolute;
    top: 150px;
    left: 25%;
`;

const SearchBar = styled.div`
    position: absolute; 
    top: 350px;
    left: 25%;
    z-index: 5;
    border: 3px solid #720e9e;
    border-radius: 10px;;

    width: 100vh;
`;

const Input = styled.input`
    width: 75.7%;
    border: none;
    outline: none;
    padding: 15px 20px;
    border-radius: 10px 0 0 10px;
    // color: #222;
    font-size: 18px;
`;

const Button = styled.button`
    width: 19%;
    border: none;
    outline: none;
    padding: 18px 20px;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    background-color: #720e9e;
    color: white;
    font-weight: 500;
`;

export default Header