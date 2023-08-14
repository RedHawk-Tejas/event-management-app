import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import EventCard from './EventCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfflineEvents, fetchOnlineEvents } from '../services/redux/publicEventActions';
import EventDetailModal from './EventDetailModal';

const EventContainer = ({selectedCity, searchQuery}) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 4
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
            breakpoint: { max: 750, min: 0 },
            items: 1
          }
      };

      const dispatch = useDispatch();

      const [isPopupVisible, setPopupVisible] = useState(false);
      const [selectedEvent, setSelectedEvent] = useState(null);

      const { events: onlineEvents, loading: onlineLoading } = useSelector(state => state.allEvents.online);
      const { events: offlineEvents, loading: offlineLoading } = useSelector(state => state.allEvents.offline);

      const filteredEvents  = offlineEvents.filter((event) => { 
        const cityMatch = !selectedCity || event.eventVenue.toLowerCase() === selectedCity.toLowerCase();
        const searchMatch = !searchQuery || event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) || 
          event.eventVenue.toLowerCase().includes(searchQuery.toLowerCase());
        return cityMatch && searchMatch;
      });

      useEffect(() => {
        dispatch(fetchOnlineEvents());
        dispatch(fetchOfflineEvents());
      }, [dispatch]);

  return (
    <Wrapper>

        <Title>Online Events</Title>
        
        <Carousel responsive={responsive}>
            {onlineEvents.map((event) => (
              <EventCard 
                key={event.eventId} 
                event={event} 
                loading={onlineLoading} 
                isPopupVisible={isPopupVisible} 
                setPopupVisible={setPopupVisible} 
                setSelectedEvent={setSelectedEvent}
              />
            ))}
        </Carousel>

        <Title>Offline Events</Title>
        
        <Carousel responsive={responsive}>
            {filteredEvents.map((event) => (
              <EventCard 
                key={event.eventId} 
                event={event} 
                loading={offlineLoading} 
                isPopupVisible={isPopupVisible}
                setPopupVisible={setPopupVisible}
                setSelectedEvent={setSelectedEvent}  
              />
            ))}
        </Carousel>

        {isPopupVisible && (
          <ModalOverlay>
              <Modal>
                  <EventDetailModal setPopupVisible={setPopupVisible} selectedEvent={selectedEvent}/>
              </Modal>
          </ModalOverlay>
        )}
        

    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: fit-content;
    color: white;
    padding: 60px 150px;
    @media only screen and (max-width: 420px){
        padding: 30px 45px;
    }
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

const ModalOverlay = styled.button`
    position: fixed;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0A090B;
    // opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none
`;

const Modal = styled.button`
    background-color: #0A090B;
    border: none;
    outline: none
`;

export default EventContainer