import styled from 'styled-components';
import { addUnits } from '../../helpers/helpers';
import { margin, fontSize, fonts } from '../../styles/style';

const ListItem = styled.div`
  margin-left: ${addUnits(margin, 'rem')};
  margin-bottom: ${addUnits(margin, 'rem')};
  font-family: ${fonts.oswald};
`;

export default ListItem;
