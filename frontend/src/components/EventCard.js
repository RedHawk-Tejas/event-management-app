import React from 'react'
import { styled } from 'styled-components'

const EventCard = () => {
  return (
    <Wrapper >
        
        <Image src='https://m.media-amazon.com/images/I/81s+jxE5KEL._AC_UF894,1000_QL80_.jpg'></Image>

        <Details>
            <Row>
                <EventName>Jujutsu Kaisen </EventName>
                <EventDate>17 Jul</EventDate>
            </Row>

            <EventPrice>₹999 onwards</EventPrice>
            
        </Details>

        <Button>Book</Button>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    border: 2px solid #AC44D8;
    border-radius: 20px;
    width: 250px;
    height: 360px;
    color: white;
    margin-top: 30px;
    margin-bottom: 40px;
    position: relative;
    cursor: pointer;
    background: linear-gradient(to top, #111, #AC44D8 90%);
    
    &:hover {
        background: linear-gradient(0deg, #111 , #111);
        opacity: 0.8;
    }
`;

const Image = styled.img`
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 80%;
    object-fit: fill;
    ${Wrapper}:hover &{
        opacity: 0.9;
    }
`;

const Details = styled.div`
    padding: 5px 10px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const EventName = styled.div`
    font-size: 18px;
`;

const EventDate = styled.div`
    font-size: 14px;
`;

const EventPrice = styled.div`
    font-size: 15px;
    margin-top: 10px;
    text-align: center;
`;

const Button = styled.div`
    padding: 10px 20px;
    position: absolute;
    bottom: 50%;
    left: 85px;
    border: 2px solid #AC44D8;
    border-radius: 10px;
    background: #AC44D8;
    display: none;
    font-weight: 600;
    font-size: 13px;

    ${Wrapper}:hover &{
        display: block;
    }

    &:hover {
        background: #BB37CA;
        border: 2px solid #AC44D8;
    }
`;



export default EventCard