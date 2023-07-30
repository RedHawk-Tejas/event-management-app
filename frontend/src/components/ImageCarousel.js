import React from 'react'
import Carousel from 'react-multi-carousel';
import { styled } from 'styled-components';


const ImageCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1400, min: 1190 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 1190, min: 800 },
          items: 1
        },
        smmobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1
          }
      };
  return (
    <Wrapper>

        <Container>

            <Carousel responsive={responsive}>
                <Image src = {'https://img.freepik.com/premium-psd/music-festival-banner-youtube-background-thumbnail-editable-template_179104-76.jpg?size=626&ext=jpg&ga=GA1.1.1705589694.1689518130&semt=ais'}></Image>
                <Image src = {'https://img.freepik.com/free-psd/music-festival-horizontal-banner-template_23-2148947805.jpg?size=626&ext=jpg&ga=GA1.2.1705589694.1689518130&semt=ais'}></Image>
            </Carousel>

        </Container>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    // width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 80%;
    padding-top: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: 500px;
    object-fit: fill;
    border-radius: 20px;
    @media only screen and (max-width: 420px){
        height: 200px;
        border-radius: 20px;
    }
`;

export default ImageCarousel