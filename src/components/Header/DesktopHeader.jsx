import React from 'react';
import styled from 'styled-components';
import { BaseLinkButton } from '../Buttons';
import desktopHero from '../../assets/desktop/image-hero.jpg';
import { artGalleryTheme } from '../../styled-theme';
 

export const DesktopHeader = () => {
  return (
    <DesktopHeaderWrapper>
      <HeroWrapper>
        <HeaderLogo>MODERN <br/> ART GALLERY</HeaderLogo>
        <HeroImg src={desktopHero} alt='hero'/>
      </HeroWrapper>
      <HeaderTextWrapper>
        <HeaderText>
          <p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
          <BaseLinkButton>Our Location</BaseLinkButton>
        </HeaderText>
      </HeaderTextWrapper>
    </DesktopHeaderWrapper>
  );
};

const DesktopHeaderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction:row;
  height: 100%;
  z-index: 2;
  align-items: center;
`

const HeroWrapper = styled.div`
  display: flex;
  width: 70%;
  background-color: ${artGalleryTheme.black};
  z-index: -1;
  justify-content: end;
`

const HeroImg = styled.img`
  width: 50%;
  mix-blend-mode: difference;
`

const HeaderLogo = styled.h1`
  position: relative;
  overflow: visible;
  color: ${artGalleryTheme.white};
  font-size: 5rem;
  font-weight: 900;
  align-self: center;
  left: 25%;
  width: 50%;
`

const HeaderTextWrapper = styled.div`
  width: 30%;
`

const HeaderText = styled.div`
  position: relative;
  right: 25%;
`
