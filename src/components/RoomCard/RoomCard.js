import {ReactComponent as Icons} from 'assets/icons/instruments.svg'
import React from 'react'
import styled from 'styled-components';

const RoomCard = () => {
  return (
    <Wrapper>
        <Icons />
        <Title>
        Band
        </Title>
    </Wrapper>
  )
}

export default RoomCard;

const Wrapper = styled.div`
    border-radius: 8px;
    height: 175px;
    background-color: #F7FBFB;
    display: grid;
    justify-items: center;
    align-items: center;
    align-content: center;
    gap: 12px;
    cursor: pointer;
    
    &:hover{ 
        -ms-transform: scale(1.05); /* IE 9 */
        -webkit-transform: scale(1.05); /* Safari 3-8 */
        transform: scale(1.05); 
       -webkit-transition:  transform .6s ease-in;
     }
`

const Title = styled.p`
font-size: 20px;
font-weight: 600;
`