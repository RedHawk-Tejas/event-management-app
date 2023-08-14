import React, { useEffect } from 'react'
import Navbar from '../UI/Navbar';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchOfflineEvents, fetchOnlineEvents } from '../services/redux/publicEventActions';
import { Spin } from 'react-cssfx-loading';
import EventCard from '../UI/EventCard';

const OfflineEvents = () => {

    const dispatch = useDispatch();

    const { events: offlineEvents, loading: offlineLoading } = useSelector(state => state.allEvents.offline);
    
    useEffect(() => {
        dispatch(fetchOfflineEvents());
    }, [dispatch]);
    
    return (
    <Wrapper>

        <NavSection>
            <Navbar/>
        </NavSection>

        <MainSection>
            <Section>
                <Content>
                    <Heading>Offline Events</Heading>
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
                            {offlineEvents.map((event) => (
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
    height: 160%;
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

export default OfflineEvents