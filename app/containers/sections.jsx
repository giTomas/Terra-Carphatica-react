import React from 'react';
import { Section, SectionTitle } from './elements/section';
import List from './elements/list';
import categories from '../data/ui/categories.json';
import Category from './category';

const Sections = () => {
  const items = categories.map(Category);
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
