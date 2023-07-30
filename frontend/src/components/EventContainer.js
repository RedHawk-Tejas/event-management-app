import React from 'react'
import { styled } from 'styled-components'
import EventCard from './EventCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const EventContainer = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1400, min: 1190 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 1190, min: 800 },
          items: 2
        },
        smmobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1
          }
      };
  return (
    <Wrapper>

        <Title>Upcoming Events</Title>
        
        <Carousel responsive={responsive}>
            
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>

        </Carousel>

        <Title> Events</Title>
        
        <Carousel responsive={responsive}>
            
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>

        </Carousel>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: fit-content;
    color: white;
    padding: 60px 60px;
    @media only screen and (max-width: 420px){
        padding: 30px 45px;
    }
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

export default EventContainer