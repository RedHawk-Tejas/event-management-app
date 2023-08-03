import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import EventContainer from '../components/EventContainer';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import Header from '../components/Header';
import EventsCarousel from '../components/EventsCarousel';
import HeroBanner from '../components/HeroBanner';

const HomePage = () => {
  return (
    <HomeSection>
      <Navbar/>
      <HeroBanner/>
      {/* <EventsCarousel/> */}
      {/* <Header /> */}
      {/* <ImageCarousel/> */}
      <EventContainer />
      <Footer/>
    </HomeSection>
  )
}

const HomeSection = styled.div`
  background: #0A090B;
  width: 100%;
`;

export default HomePage