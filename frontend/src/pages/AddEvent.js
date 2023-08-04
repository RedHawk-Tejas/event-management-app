import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar';
import EventModal from '../components/EventModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsBasedOnUserId } from '../services/eventActions';
import { Plus } from 'lucide-react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AddEvent = () => {

    const dispatch = useDispatch();
    const { events, loading, error } = useSelector(state => state.events);

    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleAddEvent = () => {
        setPopupVisible(!isPopupVisible);
    };

    useEffect(() => {
        const userId = localStorage.getItem('id');
        dispatch(fetchEventsBasedOnUserId(userId));
      }, [dispatch]);
    
      if (loading) {
        return <div>
            <Skeleton /> 
        </div>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }

  return (
    <Wrapper>

        <Navbar/>

        <Container>

            {events.length === 0 ? (
            <>
                <Content>Look's you don't have any events right now</Content>
                <Content>Create Event Here</Content>

                <Button onClick={handleAddEvent}>Add Event</Button>

                {isPopupVisible && (
                    <ModalOverlay>
                        <Modal>
                            <EventModal setPopupVisible={setPopupVisible}/>
                        </Modal>
                    </ModalOverlay>
                )}
            </>
            ) : (
            <>

                <EventContainer>
                    <Button onClick={handleAddEvent}><Plus /></Button>

                    {isPopupVisible && (
                        <ModalOverlay>
                            <Modal>
                                <EventModal setPopupVisible={setPopupVisible}/>
                            </Modal>
                        </ModalOverlay>
                    )}

                    {events.map((event) => (
                        <Card>
                            <Img src={event.eventPoster}></Img>
                            <Title>{event.eventName}</Title>
                            <Button>Delete</Button>
                        </Card>
                    ))}
                    

                </EventContainer>
            </>
            )}

        </Container>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    color: white;
    height: 100vh;
    background: #0A090B;
    overflow-y: auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
`;

const Content = styled.div`
    color: #999;
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
`;

const ModalOverlay = styled.button`
    position: fixed;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0A090B;
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

const EventContainer = styled.div`
    // border: 1px solid white;
    width: 80%;

    display: flex;
    gap: 50px;
    flex: wrap;
    align-items: center;
    justify-content: start;
`;

const Card = styled.div`
    border: 1px solid #ac44d8;
    background: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

const Img = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`;

const Title = styled.div`
    margin-top: 8px;
`;

export default AddEvent