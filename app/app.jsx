import React, { PropTypes } from 'react';
import { HashRouter, Match, Miss, Link } from 'react-router';
// import styles from './styles/style';
// import {}

// todo: routing

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
  <HashRouter>
    <div>
      <ul>
        <li><Link to="/">Úvod</Link></li>
        <li><Link to="/o-nas">O nás</Link></li>
        <li><Link to="/sekcie">Sekcie</Link></li>
        <li><a href="/app/assets/docs/stanovy.pdf">Stanovy</a></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
      <hr />

      <Match exactly pattern="/" component={Default} />
      <Match pattern="/o-nas" component={Default} />
      <Match pattern="/sekcie" component={Default} />
      {/* <Match pattern="/stanovy" component={Default} /> */}
      <Match pattern="/kontakt" component={Default} />

      <Miss component={NoMatch} />
    </div>
  </HashRouter>
);

export default App;
