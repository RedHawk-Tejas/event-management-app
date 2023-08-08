import React from 'react';
import { styled } from 'styled-components';
import poster from '../images/poster.jpg';
import pune from '../images/pune.jpg';
import mumbai from '../images/mumbai.png';
import delhi from '../images/delhi.png';
import bangalore from '../images/bangalore.png';

const HeroBanner = ({setSelectedCity}) => {
  
  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    
    <Wrapper>

        <Img src={poster}></Img>

        <Shadow>

          <Title>Browse By Top Cities</Title>

          <Container>

            <Group onClick={() => handleCityClick('pune')} >
              <CitiImg src={pune}></CitiImg>
              <CitiName>Pune</CitiName>
            </Group>

            <Group onClick={() => handleCityClick('mumbai')} >
              <CitiImg src={mumbai}></CitiImg>
              <CitiName>Mumbai</CitiName>
            </Group>

            <Group onClick={() => handleCityClick('delhi')} >
              <CitiImg src={delhi}></CitiImg>
              <CitiName>Delhi</CitiName>
            </Group>

            <Group onClick={() => handleCityClick('bangalore')} >
              <CitiImg src={bangalore}></CitiImg>
              <CitiName>Bangalore</CitiName>
            </Group>

          </Container>

        </Shadow>

    </Wrapper>

  )
}

const Wrapper = styled.div`
    color: white;
    width: 100%
    height: 70vh;
    // border: 1px solid white;
`;

const Img = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;

  position: relative;

`;

const Shadow = styled.div`
  position: absolute;
  top: 80px;
  // border: 1px solid white;
  width: 100%;
  height: 70vh;
  background: #111;
  opacity: 0.5;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  // justify-content: start;
`;

const Title = styled.div`
  position: absolute;
  font-size: 22px;
  font-weight: 500;
  top: 60px;
`;

const Container = styled.div`
  border: 1px solid white;
  display: flex;
  gap: 20px;
  position: absolute;
  top: 100px;
  background: #fff;
  padding: 0 13px;
  border-radius: 10px;
`;

const Group = styled.div`
  // padding: 10px;
  // border-right: 1px solid white;
  text-align: center;
  display: flex;
  flex-direction: column;
  // gap: 20px;
  align-items: center;
  cursor: pointer;
 
`;

const CitiImg = styled.img`
  width: 80px;
`;

const CitiName = styled.div`
  text-align: center;
  color: #111;
  padding-bottom: 3px; 
`;

export default HeroBanner