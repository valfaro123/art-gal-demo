import styled from 'styled-components';
import { Home } from './pages/Home';
import { artGalleryTheme } from './styled-theme';
import { BrowserRouter } from 'react-router-dom'

 

export const App = () =>  {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Home/>
      </AppWrapper>
    </BrowserRouter>
  );
};

const AppWrapper = styled.div`
  background-color: ${artGalleryTheme.white};
`