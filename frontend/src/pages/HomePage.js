import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
// import CheckTokenExpiration from '../services/jwt/tokenExpiry';

import Navbar from '../components/Navbar';
import EventContainer from '../components/EventContainer';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

const HomePage = () => {

  // useEffect(() => {

  //   CheckTokenExpiration();

  //   const intervalId = setInterval(() => {
  //     CheckTokenExpiration();
  //   }, 300000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };

  // }, []);

  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <HomeSection>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <HeroBanner setSelectedCity={setSelectedCity}/>
      <EventContainer searchQuery={searchQuery} selectedCity={selectedCity}/>
      <Footer/>
    </HomeSection>
  )
}

const HomeSection = styled.div`
  background: #0A090B;
  width: 100%;
`;

export default HomePage