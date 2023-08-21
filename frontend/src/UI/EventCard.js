import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { YourEventContext } from '../page/YourEvents';
import { toast } from 'react-toastify';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { handleDeleteEvent } from '../services/api/deleteMethods';
import { toastErrorOptions, toastInfoOption, toastSuccessOptions } from '../services/toast/config';

const EventCard = ({event, loading}) => {

    const navigate = useNavigate();
    const isYourEvent = useContext(YourEventContext);

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        setIsUserLoggedIn(!!sessionStorage.getItem('USER_ID'));
    }, []);

    const backednDateTime = event.eventDateTime;
    const dateObject = new Date(backednDateTime);
    const dateOptions = { day: 'numeric', month: 'short' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(dateObject);
    const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(dateObject);

    const handleBookNow = () => {
        if(!isUserLoggedIn){
            toast.error("Please Login", toastErrorOptions)
        } else {
            navigate(`/payment?eventId=${event.eventId}&price=${event.price}&eName=${event.eventName}`);
        }
    }

    const handleDelete = async() => {
        toast.info("Deleting", toastInfoOption);
        const eventId = event.eventId;
        const deleteStatus = await handleDeleteEvent(eventId);
        if(deleteStatus === 200){
            toast.dismiss();
            toast.success("Event Deleted", toastSuccessOptions);
            window.location.reload();
        } else {
            toast.error("Try Again", toastErrorOptions);
        }
    }

    return (
    <Wrapper>
        <SkeletonTheme baseColor="rgba(200, 200, 200, 0.2)" highlightColor="#999">
            <ImgSection>
                {loading ? <Skeleton height={300} width={250} /> : <Image src={event.eventPoster}></Image>}
            </ImgSection>

            <DetailSection>
                <Section1>
                    <Title>{loading ? <Skeleton count={1} /> : event.eventName}</Title>
                    { event.price === 0 ? (
                        <>
                            <Price>{loading ? <Skeleton count={1} /> : `Free`}</Price>
                        </>
                    ) : (
                        <>
                            <Price>{loading ? <Skeleton count={1} /> : `₹${event.price}`}</Price>
                        </>
                    )}
                </Section1>
                <Section2>
                    <EventDate>{loading ? <Skeleton count={1} /> : formattedDate}</EventDate>
                    <EventTime>{loading ? <Skeleton count={1} /> : formattedTime}</EventTime>
                </Section2>
            </DetailSection>

            <StyledButton onClick={isYourEvent ? handleDelete : handleBookNow}>
                {loading ? <Skeleton width={80} /> : (isYourEvent ? 'Delete' : 'Book Now')}
            </StyledButton>
            </SkeletonTheme>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    color: #fff;
    cursor: pointer;
    width: fit-content;
`;

const ImgSection = styled.div`
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
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
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