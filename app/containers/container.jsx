import { PropTypes } from 'react';
import styled from 'styled-components';
import { addUnits } from '../helpers/helpers';
import { padding, margin } from '../styles/style';

// const container = prefixer.prefix({
//   maxWidth: `calc(960px + (2 * ${addUnits(margin, 'rem')}))`,
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   paddingRight: addUnits(padding, 'rem'),
//   paddingLeft: addUnits(padding, 'rem'),
// });

// const Container1 = ({ children, customStyle }) => (
//   <div style={{ ...container, ...customStyle }}>
//     {children}
//   </div>
// );

const Container = styled.div`
  max-width: calc(960px + (2 * ${addUnits(margin, 'rem')}));
  margin-left: auto;
  margin-right: auto;
  padding-right: ${addUnits(padding, 'rem')};
  padding-left: ${addUnits(padding, 'rem')};
  display: ${props => props.flex && 'flex'};
  justify-content: ${props => props.flex && 'space-between'};
`;

Container.propTypes = {
  children: PropTypes.array.isRequired,
  flex: PropTypes.bool.isRequired,
};

export default Container;
