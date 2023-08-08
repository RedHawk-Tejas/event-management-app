import React, { useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';
import { styled } from 'styled-components';

const EventModal = ({setPopupVisible, sendToast}) => {

  const [eventName, setEventName] = useState('');
  const [eventPoster, setEventPoster] = useState(null);
  const [eventVenue, setEventVenue] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [price, setPrice] = useState('');
  const [eventMode, setEventMode] = useState('');
  const [eventOrganizer, setEventOrganizer] = useState('');
  const [eventDetails, setEventDetails] = useState('');

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

  const handleAddEvent = async() => {
      const userId = localStorage.getItem('id');
      try {
          const eventDataForm = {
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

          const token = localStorage.getItem('token');

          const response = await axios.post('http://localhost:9080/api/event/add_event', eventDataForm, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          })

          const status = response.status;

          sendToast(status);

        setPopupVisible(false);;

      } catch (error) {
          console.log(error);
      }
  }

  return (
    <Wrapper>
      <Container>

            <Title>Add Event</Title>

            <Section>
              <Row>

                <Group>
                    <Label>Event Name</Label>
                    <Input value={eventName} onChange={ (e) => setEventName(e.target.value) }
                        type='text' placeholder='Name'></Input>
                </Group>

                <Group>
                    <Label>Event Poster</Label>
                    <Input onChange={ handleImageUpload }
                        type='file' placeholder='Poster'></Input>
                </Group>

                <Group>
                    <Label>Event Veneu</Label>
                    <Input value={eventVenue} onChange={ (e) => setEventVenue(e.target.value) }
                        type='text' placeholder='Veneu'></Input>
                </Group>

                <Group>
                    <Label>Event Date</Label>
                    <Input value={eventDateTime} onChange={ (e) => setEventDateTime(e.target.value) }
                        type='datetime-local' placeholder='Date'></Input>
                </Group>

                <Group>
                    <Label>Ticket Price</Label>
                    <Input value={price} onChange={ (e) => setPrice(e.target.value) }
                        type='text' placeholder='₹ Price'></Input>
                </Group>

              </Row>
              <Row>

                <Group>
                    <Label>Event Mode</Label>
                    <Input value={eventMode} onChange={ (e) => setEventMode(e.target.value) }
                        type='text' placeholder='Online | Offline'></Input>
                </Group>

                <Group>
                    <Label>Event Organizer</Label>
                    <Input value={eventOrganizer} onChange={ (e) => setEventOrganizer(e.target.value) }
                        type='text' placeholder="Organizer's Name"></Input>
                </Group>

                <Group>
                    <Label>Event Details</Label>
                    <Textarea value={eventDetails} onChange={ (e) => setEventDetails(e.target.value) }
                        type='text' placeholder='Other details...' rows={11}></Textarea>
                </Group>

              </Row>
            </Section>

            <Button onClick={handleAddEvent}>Add</Button>
            <CloseButton onClick={() => setPopupVisible(false)}><X size={14}/></CloseButton>

        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    color: white;
    height: 100vh;
    background: #0A090B;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    position: relative;
`;

const Container = styled.div`
    border: 1px solid #ac44d8;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 500;
`;

const Row = styled.div``;

const Section = styled.div`
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 830px) {
        flex-direction: column;
    }
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-weight: 500;
`;

const Input = styled.input`
    padding: 10px 20px;
    width: 50vh;
    border-radius: 10px;
    border: 1px solid #ac44d8;
    outline: none;
    color: #fff;
    background: #222;

    @media only screen and (max-width: 500px) {
        width: 40vh;
    }
`;

const Textarea = styled.textarea`
    padding: 10px 20px;
    width: 50vh;
    border-radius: 10px;
    border: 1px solid #ac44d8;
    outline: none;
    color: #fff;
    background: #222;
    resize:none;

    @media only screen and (max-width: 500px) {
        width: 40vh;
    }
`;

const Button = styled.div`
  padding: 8px 20px;
  color: #ac44d8;
  background: #111;
  border: 1px solid #ac44d8;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
    color: #fff;
  background: #ac44d8;
}
`;

const CloseButton = styled.div`
    background: #333;
    padding: 5px;
    border-radius: 60%;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export default EventModal