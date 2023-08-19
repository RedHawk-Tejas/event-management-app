import React, { useEffect, useState } from 'react'
import Navbar from '../UI/Navbar';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchOnlineEvents } from '../services/redux/publicEventActions';
import EventCard from '../UI/EventCard';

const OnlineEvents = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        setIsUserLoggedIn(!!sessionStorage.getItem('USER_ID'));
    }, []);

    const dispatch = useDispatch();

    const { events: onlineEvents, loading: onlineLoading, fetched: onlineFetched } = useSelector(state => state.allEvents.online);
    
    useEffect(() => {
        if (!onlineFetched) {
            dispatch(fetchOnlineEvents());
        }
    }, [dispatch, onlineFetched]);
    
    return (
    <Wrapper>

        <NavSection>
        <Navbar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
        </NavSection>

        <MainSection>
            <Section>
                <Content>
                    <Heading>Online Events</Heading>
                </Content>

                <EventRow>
                    <>
                    { onlineEvents.map((event) => (
                        <EventCard key={event.eventId} event={event} loading={onlineLoading} />
                    ))}
                    </>
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
    overflow: auto;
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
    align-items: center;
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

export default OnlineEvents