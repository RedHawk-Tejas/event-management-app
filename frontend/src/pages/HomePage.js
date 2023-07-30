import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import EventContainer from '../components/EventContainer';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';

const HomePage = () => {
  return (
    <HomeSection>
      <Navbar/>
      <ImageCarousel/>
      <EventContainer />
      <Footer/>
    </HomeSection>
  )
}

const HomeSection = styled.div`
  background: linear-gradient(180deg, #222, #AC44D8 300%);
  width: 100%;
`;

export default HomePage