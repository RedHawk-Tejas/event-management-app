import React, { useState } from 'react';
import EventDetailModal from '../components/EventDetailModal';
import { styled } from 'styled-components';
import { Spin } from 'react-cssfx-loading';
import { Link } from 'react-router-dom';

const EventCard = ({event, onlineLoading, offlineLoading}) => {

    const [isPopupVisible, setPopupVisible] = useState(false);

    const handlePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    if (onlineLoading || offlineLoading) {
        return ( 
            <div style={{ background: "#111", height: '10vh', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
                <Spin color="#ac44d8" duration='1s'/>
            </div>
        );
    }

    const backednDateTime = event.eventDateTime;
    const dateObject = new Date(backednDateTime);
    const options = { day: 'numeric', month: 'short' };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);

  return (
    <Wrapper>

            <Image src={event.eventPoster}></Image>
            <Details>
                <Row>
                    <EventName>{event.eventName}</EventName>
                    <EventPrice>₹{event.price}</EventPrice>
                </Row>
                <EventDate>{formattedDate}</EventDate>
            </Details>
            <Section>
                <Button>Book</Button>

                <Link>
                    <StyledLink onClick={ handlePopup }>more...</StyledLink>
                </Link>

                {isPopupVisible && (
                    <ModalOverlay>
                        <Modal>
                            <EventDetailModal/>
                        </Modal>
                    </ModalOverlay>
                )}
                

            </Section>
    
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border: 2px solid #AC44D8;
    border-radius: 20px;
    width: 250px;
    height: 350px;
    color: white;
    margin-top: 30px;
    margin-bottom: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 75%;
    object-fit: fill;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    padding: 3px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const EventName = styled.div`
    font-size: 15   px;
`;

const EventDate = styled.div`
    font-size: 14px;
    padding: 0 10px;
    text-align: end;
`;

const EventPrice = styled.div`
    font-size: 15px;
    margin-top: 10px;
    text-align: center;
`;

const Section = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: space-between;
`;

const Button = styled.div`
    padding: 10px 20px;
    margin: 0 10px;
    margin-top: -15px;
    border: 2px solid #AC44D8;
    border-radius: 10px;
    background: #AC44D8;
    display: block;
    font-weight: 600;
    font-size: 13px;
    &:hover{
        background: #111;
    }
`;

const StyledLink = styled.div`
    padding: 0 10px;
    font-size: 14px;
    font-weight: 500;
    &:hover{
        color: #fff;
    }
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

export default EventCard