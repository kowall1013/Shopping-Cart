import styled from 'styled-components';
import { ItemCardType } from '../App';

const Wrapper = styled.li`
  --spacing: 16px;
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 8px;
  border-bottom: 1px solid gray;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const PricingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const Total = styled.span`
  align-self: flex-end;
`;

const Button = styled.button`
  padding: 4px 32px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: goldenrod;
    color: white;
    border: none;
  }
`;

type DrawerItemProps = {
  item: ItemCardType;
  addToCart: (clickedItem: ItemCardType) => void;
};

function DrawerItem({ item, addToCart }: DrawerItemProps): JSX.Element {

  const handleItem = (operator: string): void => {
    console.log('kwl')
  }

  const { id, title, amount, image, price } = item;

  return (
    <Wrapper key={id}>
      <FlexWrapper>
        <Title>{title}</Title>
        <PricingWrapper>
          <Price>
            <p>Price: ${price}</p>
            <Button onClick={() => handleItem('minus')}>-</Button>
          </Price>
          <Total>{amount}</Total>
          <Price>
            <p>Total: $total</p>
            <Button onClick={() => addToCart(item)}>+</Button>
          </Price>
        </PricingWrapper>
      </FlexWrapper>
      <img src={image} alt={title} />
    </Wrapper>
  )
}

export default DrawerItem;