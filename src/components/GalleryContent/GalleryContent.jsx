import React from 'react';
import {SectionTitle} from '../components.styled';
import imgGrid1Desktop from '../../assets/desktop/image-grid-1@2x.jpg';
import imgGrid1Mobile from '../../assets/mobile/image-grid-1@2x.jpg';
import imgGrid2Mobile from '../../assets/mobile/image-grid-2@2x.jpg';
import imgGrid2Desktop from '../../assets/desktop/image-grid-2@2x.jpg'; 
import imgGrid3Mobile from '../../assets/mobile/image-grid-3@2x.jpg';
import imgGrid3Desktop from '../../assets/desktop/image-grid-3@2x.jpg';
import styled from 'styled-components';
import { artGalleryTheme, BREAKPOINTS } from '../../styled-theme';

export const GalleryContent = () => {
  const isMobile = false;
  
  return (
    <GalleryContentWrapper>
      <GalleryIntro>
        <GalleryImg src={isMobile? imgGrid1Mobile :imgGrid1Desktop} alt='gallery'/>
        <Intro>
          <SectionTitle>YOUR DAY AT THE GALLERY</SectionTitle>
          <p>
            Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
          </p>
        </Intro>
      </GalleryIntro>
      <GalleryPhotos>
        <GalleryImg src={isMobile? imgGrid2Mobile : imgGrid2Desktop} alt='img2'/>
        <ImageAndTextCard>
          <CardImage src={isMobile? imgGrid3Mobile : imgGrid3Desktop} alt="img3"/>
          <CardText>
            <SectionTitle>COME & BE INSPIRED</SectionTitle>
            <p>
              We’re excited to welcome you to our gallery and see how our collections influence you.
            </p>
          </CardText>
        </ImageAndTextCard>
      </GalleryPhotos>
    </GalleryContentWrapper>
  );
};

const GalleryContentWrapper = styled.section`
  padding: 2rem 1.25rem; 
  height: 100%;

  @media (min-width: ${BREAKPOINTS.md}) {
   padding: 4rem;
  }
`

const ImageAndTextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    row-gap: 1rem;
    padding: 0 1rem;
  }
`

const GalleryPhotos = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    height: 100%;
  }
`

const Intro = styled.div`
  padding: 1.5rem 2rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    padding: 1.5rem 2rem;
  }
`

const GalleryIntro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0 2rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row-reverse;
    align-items: center;
  }
`

const CardText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${artGalleryTheme.black};
  color: ${artGalleryTheme.white};
  padding: 3rem 2rem;

  @media (min-width: ${BREAKPOINTS.md}) {
   padding:  2rem;
  }
`

const GalleryImg = styled.img`
  width: 100%;
  padding:0 1rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    width: 50%;
  }
`

const CardImage = styled.img`
  width: 100%;

  @media (min-width: ${BREAKPOINTS.md}) {
    height: 100%;
    width: 100%;
  }
`