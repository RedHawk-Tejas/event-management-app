import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { fetchOfflineEvents, fetchOnlineEvents } from '../services/redux/publicEventActions';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from './EventCard';
import { ChevronsRight } from 'lucide-react';
import { Spin } from 'react-cssfx-loading';

export const YourEventContext = createContext();

const EventGallery = () => {

    const dispatch = useDispatch();

    const [isYourEvent, setIsYourEvent] = useState(true);

    const { events: onlineEvents, loading: onlineLoading } = useSelector(state => state.allEvents.online);
    const { events: offlineEvents, loading: offlineLoading } = useSelector(state => state.allEvents.offline);

    useEffect(() => {
        dispatch(fetchOnlineEvents());
        dispatch(fetchOfflineEvents());
    }, [dispatch]);
    
    return (
    <YourEventContext.Provider value={isYourEvent}>
    <Wrapper>
        
        <Section>
            <Content>
                <Heading>Online Events</Heading>
                <StyledLink to='online_events'>Browse More <ChevronsRight color='#ac44d8' /></StyledLink>
            </Content>

            <EventRow>
                {offlineLoading ? (
                    <Loading>
                        <Spin color="#ac44d8" duration='1s'/>
                        <Spin color="#ac44d8" duration='1s'/>
                        <Spin color="#ac44d8" duration='1s'/>
                        <Spin color="#ac44d8" duration='1s'/>
                    </Loading>
                    
                ) : (
                    <>
                        {!onlineLoading && onlineEvents.slice(0, 4).map((event) => (
                            <EventCard key={event.eventId} event={event} loading={onlineLoading} />
                        ))}
                    </>
                )}
            </EventRow>
        </Section>

        <Section>
            <Content>
                <Heading>Offline Events</Heading>
                <StyledLink to='offline_events'>Browse More <ChevronsRight color='#ac44d8' /> </StyledLink>
            </Content>

            <EventRow>
                {offlineLoading ? (
                    <Loading>
                        <Spin color="#ac44d8" duration='1s'/>
                        <Spin color="#ac44d8" duration='1s'/>
                        <Spin color="#ac44d8" duration='1s'/>
                        <Spin color="#ac44d8" duration='1s'/>
                    </Loading>
                    
                ) : (
                    <>
                        { !offlineLoading && offlineEvents.slice(0, 4).map((event) => (
                            <EventCard key={event.eventId} event={event} loading={offlineLoading} />
                        ))}
                    </>
                )}
                

            </EventRow>
        </Section>

    </Wrapper>
    </YourEventContext.Provider>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 50px;
`;

const Section = styled.div`
    margin: 0 120px;
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
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ac44d8;
    display: flex;
    align-items: center;
    font-size: 15px;
`;

const EventRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 100px;
`;

const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    width: 100%;
`;

export default EventGallery