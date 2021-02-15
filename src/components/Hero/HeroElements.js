import styled from 'styled-components';
import ImgBg from '../../images/pizza.jpg';
import { Link as LinkR } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)), url(${ImgBg});
    height: 100vh;
    padding: 0 20px;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh-80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw- 1300px) /2);
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    margin-top: 3rem;
    box-shadow: 0 5px #e9ba23;
    letter-spacing:3px;
`;

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroBtn = styled(LinkR)`
    font-size: 1.4rem;
    padding: 1rem 3rem;
    border: none;
    background: #e31837;
    color: #fff;
    text-decoration: none;
    transition: 0.2 ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color:#000;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;