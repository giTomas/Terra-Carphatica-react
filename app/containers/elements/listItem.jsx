import styled from 'styled-components';
import { addUnits } from '../../helpers/helpers';
import { margin, fonts } from '../../styles/style';

const ListItem = styled.div`
  margin-left: ${addUnits(margin, 'rem')};
  margin-bottom: ${addUnits(margin, 'rem')};
  font-family: ${fonts.oswald};
  letter-spacing: calc(1em * 0.25)
`;

export default ListItem;
