import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../UI/Navbar';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import EventCard from '../UI/EventCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsBasedOnUserId } from '../services/redux/eventActions';
import { Spin } from 'react-cssfx-loading';

export const YourEventContext = createContext();

const YourEvents = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isYourEvent, setIsYourEvent] = useState(true);

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        setIsUserLoggedIn(!!sessionStorage.getItem('USER_ID'));
    }, []);

    const { events, loading, fetched } = useSelector(state => state.events);

    console.log(events);

    useEffect(() => {
        if(!fetched){
            const userId = sessionStorage.getItem('USER_ID');
            dispatch(fetchEventsBasedOnUserId(userId));
        }
    }, [dispatch, fetched]);

    const toCreateEvent = () => {
        navigate('/organize_event');
    };

    if (loading) {
        return ( 
            <div style={{ background: "#111", height: '100vh', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
                <Spin color="#ac44d8" duration='1s'/>
            </div>
        );
    }

  return (
    <YourEventContext.Provider value={isYourEvent}>
    <Wrapper>

        <NavSection>
            <Navbar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
        </NavSection>

        <MainSection>

            {events.length === 0 ? (
            <Section1>
                <Content>Look's you don't have any events right now</Content>
                <Content>Create Event Here</Content>
                <Button onClick={toCreateEvent}>Add Event</Button>
            </Section1>
            ) : (
            <Section2>
                <Container>
                    {events.map((event) => (
                        <EventCard event={event}/>
                    ))}
                </Container>
            </Section2>
            )}

        </MainSection>
        
    </Wrapper>
    </YourEventContext.Provider>
  )
}

const Wrapper = styled.div`
    color: #fff;
    width: 100%;
    min-height: 100vh;
    overflow: auto;

    background: url(https://w0.peakpx.com/wallpaper/893/294/HD-wallpaper-gradient-simple-3-azul-mix-purple-thumbnail.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const NavSection = styled.div`
    height: 9vh;
`;

const MainSection = styled.div`
    min-height: 100vh;
`;

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

const Content = styled.div`
    color: #fff;
    margin: 2px 0;
`;

const Button = styled.button`
    margin: 15px 0;
    padding: 8px 20px;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #ac44d8;
    background: #111;
    border: 1px solid #ac44d8;
    cursor: pointer;

    &:active{
        transform: scale(0.95);
    }
`;

const Section2 = styled.div`
    margin: 50px 80px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 700px) {
        margin: 50px;
    }

    @media only screen and (max-width: 700px) {
        justify-content: center;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: fit-content;
    flex-wrap: wrap;
    gap: 10vh;

    @media only screen and (max-width: 657px) {
        gap: 7vh;
    }
`;

export default YourEvents