import styled from 'styled-components';
import { ItemCardType } from '../App';
import { COLORS } from '../constants';

const ListItem = styled.li`
  border: 1px solid ${COLORS.primary.navy};
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  img {
    border-radius: 16px 16px 0 0;
    max-height: 250px;
    object-fit: cover;
    width: 100%;
  }

  h3 {
    text-align: center;
    padding: 8px;
  }

  p {
    text-align: justify;
    padding: 8px;
    line-height: 20px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    gap: 16px;

    button {
      background: none;
      border: 1px solid ${COLORS.primary.navy};
      padding: 8px 24px;
      border-radius: 8px;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        background-color: ${COLORS.primary.gray};
        color: white;
      }
    }
  }
`;

type CartItemProps = {
  item: ItemCardType,
  handleAddToCart: (clickedItem: ItemCardType) => void;
};

function CartItem({ item, handleAddToCart }: CartItemProps): JSX.Element {
  return (
    <ListItem key={item.id}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div>
        <p>${item.price}</p>
        <button onClick={() => handleAddToCart(item)}>add to cart</button>
      </div>
    </ListItem>
  )
}

export default CartItem;