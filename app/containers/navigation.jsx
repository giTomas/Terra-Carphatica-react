import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import shortid from 'shortid';
import styled, { css } from 'styled-components';
import Container from './elements/container';
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

// unprefixed.title = {
//   fontSize: addUnits(fontSize.large_1, 'rem'),
//   fontVariant: 'small-caps',
//   letterSpacing: 'calc(1em * 0.333)',
//   textDecoration: 'none',
//   color: colors.text.secondary,
//   paddingTop: '1em',
//   paddingBottom: '1em',
//   // fontWeight: 300,
//   // visibility: 'hidden',
// };

unprefixed.linkHover = {
  borderColor: colors.text.secondary,
};

const style = prefixer.prefix(unprefixed);

const ListItem = styled.li`
  height: 100%;
  padding-left: ${addUnits((margin / 2), 'rem')};
  display: flex;
  align-items: center;
`;

const linkWrapper = css`
  font-size: ${addUnits(fontSize.small, 'rem')}
  text-decoration: none;
  color: ${colors.text.secondary};
  padding-top: calc(1em * 0.0825);
  border-bottom: calc(1em * 0.0825) solid transparent;
  transition: border-color ${transition};
  letter-spacing: calc(1em * 0.165);
  ${''/* font-weight: 300; */}

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

const Header = styled.div`
  font-family: ${fonts.oswald};
  ${''/* position: fixed; */}
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.primary};
  z-index: 99;
  line-height: ${baseLineHeight};
`;

Header.propTypes = {
  children: PropTypes.object.isRequired,
};

NavList.propTypes = {
  uiData: PropTypes.array.isRequired,
};

const TitleLink = styled(Link)`
  font-size: ${addUnits(fontSize.large_1, 'rem')};
  font-variant: small-caps;
  letter-spacing: calc(1em * 0.333);
  text-decoration: none;
  color: ${colors.text.secondary};
  padding-top: 1em;
  padding-bottom: 1em;
`;

// const handleEvent = (event) => {
//   switch (event) {
//     case 'mouseenter': return;
//     default:
//
//   }
// };

const Navigation = () => (
  <Header>
    <Container flex>
      <TitleLink to="/">
        Terra Carphatica
      </TitleLink>
      <NavList uiData={routes} />
    </Container>
  </Header>
);

export default Navigation;
