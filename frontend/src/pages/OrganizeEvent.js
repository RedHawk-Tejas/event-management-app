import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import Navbar from '../components/Navbar';
import EventModal from '../components/EventModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsBasedOnUserId } from '../services/eventActions';
import { Plus } from 'lucide-react';
import { Spin } from 'react-cssfx-loading';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrganizeEvent = () => {

    const dispatch = useDispatch();
    const { events, loading } = useSelector(state => state.events);

    const [isPopupVisible, setPopupVisible] = useState(false);
    const handleAddEvent = () => {
        setPopupVisible(!isPopupVisible);
    };

    useEffect(() => {
        const userId = localStorage.getItem('id');
        dispatch(fetchEventsBasedOnUserId(userId));
    }, [dispatch]);
    
    if (loading) {
        return ( 
            <div style={{ background: "#111", height: '100vh', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
                <Spin color="#ac44d8" duration='1s'/>
            </div>
        );
    }
    
    const handleDeleteEvent = async(eventId) => {
        try {
            console.log(eventId);
            const token = localStorage.getItem('token');
            const response = await axios.delete(`http://localhost:9080/api/event/delete_event/${eventId}`,{
                headers: {
                    Authorization:  `Bearer ${token}`,
                },
            });
            const status = response.status;
            if(status === 200){
                toast("Event Deleted")
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleDataFromChild = (data) => {
       if(data === 200){
        toast("Event Added");
       }
    }

    // if (error) {
    //     return ( 
    //         <div style={{ background: "#111", height: '100vh', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
    //             {error.message}
    //         </div>
    //     );
    // }

  return (
    <Wrapper>

        <Navbar/>

        <ToastContainer/>

        <Container>
            {events.length === 0 ? (
            <>
                <Content>Look's you don't have any events right now</Content>
                <Content>Create Event Here</Content>

                <Button onClick={handleAddEvent}>Add Event</Button>

                {isPopupVisible && (
                    <ModalOverlay>
                        <Modal>
                            <EventModal sendToast={handleDataFromChild} setPopupVisible={setPopupVisible}/>
                        </Modal>
                    </ModalOverlay>
                )}
            </>
            ) : (
            <>
                <EventContainer>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <Button onClick={handleAddEvent}><Plus /></Button>

                        {isPopupVisible && (
                            <ModalOverlay>
                                <Modal>
                                    <EventModal sendToast={handleDataFromChild} setPopupVisible={setPopupVisible}/>
                                </Modal>
                            </ModalOverlay>
                        )}
                    </div>

                    <Box>
                        {events.map((event) => (
                            <Card>
                                <Img src={event.eventPoster}></Img>
                                <Title>{event.eventName}</Title>
                                <Button onClick={ () => handleDeleteEvent(event.eventId) }>Delete</Button>
                            </Card>
                        ))}   
                    </Box>
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
    width: 80%;
    display: flex;
    gap: 50px;

    @media only screen and (max-width: 500px) {
        gap: 20px;
        flex-direction: column;
        align-items: center
        justify-content: center;
    }
`;

const Box = styled.div`
    display: flex;
    gap: 50px;  
    flex-wrap: wrap;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center
    }
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

export default OrganizeEvent;