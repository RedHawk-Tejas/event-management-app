import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { fetchOfflineEvents, fetchOnlineEvents } from '../services/redux/publicEventActions';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from './EventCard';
import { ChevronsRight } from 'lucide-react';

export const YourEventContext = createContext();

const EventGallery = () => {

    const dispatch = useDispatch();

    const [isYourEvent, setIsYourEvent] = useState(true);

    const { events: onlineEvents, loading: onlineLoading, fetched: onlineFetched } = useSelector(state => state.allEvents.online);
    const { events: offlineEvents, loading: offlineLoading, fetched: offlineFetched } = useSelector(state => state.allEvents.offline);

    useEffect(() => {
        if (!onlineFetched) {
            dispatch(fetchOnlineEvents());
        }

        if (!offlineFetched) {
            dispatch(fetchOfflineEvents());
        }
    }, [dispatch, onlineFetched, offlineFetched]);
    
    return (
    <YourEventContext.Provider value={isYourEvent}>
    <Wrapper>
        
        <Section>
            <Content>
                <Heading>Online Events</Heading>
                <StyledLink to='online_events'>Browse More <ChevronsRight color='#ac44d8' /></StyledLink>
            </Content>

            <EventRow>
                <>
                    { onlineEvents.slice(0, 4).map((event) => (
                        <EventCard key={event.eventId} event={event} loading={onlineLoading} />
                    ))}
                </>
            </EventRow>
        </Section>

        <Section>
            <Content>
                <Heading>Offline Events</Heading>
                <StyledLink to='offline_events'>Browse More <ChevronsRight color='#ac44d8' /> </StyledLink>
            </Content>

            <EventRow>
                <>
                    {offlineEvents.slice(0, 4).map((event) => (
                        <EventCard key={event.eventId} event={event} loading={offlineLoading} />
                    ))}
                </>
            </EventRow>
        </Section>

    </Wrapper>
    </YourEventContext.Provider>
  )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 50px;
    min-height: 100vh;
`;

const Section = styled.div`
    width: 84%;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0 12px 0;
`;

const Heading = styled.div`
    font-size: 25px;
    font-weight: 500;

    @media only screen and (max-width: 450px) {
        font-size: 21px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 15px;

    @media only screen and (max-width: 450px) {
        font-size: 13px;
    }
`;

const EventRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: fit-content;
    flex-wrap: wrap;
    gap: 10vh;

    @media only screen and (max-width: 665px) {
        gap: 7vh;
    }

    @media only screen and (max-width: 643px) {
        gap: 5vh;
    }

    @media only screen and (max-width: 629px) {
        justify-content: center;
    }
`;

export default EventGallery