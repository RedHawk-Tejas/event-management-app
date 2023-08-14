import React, { useEffect } from 'react'
import Navbar from '../UI/Navbar';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchOnlineEvents } from '../services/redux/publicEventActions';
import { Spin } from 'react-cssfx-loading';
import EventCard from '../UI/EventCard';

const OnlineEvents = () => {

    const dispatch = useDispatch();

    const { events: onlineEvents, loading: onlineLoading } = useSelector(state => state.allEvents.online);
    
    useEffect(() => {
        dispatch(fetchOnlineEvents());
    }, [dispatch]);
    
    return (
    <Wrapper>

        <NavSection>
            <Navbar/>
        </NavSection>

        <MainSection>
            <Section>
                <Content>
                    <Heading>Online Events</Heading>
                </Content>

                <EventRow>
                    {onlineLoading ? (
                        <Loading>
                            { onlineEvents.map((event) => (
                                <Spin key={event.eventId} color="#ac44d8" duration='1s'/>
                            ))}
                        </Loading>
                        
                    ) : (
                        <>
                            {onlineEvents.map((event) => (
                                <EventCard key={event.eventId} event={event} />
                            ))}
                        </>
                    )}
                    

                </EventRow>
            </Section>
        </MainSection>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: url(https://w0.peakpx.com/wallpaper/893/294/HD-wallpaper-gradient-simple-3-azul-mix-purple-thumbnail.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    width: 100%;
    min-height: 100vh;
`;

const NavSection = styled.div`
  height: 9vh;
`;

const MainSection = styled.div`
    height: 100%;
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


const EventRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    gap: 90px;
`;

const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    width: 100%;
`;

export default OnlineEvents