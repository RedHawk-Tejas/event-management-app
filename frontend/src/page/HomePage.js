import React, { useEffect, useState } from 'react';
import HeroBanner from '../UI/HeroBanner';
import { styled } from 'styled-components';
import EventGallery from '../UI/EventGallery';
import Contact from '../UI/Contact';
import Navbar from '../UI/Navbar';

const HomePage = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
      setIsUserLoggedIn(!!localStorage.getItem('USER_ID'));
  }, []);
    
  return (
    <Wrapper>

      <NavSection>
        <Navbar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
      </NavSection>
      { !isUserLoggedIn && <HeroBanner setIsUserLoggedIn={setIsUserLoggedIn} /> }
      <EventGallery />
      <Contact />

    </Wrapper>
  );
};



const Wrapper = styled.div`
    background: url(https://w0.peakpx.com/wallpaper/893/294/HD-wallpaper-gradient-simple-3-azul-mix-purple-thumbnail.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    width: 100%;
    height: 100%;
`;

const NavSection = styled.div`
  height: 9vh;
`;



export default HomePage;
