import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { artGalleryTheme } from '../../../styled-theme';
import { ArrowRight} from '../../../assets';

export const BaseLinkButton = () => {
  return (
    <StyledLinkButton to='/'>
      <TextWrapper>
        OUR LOCATION
      </TextWrapper>
      <SVGWrapper>
        <ArrowRight/>
      </SVGWrapper>
    </StyledLinkButton>
  );
};

const StyledLinkButton = styled(Link)`
  background-color: ${artGalleryTheme.black};
  font-family: 'Big Shoulders Display';
  letter-spacing: .25rem;
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${artGalleryTheme.white};
  height: 3.25rem;
  width: 70%;
`

const TextWrapper = styled.div`
  text-align: center;
  width:100%;
  text-justify: center;
`

const SVGWrapper = styled.div`
  display:flex;
  background-color: ${artGalleryTheme.gold};
  align-items: center;
  justify-content: center;
  background-color: ${artGalleryTheme.gold};
  height: 3.25rem;
  width: 2.5rem;
`