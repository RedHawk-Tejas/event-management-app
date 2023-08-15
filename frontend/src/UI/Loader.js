import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = () => {
  return (
    <Wrapper>
        <ImgSection>
            <Skeleton width={300} height={200} />
        </ImgSection>
        <DetailSection>
            <Section1>
                <h1><Skeleton width={150} /></h1>
                <Price><Skeleton width={50} /></Price>
            </Section1>
            <Section2>
                <EventDate><Skeleton width={70} /></EventDate>
                <EventTime><Skeleton width={70} /></EventTime>
            </Section2>
        </DetailSection>
        <StyledButton><Skeleton width={80} /></StyledButton>
    </Wrapper>
  )
}

const Wrapper = styled.div``;

const ImgSection = styled.div`
    border-radius: 15px 15px 0 0;
`;

const DetailSection = styled.div``;

const Section1 = styled.div``;

const Price = styled.div``;

const Section2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const EventDate = styled.div``;

const EventTime = styled.div``;

const StyledButton = styled.div``;

export default Loader