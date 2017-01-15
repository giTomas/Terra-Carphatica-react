import React, { PropTypes } from 'react';
import { addUnits } from '../helpers/helpers';
import { padding, margin, prefixer } from '../styles/style';

const container = prefixer.prefix({
  maxWidth: `calc(960px + (2 * ${addUnits(margin, 'rem')}))`,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: addUnits(padding, 'rem'),
  paddingLeft: addUnits(padding, 'rem'),
});

const Container = ({ children, customStyle }) => (
  <div style={{ ...container, ...customStyle }}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.array.isRequired,
  customStyle: PropTypes.object.isRequired,
};

export default Container;
