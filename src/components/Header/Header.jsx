import React from 'react';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { useCheckMobileScreen } from '../../hooks/use-check-mobile-screen';

export const Header = ()=> {
  const isMobile = useCheckMobileScreen();
  const renderHeader = () => {
    return isMobile? <MobileHeader/> : <DesktopHeader/>
  }

  return (
    <>
      {renderHeader()}
    </>
  );
};