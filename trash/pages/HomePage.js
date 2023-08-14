import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
// import CheckTokenExpiration from '../services/jwt/tokenExpiry';

import Navbar from '../../frontend/src/components/Navbar';
import EventContainer from '../../frontend/src/components/EventContainer';
import Footer from '../../frontend/src/components/Footer';
import HeroBanner from '../../frontend/src/components/HeroBanner';

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