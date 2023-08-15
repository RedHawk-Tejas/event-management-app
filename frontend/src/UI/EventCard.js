import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { YourEventContext } from '../page/YourEvents';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import { handleDeleteEvent } from '../services/api/deleteMethods';

const EventCard = ({event}) => {
    // console.log(event);

    const navigate = useNavigate();
    const isYourEvent = useContext(YourEventContext);

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('USER_ID'));

    const backednDateTime = event.eventDateTime;
    const dateObject = new Date(backednDateTime);
    const dateOptions = { day: 'numeric', month: 'short' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(dateObject);
    const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(dateObject);

    const handleBookNow = () => {
        if(!isUserLoggedIn){
            toast("Jaldi waha se hato")
        } else {
            navigate(`/payment?eventId=${event.eventId}&price=${event.price}`);
        }
    }

    const handleDelete = async() => {
        const eventId = event.eventId;
        const deleteStatus = await handleDeleteEvent(eventId);
        if(deleteStatus === 200){
            toast("Event Deleted");
            window.location.reload();
        } else {
            toast("Try Again");
        }
    }
    
    return (
    <Wrapper>

            <ImgSection>
                <Image src={event.eventPoster  || <Skeleton/> }></Image>
            </ImgSection>

            <DetailSection>
                <Section1>
                    <Title>{event.eventName}</Title>
                    <Price>₹{event.price}</Price>
                </Section1>
                <Section2>
                    <EventDate>{formattedDate}</EventDate>
                    <EventTime>{formattedTime}</EventTime>
                </Section2>
            </DetailSection>

            <StyledButton onClick={isYourEvent ? handleDelete : handleBookNow}>
                {isYourEvent ? 'Delete' : 'Book Now'}
            </StyledButton>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    // border: 1px solid #D3D3D3;
    // border-radius: 15px;
    // background: #f5f5f5;
    // color: #111;   
    color: #fff;
    // background: #222; 
    cursor: pointer;
`;

const ImgSection = styled.div`
    // padding: 10px 10px 0 10px;
    border-radius: 15px 15px 0 0;
`;

const Image = styled.img`
    width: 250px;
    height: 300px;
    border-radius: 15px 15px 0 0;
`;

const DetailSection = styled.div`
    padding: 0;
`;

const Section1 = styled.div`
    border-bottom: 1px solid #D3D3D3;
    padding: 6px 20px;
    font-weight: 500;
`;

const Title = styled.div`
    font-size: 20px;
`;

const Price = styled.div`
    font-size: 16px;
`;

const Section2 = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    justify-content: space-between;
`;

const EventDate = styled.div``;

const EventTime = styled.div``;

const StyledButton = styled.div`
    // text-decoration: none;
    // color: #fff;
    // width: 100%;
    // border: 1px solid red;
    background: #ac44d8;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 0 0 10px 10px;
    transition: all .2s;
    &:hover{
        font-weight: 600;
        background: #963bbf;
    }
    &:active{
        transform: scale(0.95);
      }
`;

export default EventCard