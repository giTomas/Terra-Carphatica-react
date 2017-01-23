import styled from 'styled-components';
import { addUnits } from '../../helpers/helpers';
import { margin, fontSize, colors, fonts } from '../../styles/style';

export const Section = styled.section`
  margin-bottom: $(addUnits((margin * 2) 'rem'));
`;

export const SectionTitle = styled.h2`
  font-size: ${addUnits(fontSize.large_1, 'rem')};
  color: ${colors.text.primary};
  margin-bottom: ${addUnits(margin, 'rem')};
  letter-spacing: 0.04em;
  font-family: ${fonts.oswald};
`;
