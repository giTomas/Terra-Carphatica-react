import React, { PropTypes } from 'react';
import { Match, Miss, BrowserRouter } from 'react-router';
import shortid from 'shortid';
import Navigation from './containers/navigation';
import routes from './data/ui/routes';

const Default = ({ pathname }) =>
  <h1>{ pathname.replace('/', '') }</h1>;

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
  Uvod: Default,
  ONas: Default,
  Sekcie: Default,
  Kontakt: Default,
};

const matches = routes.map(({ pattern, component, exactly }) => (
  <Match
    key={shortid.generate()}
    exactly={exactly}
    pattern={pattern}
    component={components[component]}
  />
  ),
);

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      { matches }
      <Miss component={NoMatch} />
    </div>
  </BrowserRouter>
);

export default App;
