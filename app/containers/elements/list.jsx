import styled from 'styled-components';
import { addUnits } from '../../helpers/helpers';
import { margin } from '../../styles/style';

const List = styled.ul`
  margin-left: ${addUnits(-margin, 'rem')};
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export default List;
