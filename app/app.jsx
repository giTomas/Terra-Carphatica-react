import React, { PropTypes } from 'react';
import { Match, Miss, BrowserRouter } from 'react-router';
// import styles from './styles/style';
import Navigation from './components/navigation';

const Default = ({ pathname }) =>
  <h1>{ pathname.replace('/', '') }</h1>;

const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);

Default.propTypes = {
  pathname: PropTypes.string.isRequired,
};

NoMatch.propTypes = {
  location: PropTypes.object.isRequired,
};

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />

      <Match exactly pattern="/" component={Default} />
      <Match pattern="/o-nas" component={Default} />
      <Match pattern="/sekcie" component={Default} />
      <Match pattern="/kontakt" component={Default} />

      <Miss component={NoMatch} />
    </div>
  </BrowserRouter>
);

export default App;
