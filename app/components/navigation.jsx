import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import shortid from 'shortid';
import Container from './container';
import { addUnits, isNotPdf } from '../helpers/helpers';
import { transition, margin, fonts, colors, fontSize, prefixer, baseLineHeight } from '../styles/style';
import routes from '../data/routes';

const unprefixed = {};

unprefixed.navbar = {
  fontFamily: fonts.oswald,
  position: 'fixe',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: colors.green,
  zIndex: 99,
  lineHeight: baseLineHeight,
};

unprefixed.ul = {
  display: 'flex',
  height: '100%',
};

unprefixed.container = {
  display: 'flex',
  justifyContent: 'space-between',
  // justifyContent: 'flex-end',
};

unprefixed.title = {
  fontSize: addUnits(fontSize.large_1, 'rem'),
  fontVariant: 'small-caps',
  letterSpacing: '0.04rem',
  textDecoration: 'none',
  color: colors.text.secondary,
  visibility: 'hidden',
};

unprefixed.li = {
  height: '100%',
  paddingLeft: addUnits((margin / 2), 'rem'),
};

unprefixed.link = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: colors.text.secondary,
  paddingTop: 4,
  borderBottom: '4px solid transparent',
  transition: `border-color ${transition}`,
};


const style = prefixer.prefix(unprefixed);

const NavLink = ({ content, path }) => (
  <li style={style.li}><Link style={style.link} to={path}>{content}</Link></li>
);

NavLink.propTypes = {
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};


const NavList = ({ linkList }) => (
  <nav style={{ position: 'relative' }}>
    <ul style={style.ul}>
      {linkList}
    </ul>
  </nav>
);

NavList.propTypes = {
  linkList: PropTypes.array.isRequired,
};

const list = routes.map(({ name, pattern }) => (
  isNotPdf(pattern) ?
    <NavLink
      key={shortid.generate()}
      content={name}
      path={pattern}
    /> :
    <li
      style={style.li}
      key={shortid.generate()}
    >
      <a
        style={style.link}
        href={pattern}
      >
        {name}
      </a>
    </li>
));

const Navigation = () => (
  <div style={style.navbar}>
    <Container customStyle={style.container}>
      <Link style={style.title} to="/">
        Terra Carphatica
      </Link>
      <NavList linkList={list} />
    </Container>
  </div>
);

export default Navigation;