import { useEffect, useState } from "react";
import styled from 'styled-components';
import CartItem from "./components/CartItem";

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
`;

function App() {
  const [products, setProducts] = useState<ItemCardType[]>([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
  }

  return (
    <Wrapper>
      <GridList>
        {products && products.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </GridList>
    </Wrapper>

  );
}

export default App;
