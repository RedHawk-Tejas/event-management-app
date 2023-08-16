import React, { useState } from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { handleAddEvent } from '../services/api/postMethods';
import { toast } from "react-toastify";
import { toastErrorOptions, toastSuccessOptions } from '../services/toast/config';
import Toastify from '../services/toast/Toastify';

const OrganizeEvent = () => {

    const [eventName, setEventName] = useState('');
    const [eventPoster, setEventPoster] = useState(null);
    const [eventVenue, setEventVenue] = useState('');
    const [eventDateTime, setEventDateTime] = useState('');
    const [price, setPrice] = useState('');
    const [eventMode, setEventMode] = useState('');
    const [eventOrganizer, setEventOrganizer] = useState('');
    const [eventDetails, setEventDetails] = useState('');

    const handleReset = () => {
        setEventName('')
        setEventPoster(null)
        setEventVenue('')
        setEventDateTime('')
        setPrice('')
        setEventMode('')
        setEventOrganizer('')
        setEventDetails('')
    }

    const handleImageUpload = (e) => {
        try {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setEventPoster(base64String);
            };
            reader.readAsDataURL(file)
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddEventClick = async() => {
        const userId = sessionStorage.getItem('USER_ID');
        const eventData = {
            userId,
            eventName,
            eventPoster,
            eventVenue,
            eventDateTime,
            price,
            eventMode,
            eventOrganizer,
            eventDetails
        }
        const eventStatus = await handleAddEvent(eventData);
        if(eventStatus === 200){
            toast.success("Event Added", toastSuccessOptions);
        } else {
            toast.error("Error Occured", toastErrorOptions);
        }
        handleReset();
    }

    

  return (
    <Wrapper>
    <Toastify />
        <Container>
            <Row>
                <BackButton to='/'><MoveLeft />back</BackButton>
                <ResetButton onClick={ handleReset }>Clear</ResetButton>
            </Row>

            <MainSection>
                <Section1>
                    <Row1>
                        <Group>
                            <Label>Event Name</Label>
                            <Input 
                                type='text'
                                placeholder='Name'
                                value={eventName} 
                                onChange={ (e) => setEventName(e.target.value) }
                            ></Input>
                        </Group>

                        <Group>
                            <Label>Event Veneu</Label>
                            <Input 
                                type='text' 
                                placeholder='Veneu'
                                value={eventVenue} 
                                onChange={ (e) => setEventVenue(e.target.value) }
                            ></Input>
                        </Group>

                        <Group>
                            <Label>Event Date & Time</Label>
                            <Input 
                                type='datetime-local' 
                                placeholder='Date & Time'
                                value={eventDateTime} 
                                onChange={ (e) => setEventDateTime(e.target.value) }
                            ></Input>
                        </Group>

                        <Group>
                            <Label>Ticket Price Name</Label>
                            <Input
                                type='text' 
                                placeholder='₹ Price'
                                value={price} 
                                onChange={ (e) => setPrice(e.target.value) }
                            ></Input>
                        </Group>

                        <>
                        <Group>
                            <Label>Event Poster</Label>
                            <FileInput
                                type='file'
                                placeholder='Poster'
                                onChange={ handleImageUpload }
                            ></FileInput>
                        </Group>
                        </>

                    </Row1>
                    <Row2>
                        <Group>
                            <Label>Event Mode</Label>
                            <Input 
                                type='text' 
                                placeholder='Online | Offline'
                                value={eventMode} 
                                onChange={ (e) => setEventMode(e.target.value) }
                            ></Input>
                        </Group>

                        <Group>
                            <Label>Event Organizer</Label>
                            <Input
                                type='text' 
                                placeholder="Organizer's Name"
                                value={eventOrganizer} 
                                onChange={ (e) => setEventOrganizer(e.target.value) }
                            ></Input>
                        </Group>

                        <Group>
                            <Label>Event Details</Label>
                            <Textarea 
                                rows={11}
                                type='text' 
                                placeholder='Other details...'
                                value={eventDetails} 
                                onChange={ (e) => setEventDetails(e.target.value) }
                            ></Textarea>
                        </Group>
                    </Row2>
                </Section1>
                <Section2>
                    <Button onClick={ handleAddEventClick }>add</Button>
                </Section2>
            </MainSection>
        </Container>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: #111;
    color: #fff;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 60px;
    border-radius: 1pxsolid white;
`;

const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    text-decoration: none;
`;

const ResetButton = styled.div`
    border: 1px solid #ac44d8;
    padding: 6px 15px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.1s ease-out;

    &:hover{
        background: #963bbf;
    }
    &:active{
        transform: scale(0.95);
    }
`;

const MainSection = styled.div`
    border: 1px solid white;
    width: 80%;
    min-height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NBwcHCA0NCAcHBxYHBwcHDQ8IDQcNIB0iFyAdExMYHTQsGBo0JB8fLT0tMTorLjwuICFBOEE1TjQ5NzcBCgoKDg0NDg0NFSsZFRkrKysrLS0rKy0tNysrKysrKysrLTcrLS0rKysrKysrKysrLTcrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAAEDBv/EACMQAQEBAQABAwMFAAAAAAAAAAARAQISAyFxIkGRBBMxgdH/xAAZAQEBAQADAAAAAAAAAAAAAAAAAQIDBgf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAERL/2gAMAwEAAhEDEQA/APFJir0Cu2tTKqUamVlKUkNVSlJjKymikhqpUpVUaypop1UKqaKdZRrKmkp1UKqaKdZRqqaKVVCqmkp1UKqmilVQqpop1UKqmkpVUayminVQqqaKVVGsppKdVCqportVQqremqVVGspop1UKqmkpVUayminVQqqaKVVGsppKdVCqpop1lGsppKdVCqpopVUayminVQqqaSnWUaqaKVVCqpop1lGqmkpVUKqmilVRqpopVUKqmkpVUaqaKVVCqportVQqremqVVGsppKdVCqpop1lGqmilVRrKmkp1lGqmilVRrKlKdZRqppKVVDyVTRTrKNVNJSqo1lTRTqoVU0UqqNZU0lOso1U0UqqNZU0U6qFVNJTrKNZU0U6qFVNJSqo1lTRXaqjWVvTVOqhVTRSqo1lTRTqoVU0lKqjWVNFOqhVTSU6yjWVNFOqhVTRSraFVTSUqqFVNFOqhVU0UqqFRpKdVCqpopVUKqaKdVCqpopVUaymkp1lGqpopVUKqaSnVQqqaK7VlGqt6apVUayminVQqqaSlVRrKaKdVCqpopVUaymkp1UKqminWUKqaKdVCqppKVVGqmilVQqqaSnWUaqaKVVCqpopVUaqaSlVRrKminWUaqaKVVCqppKdZRqpopVUKqmiu1VCqt6apVUaqaSlVQqqaKdZRqpopVUKqmkp1lGqmilVQqqaKdVCqmkpVUKqminVQVNFKqhVU0lOqhVTRSqo1lTRTqoVU0lOso1lTRTqoVU0lKqjWVNFOqhVTRTrKNZU0ldqqFbW9NUqqFVNFKqjVU0UqqFVNJSqo1lTRTqoVU0Uq2hVU0lKqhVTRTqoVVNFKqhVTSU6qFVTRSqoVU0U6yjVU0lKqjWU0U6yjVU0UqqFVNJTqoVVNFKqhVTSU6qFVTRXaso1VvTVKqhVTRTqoVVNFKqhVTSU6qFVTRSqo1lNFOqhVU0lKqhVTRTqoVVNJSqo1lNFOqhVU0UqqNVNJSqoVVNFKqjVTRSqoVVNJSqo1lNFOqhVU0UqqNZTSU6qFVTRXaqhVW9NU6yjVTRSqoVVNJTqoVVNFKqhVTRTrKNVNJSqo1lTRTqoVU0UqqFVTSU6yjVTRSqo1lTRTrKNVTSUqqFVNFOqhVTSUqqFVTRTqoVU0UqqFVTSU6qFVNFOso1lTRXaqhVW9NU6qFVNJSqoVVNFOqhVTRS8lRrKmkp1UKqmilVRrKaKdVCqppKdZRrKaKdVCqpopVUaqaSlVQqpop1lGqpopVBVU0lOso1U0UqqFVNFOso1VNJSqoVVNFOqhVTSV2rKk5K2qqklFWVqKMqqSVKqqkUrKqklSqqpFKyqpJRVlaioyqpJRVVIqVlVSKKqpIJViBJIEkgTt+n543e/3Nk5+jN3wzd+YkDpzz6Hh5dddb3d+jn6fb3n2+PyfXp/p8zrN9TreszdzeM3ry38fP8ArUAeHoZm7ve9bnHtnNzz3++fZw9fOM73PS3evT+29fykD//Z);
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (max-width: 950px) {
        width: 100%;
    }
    
`;

const Section1 = styled.div`
    display: flex;
    padding: 40px 50px 0px 50px;
    gap: 40px;
    @media only screen and (max-width: 950px) {
        flex-direction: column;
    }
`;

const Row1 = styled.div`
    flex: 0.5;

    @media only screen and (max-width: 390px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
`;

const Row2 = styled.div`
    flex: 0.5;

    @media only screen and (max-width: 390px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Label = styled.label`
    font-weight: 500;
`;

const Input = styled.input`
    padding: 10px 20px;
    width: 36vh;
    border-radius: 10px;
    border: 2px solid #ac44d8;
    outline: none;
    background: #222;
    color: #fff;
    margin-bottom: 15px;

    @media only screen and (max-width: 390px) {
        width: 30vh;
    }
`;

const FileInput = styled.input.attrs({
    type: 'file',
  })`
    &::file-selector-button {
        border-radius: 4px;
        padding: 0 16px;
        height: 30px;
        cursor: pointer;
        background-color: white;
        border: 1px solid #ac44d8;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
        margin-right: 16px;
        margin-top: 2px;
        transition: background-color 200ms;
    }

    &:hover::file-selector-button {
        background-color: #f3f4f6;
    }
    
    &:active::file-selector-button {
        background-color: #e5e7eb;
    }
`;

const Textarea = styled.textarea`
    padding: 10px 20px;
    width: 36vh;
    border-radius: 10px;
    border: 2px solid #ac44d8;
    outline: none;
    background: #222;
    color: #fff;

    @media only screen and (max-width: 390px) {
        width: 30vh;
    }
`;

const Section2 = styled.div`
    padding: 30px 0 10px 0;
`;

const Button = styled.button`
    padding: 10px 25px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 100px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        background: linear-gradient(to left, #ac44d8 50%, #fff 50%);
        background-size: 200% 100%;
        background-position: 100% 0;
        transition: background-position 0.3s ease-in-out;
    }

    &:active{
        transform: scale(0.95);
    }
`;

export default OrganizeEvent