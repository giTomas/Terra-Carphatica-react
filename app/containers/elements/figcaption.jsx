import styled from 'styled-components';
import { addUnits } from '../../helpers/helpers';
import { margin, colors, fontSize, padding } from '../../styles/style';

const Figcaption = styled.figcaption`
  position: absolute;
  ${''/* bottom: calc(-0.5em - ${padding / 4}rem); */}
  bottom: -${addUnits((margin / 2), 'rem')};
  right: ${addUnits((margin / 2), 'rem')};
  background-color: ${colors.background};
  z-index: 999;
  font-size: ${addUnits(fontSize.base, 'rem')};
  font-weight: 300;
  padding: ${addUnits((padding / 4), 'rem')} ${addUnits((padding / 2), 'rem')};
  box-shadow: 1px 1px 2px ${colors.text.primary}
`;

export default Figcaption;
