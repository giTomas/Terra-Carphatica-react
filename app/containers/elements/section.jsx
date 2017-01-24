import styled from 'styled-components';
import { addUnits } from '../../helpers/helpers';
import { margin, fontSize, colors, fonts } from '../../styles/style';

export const Section = styled.section`
  margin-bottom: ${addUnits((margin * 3), 'rem')}
`;

export const SectionTitle = styled.h2`
  font-size: ${addUnits(fontSize.large_1, 'rem')};
  color: ${colors.text.primary};
  margin-bottom: ${addUnits((margin * 2), 'rem')};
  letter-spacing: calc(1em * 0.333);
  font-weight: 400;
  font-family: ${fonts.oswald};
`;
