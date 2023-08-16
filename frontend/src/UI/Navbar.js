import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { MenuIcon } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import HamburgerModal from './HamburgerModal';
import { toastErrorOptions } from '../services/toast/config';
import Toastify from '../services/toast/Toastify'
import { toast } from 'react-toastify';


const Navbar = ({ isUserLoggedIn, setIsUserLoggedIn}) => {

    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 470 });
    const [isDropDownOpen, setisDropDownOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toCreateEvent = () => {
      navigate('/organize_event');
    };

    const toYourEvent = () => {
      navigate('/your_events');
    };

    const toAccount = () => {
      navigate('/account');
    }

    const handleLogout = () => {
      sessionStorage.removeItem('TOKEN');
      sessionStorage.removeItem('USER_ID');
      setIsUserLoggedIn(false);
      navigate('/');
    }

    const toggleDropDown = () => {
      if(!isUserLoggedIn){
        toast.error("Please Login", toastErrorOptions);
      }else{
        setisDropDownOpen(!isDropDownOpen);
      }
    };

    const toggleHamburger = () => {
      setIsHamburgerOpen(!isHamburgerOpen);
    }

    const changeNavbarBackgroundOnScroll = () => {
      return window.scrollY > 10 ? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAACzCAMAAACKPpgZAAAAk1BMVEWgIPD///+bAO+cBu+fGvCVAO+eFPDv3vzEhvWeF/DTp/jp0/vQoffbtfnmzfvgwvrGivbcufm1YfP69P7y5P3jx/qtTPK+efTs2fzBfvXOm/enOvHYsPisR/LLlva8cvTWrPj27P2kKfGqQPGwVPLIkPb9+v/06P21Y/O5avSlMvH58/6/fPTHjva7b/ThxPqyW/OJJwgcAAAEL0lEQVR4nO3Zi3KiShAG4Jmei4ACQkSF4A1vkSQb3//pTo8m52R3sULlxI1s/V9KEwxa8GdmuiEisAJ+ZwOBYJohFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP9FW0XM6u8+kBtjSSwGSRYHeU3quw/mhliaTOWb/RbZvKHjSr6380zrOaX1xV27HzAt5a/6qmU0FbuQAEXLjkdjot+CkXJ1eSi8pwK384CE2/v84DeengTJEQnR7nNukskaguFoqM2b1UCW3kqmuq6EqCvNA2g9EzXVG9Ike/w02yh77VO4Dioag5EyMi3ezclMzFA+5zxuKtk30V0hk1yGnKx1yYgRf1LayWj0+kIwUuYtVgmXTDWVh1wWJDjMWO4GaS73m0QOjOzxdkqrXZuMbw71LyazazGfOJnT8PovmZTIk1u65w1O5k6W4Uhe/zS+np691qKmgIYfD5rTOrMh5ck5zyaXzEwrl0zNU4uT2cnkJX75Ayfy5ah0ETyu42T4ezK9jweNm03kCzuRCS83LpmxSyYznixdMlNZG1N1sTyZ1Wna8DpJDYPm44rLVTu3rlafRx7XuVMyO95Yc9U2GylHu1GrMndbzme0mHNLMm9IZvFhUfHTwdjF56+DoH56osWgdsl42+XY2sKzti7K8x4d4x/dXOLVQI7eBTINXn8oPl5o/NdmWSulrRWWNzmZZ3Ivu0ZGK2rbTt8UXh+kLDenGKLhVpa9YfYYbMe8rIbuN5+aBmoo5x2/LOBkcj7/5/y0RkxkKsXTZrosf8y85M5lFn4qGb1erLs4TH5if/D5zw8umcm0N+RlmKT3MshILhN+Lfjcn17/BXe/9NgVZ1egksPkuHmYSNp66z6vybbXrqH5a51qdWnSNJJ76So4P+74237kVuGN/93H933ofCvvrqFksw72IV9GNbS+/4rbJMOVmj+GSGgiJZRSwifi0u06407f1Gtqfd+0mUx2S0OrypdYi+QloSCc00OSVCqJj5THgw6Puou3Z7jBaXNaJqwKEx2oot6YqjQwmeib8XLwYCIRmfmkk7dmzmh1KZm6Re3V4TSKN30j/DHPPe1HXmjmRTJL7k12DM2x7PB88mcXgmlz40rUk3k4rnh06SM3zLqKi5iKIkvvs2XPlmH4yY7oNqhDYzCtlgg9y577Oe2JF92RIeJJND9ExvTJPcgUh07XfWqKpmi3dlJoQrIPvSQ2+TQp634QUVJmk7qMUtomn7vwuh3qfv9LLruHtqfEhZpnJPGzpUppEu5LWV1x1eYL8ase9x+gzfCnXm/Z1X+EXIGiRfx4Hi7RUHV8Dnwxyy3s7DgW1OnG9Vq03+H/tQIAAAAAXAWuNJtZESCaJjb4B5kaM6Gl8S89AAAAAElFTkSuQmCC)' : 'transparent';
    };
  
    useEffect(() => {
      const changeBackground = () => {
        const wrapper = document.querySelector('#navbar-wrapper');
        if (wrapper) {
          wrapper.style.background = changeNavbarBackgroundOnScroll();
        }

      };
  
      window.addEventListener('scroll', changeBackground);
  
      return () => {
        window.removeEventListener('scroll', changeBackground);
      };
    }, []);

  return (
    <>
    <Wrapper id="navbar-wrapper">
        
        <Logo to='/'>
            FamFest
        </Logo>

        <Links>
            <StyledLink>Home</StyledLink>
            <StyledLink>About</StyledLink>
            <StyledLink href="#contact">Contact</StyledLink>

            <DropDown onClick={ toggleDropDown }>
              Account
                <DropDownContent isOpen={isDropDownOpen}>
                  <Text onClick={ toAccount }>My Account</Text>
                  <Text onClick={ toYourEvent }>Your Events</Text>
                  <Text onClick={ toCreateEvent }>Create Event</Text>
                  <Text onClick={ handleLogout }>Log Out</Text>
                </DropDownContent>
            </DropDown>
        </Links>

        {isMobile && 
          <HamburgerIcon onClick={ toggleHamburger }>
            <MenuIcon style={{ marginRight: '20px' }} />
            <HamburgerModal isOpen={isHamburgerOpen}/>
        </HamburgerIcon> }

    </Wrapper>
    <Toastify />
    </>

  )
}

const Wrapper = styled.div`
  height: 9vh;
  border-bottom: 1px solid #D3D3D3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0; 
  width: 100%;
  z-index: 999;
  background-color:  ${props => props.backgroundColor};
`;

const Logo = styled(Link)`
  margin: 0 80px;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  text-decoration: none;

  @media (max-width: 700px) {
    margin: 0 60px;
  }

  @media (max-width: 620px) {
    margin: 0 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;  

const Links = styled.div`
  width: 50vh;
  margin: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  // border: 1px solid white;

  @media (max-width: 700px) {
    margin: 0 60px;
  }

  @media (max-width: 620px) {
    margin: 0 30px;
  }

  @media (max-width: 470px) {
    display: none;
  }

`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const DropDown = styled.div`
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const DropDownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 35px;
  right: -34px;
  background-color: #fff;
  color: red;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0px;
  z-index: 111;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const Text = styled.p`
  color: #111;
  padding: 6px 0;
  border-bottom: 1px solid gray;
  &:hover{
    background: #e0e0e0;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
`;

export default Navbar