import React from 'react'
import { styled } from 'styled-components'
import Event from './Event';

const EventsCarousel = () => {
  return (
    <Wrapper>

        <Section>
            <Title>Events</Title>
            <Event/>
        </Section>
        
        

    </Wrapper>
  )
}

const Wrapper = styled.div`
    border: 1px solid white;
    color: white;
`;

const Section = styled.div`
    border: 1px solid red;
`;

const Title = styled.div``;

export default EventsCarousel