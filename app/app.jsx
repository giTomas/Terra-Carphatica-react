import React, { PropTypes } from 'react';
import { Match, Miss, BrowserRouter } from 'react-router';
import shortid from 'shortid';
import styled from 'styled-components';
import Navigation from './containers/navigation';
import routes from './data/ui/routes.json';
import categories from './data/ui/categories.json';
import Uvod from './containers/uvod';
import Container from './containers/elements/container';
import { fonts, fontSize, colors } from './styles/style';
import Main from './containers/elements/main';

const Default = ({ pathname }) => (
  <Main>
    <Container>
      <h1 style={{ marginTop: 100 }}>{pathname.replace('/', '')}</h1>
    </Container>
  </Main>
);

Default.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.object.isRequired,
};

// const components = (choosen) => {
//   switch (choosen) {
//     case 'Uvod': return Default;
//     case 'ONas': return Default;
//     case 'Sekcie': return Default;
//     case 'Kontakt': return Default;
//     default: return Default;
//   }
// };

const components = {
  Uvod,
  ONas: Default,
  Sekcie: Default,
  Kontakt: Default,
  Priroda: Default,
  Kultura: Default,
  Historia: Default,
  OchranaKrajiny: Default,
  ReportyZTerenu: Default,
};

const matches = [...routes, ...categories].map(({ pattern, component, exactly }) => (
  <Match
    key={shortid.generate()}
    exactly={exactly}
    pattern={pattern}
    component={components[component]}
  />
 ),
);

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Footer = styled.footer`
  background-color: ${colors.primary};
`;

const Copyright = styled.div`
  font-family: ${fonts.oswald};
  font-weight: 300;
  letter-spacing: calc(1em * 0.0825);
  font-size: ${fontSize.small};
  color: ${colors.text.secondary};
  padding: 1em 0;
  margin-left: auto;
`;

const FooterModule = () => (
  <Footer>
    <Container flex>
      <Copyright> &copy; {(new Date()).getFullYear()} </Copyright>
    </Container>
  </Footer>
);

const App = () => (
  <BrowserRouter>
    <Body>
      <Navigation />
      { matches }
      <Miss component={NoMatch} />
      <FooterModule />
    </Body>
  </BrowserRouter>
);

export default App;
