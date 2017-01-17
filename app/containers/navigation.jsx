import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import shortid from 'shortid';
import styled, { css } from 'styled-components';
import Container from './container';
import { addUnits, isNotPdf } from '../helpers/helpers';
import { transition, margin, fonts, colors, fontSize, prefixer, baseLineHeight } from '../styles/style';
import routes from '../data/ui/routes';

const unprefixed = {};

unprefixed.ul = {
  display: 'flex',
  height: '100%',
};

// unprefixed.container = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   // justifyContent: 'flex-end',
// };

unprefixed.title = {
  fontSize: addUnits(fontSize.large_1, 'rem'),
  fontVariant: 'small-caps',
  letterSpacing: '0.04rem',
  textDecoration: 'none',
  color: colors.text.secondary,
  // visibility: 'hidden',
};

// unprefixed.link = {
//   height: '100%',
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   color: colors.text.secondary,
//   // paddingTop: 4,
//   borderBottom: '4px solid transparent',
//   transition: `border-color ${transition}`,
// };
//
// unprefixed.linkHover = {
//   borderColor: colors.text.secondary,
// };

const style = prefixer.prefix(unprefixed);

const ListItem = styled.li`
  height: 100%;
  padding-left: ${addUnits((margin / 2), 'rem')}
`;

const linkWrapper = css`
  height: 100%;
  display: flex;
  align-items: center,
  text-decoration: none;
  color: ${colors.text.secondary};
  padding-top: 4px;
  border-bottom: 4px solid transparent;
  transition: border-color ${transition};

  &:hover {
    border-color: ${colors.text.secondary}
  }
`;

const StyledLink = styled(Link)`
  ${linkWrapper}
`;

const StyledLink2 = styled.a`
  ${linkWrapper}
`;

const NavLink = ({ content, path, exact }) => (
  <ListItem>
    <StyledLink activeOnlyWhenExact={exact} activeStyle={style.linkHover} to={path}>
      {content}
    </StyledLink>
  </ListItem>
);

NavLink.propTypes = {
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

const NavList = ({ uiData }) => {
  const list = uiData.map(({ name, pattern, exactly }) => (
    isNotPdf(pattern) ?
      <NavLink
        key={shortid.generate()}
        exact={exactly}
        content={name}
        path={pattern}
      /> :
      <ListItem key={shortid.generate()}>
        <StyledLink2 href={pattern}>
          {name}
        </StyledLink2>
      </ListItem>
  ));
  return (
    <nav style={{ position: 'relative' }}>
      <ul style={style.ul}>
        {list}
      </ul>
    </nav>
  );
};


const NavBar = styled.div`
  font-family: ${fonts.oswald};
  ${''/* position: fixed; */}
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.green};
  z-index: 99;
  line-height: ${baseLineHeight};
`;

NavBar.propTypes = {
  children: PropTypes.array.isRequired,
};

NavList.propTypes = {
  uiData: PropTypes.array.isRequired,
};

// const handleEvent = (event) => {
//   switch (event) {
//     case 'mouseenter': return;
//     default:
//
//   }
// };

const Navigation = () => (
  <NavBar>
    <Container flex>
      <Link style={style.title} to="/">
        Terra Carphatica
      </Link>
      <NavList uiData={routes} />
    </Container>
  </NavBar>
);

export default Navigation;
