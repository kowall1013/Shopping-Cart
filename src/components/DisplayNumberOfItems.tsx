import styled from 'styled-components';
import { COLORS } from '../constants';

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  display: grid;
  place-content: center;
  position: absolute;
  top: -13px;
  right: -13px;
  font-size: 0.925rem;
  border: 1px solid ${COLORS.primary.navy};
  border-radius: 50%;
  background-color: ${COLORS.primary.navy};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

type DisplayNumberOfItemsProps = {
  itemsInDrawe: number;
}

function DisplayNumberOfItems({ itemsInDrawe }: DisplayNumberOfItemsProps): JSX.Element {
  return (
    <Wrapper>
      {itemsInDrawe}
    </Wrapper>
  )
}
export default DisplayNumberOfItems;


