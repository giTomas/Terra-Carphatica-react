import React, { PropTypes } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router';
import styled from 'styled-components';
import ListItem from './elements/listItem';
import Image from './elements/image';
import OverflowWrapper from './elements/overflowWrapper';
import Figure from './elements/figure';
import Figcaption from './elements/figcaption';
import { colors } from '../styles/style';

const ListLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text.primary};
  display: block;
`;

const Category = ({ thumb, name, pattern }) => (
  <ListItem key={shortid.generate()}>
    <Figure>
      <ListLink to={pattern}>
        <OverflowWrapper>
          <Image src={thumb} alt={name} />
        </OverflowWrapper>
        <Figcaption>{name}</Figcaption>
      </ListLink>
    </Figure>
  </ListItem>
);

Category.propTypes = {
  thumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
};

export default Category;
