import React from 'react';
import styled from 'styled-components';
import { artGalleryTheme, BREAKPOINTS } from '../../styled-theme';
import { FacebookLogo, InstagramLogo, TwitterLogo } from '../../assets';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>MODERN<br/>ART GALLERY</FooterLogo>
      <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
      <SocialLinkContainer>
        <a href="https://www.facebook.com/"><FacebookLogo/></a>
        <a href="https://www.instagram.com/"><InstagramLogo/></a>
        <a href="https://twitter.com/"><TwitterLogo/></a>
      </SocialLinkContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 0 1.25rem;
  width: full;
  color: ${artGalleryTheme.white};
  background-color: ${artGalleryTheme.black};
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.md}) {
  flex-direction: row;
  padding: 4rem;
  gap: 5rem;
  align-items: top;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
  gap: 10rem;
  }
`

const FooterLogo = styled(Link)`
  font-family: 'Big Shoulders Display';
  padding: 2rem 0;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.5rem;
  color: ${artGalleryTheme.white};

  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    padding: 0;
  }
`

const SocialLinkContainer = styled.div`
  display: flex;
  width: 40%;
  max-width: 8rem;
  padding: 2rem 0;
  justify-content: space-between;

  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    padding: 0;
    align-items: baseline;
  }
`