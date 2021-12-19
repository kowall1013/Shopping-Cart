import styled from 'styled-components';
import { ItemCardType } from '../App';
import { COLORS } from '../constants';

type Props = {
  item: ItemCardType
};

const ListItem = styled.li`
  border: 1px solid ${COLORS.primary.navy};
  display: flex;
  flex-direction: column;

  img {
    max-height: 250px;
    object-fit: cover;
  }
`;

function CartItem({ item }: Props): JSX.Element {
  return (
    <ListItem>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button>add to cart</button>
    </ListItem>
  )
}

export default CartItem;