import React from 'react';
import shortid from 'shortid';
import { Link } from 'react-router';
import styled from 'styled-components';
import { Section, SectionTitle } from './elements/section';
import List from './elements/list';
import ListItem from './elements/listItem';
import categories from '../data/ui/categories.json';
import Image from './elements/image';
import OverflowWrapper from './elements/overflowWrapper';
import { colors } from '../styles/style';


const ListLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text.primary};
  display: block;
`;

const Sections = () => {
  const items = categories.map(({ thumb, name, pattern, exactly }) => (
    <ListItem key={shortid.generate()}>
      <ListLink to={pattern}>
        <OverflowWrapper>
          <Image src={thumb} alt={name} />
        </OverflowWrapper>
      </ListLink>
      {name}
    </ListItem>
));

  return (
    <Section>
      <SectionTitle>Čomu sa venujeme...</SectionTitle>
      <List>
        {items}
      </List>
    </Section>
  );
};

export default Sections;
