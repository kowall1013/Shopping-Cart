import { useEffect, useState } from "react";
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from "./components/CartItem";
import { COLORS } from './constants';
import Drawer from "./components/Drawer";
import DisplayNumberOfItems from './components/DisplayNumberOfItems';

const API = "https://fakestoreapi.com/products";

export type ItemCardType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number;
};

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
`;

function App() {
  const [products, setProducts] = useState<ItemCardType[]>([])
  const [drawerActive, setDrawerActive] = useState(false);
  const [productsInDrawer, setProductsInDrawer] = useState([] as ItemCardType[]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
  }

  const getTotalItems = (items: ItemCardType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

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
    setProductsInDrawer(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item]
        }
      }, [] as ItemCardType[])
    )
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
        <DisplayNumberOfItems itemsInDrawe={getTotalItems(productsInDrawer)} />
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
