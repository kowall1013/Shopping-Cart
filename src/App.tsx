import { useEffect, useState } from "react";
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from "./components/CartItem";
import { COLORS } from './constants';
import Drawer from "./components/Drawer";

const API = "https://fakestoreapi.com/products";

export type ItemCardType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number;
}

const Wrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`
const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style-type: none;
  gap: 16px;
`;

const IconShop = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  font-size: 2rem;
  cursor: pointer;
  color: ${COLORS.primary.navy};

  &::after {
    content: '0';
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
  }
`;

function App() {
  const [products, setProducts] = useState<ItemCardType[]>([])
  const [drawerActive, setDrawerActive] = useState(false);
  const [productsInDrawer, setProductsInDrawer] = useState<ItemCardType[]>([]);

  console.log(productsInDrawer);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
  }

  const handleAddToCart = (clickedItem: ItemCardType) => {
    setProductsInDrawer(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }

      return [...prev, { ...clickedItem, amount: 1 }]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    console.log('delete')
  }

  return (
    <Wrapper>
      <Drawer
        isOpen={drawerActive}
        handleClose={setDrawerActive}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        items={productsInDrawer}
      />
      <IconShop onClick={() => setDrawerActive(true)}>
        <AiOutlineShoppingCart />
      </IconShop>
      <GridList>
        {products && products.map(item => (
          <CartItem
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </GridList>
    </Wrapper>

  );
}

export default App;
