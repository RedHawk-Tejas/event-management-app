import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { styled } from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
        <SkeletonTheme baseColor="rgba(200, 200, 200, 0.2)" highlightColor="#999">

        <ImgSection>
            <Skeleton height={300} width={250} />
        </ImgSection>

        <DetailSection>
            <Section1>
                <Title><Skeleton count={1} /></Title>
                <Price><Skeleton count={1} /> </Price>
            </Section1>
        </DetailSection>

        <StyledButton>
            <Skeleton width={80} />
        </StyledButton>

        </SkeletonTheme>
    </Wrapper>
  )
}

const Wrapper = styled.div``;

const ImgSection = styled.div`
    border-radius: 15px 15px 0 0;
`;

const DetailSection = styled.div``;

const Section1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 20vh;
`;

const Price = styled.div``;

const StyledButton = styled.div`
    background: #ac44d8;
    text-align: center;
    padding: 10px 0;
    border-radius: 0 0 10px 10px;
`;

export default Loader