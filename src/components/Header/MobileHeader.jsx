import React from 'react';
import styled from 'styled-components';
import mobileHero from '../../assets/mobile/image-hero@2x.jpg';
import { BaseLinkButton } from '../Buttons';
import { SectionTitle } from '../components.styled';

export const MobileHeader = () =>{
  return (
    <MobileHeaderWrapper> 
        <img src={mobileHero} alt='hero'/>
        <HeroText>
        <SectionTitle>MODERN ART GALLERY</SectionTitle>
        <p>
           The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
        </p>
        <ButtonWrapper>
            <BaseLinkButton/>
        </ButtonWrapper>
        </HeroText>
    </MobileHeaderWrapper>
  );
};

const MobileHeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const HeroText = styled.div`
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`