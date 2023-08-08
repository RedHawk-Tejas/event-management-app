import { X } from 'lucide-react';
import React from 'react';
import { styled } from 'styled-components';

const EventDetailModal = ({selectedEvent, setPopupVisible}) => {

  const backednDateTime = selectedEvent.eventDateTime;
  const dateObject = new Date(backednDateTime);
  const dateOptions = { day: 'numeric', month: 'short' };
  const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(dateObject);
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(dateObject);

  return (
    <Wrapper>
        <Container>

            <LeftSection>
                <Img src={selectedEvent.eventPoster}></Img>
            </LeftSection>

            <RightSection>
                <Title>{selectedEvent.eventName}</Title>

                <Box>
                  <Heading>Date</Heading>
                  <Content>{formattedDate}</Content>
                </Box>

                <Box>
                  <Heading>Time</Heading>
                  <Content>{formattedTime}</Content>
                </Box>

                <Box>
                  <Heading>Price</Heading>
                  <Content>₹{selectedEvent.price}</Content>
                </Box>

                <Box>
                  <Heading>Mode</Heading>
                  <Content>{selectedEvent.eventMode}</Content>
                </Box>

                <Box>
                  <Heading>Organizer</Heading>
                  <Content>{selectedEvent.eventOrganizer}</Content>
                </Box>

                <Box>
                  <Heading>Details</Heading>
                  <Content>{selectedEvent.eventDetails}</Content>
                </Box>
                
            </RightSection>

        </Container>
        <CloseButton onClick={ () => setPopupVisible(false) }><X size={14}/></CloseButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
`;

const LeftSection = styled.div``;

const Img = styled.img`
  width: 300px;
  height: 500px;
  border-radius: 10px 0 0 10px;
`;

const RightSection = styled.div`
  padding: 15px 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  width: fit-content;
`;

const Heading = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #999;
`;

const Content = styled.div``;

const CloseButton = styled.div`
  width: 14px;
  background: #333;
  padding: 5px;
  border-radius: 60%;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 90px;
  left: 50%;
`;

export default EventDetailModal