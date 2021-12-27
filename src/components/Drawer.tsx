import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ItemCardType } from '../App';
import DrawerItem from './DrawerItem';
import { COLORS, QUERIES } from '../constants';

type DrawerOverlayProps = {
  isOpen: boolean;
}

const DrawerOverlay = styled.div<DrawerOverlayProps>`
  position: fixed;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%; 
  z-index: 2;
  cursor: pointer;
`

const DrawerInner = styled.aside<DrawerOverlayProps>`
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(50ch)'};

  @media ${QUERIES.tabletAndUp} {
    width: 60ch;
  }
`;

const IconShop = styled.div`
  position: fixed;
  top: 8px;
  right: 8px;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${COLORS.primary.navy};
`;

type DrawerProps = {
  isOpen: boolean;
  handleClose: (close: boolean) => void;
  handleAddToCart: (clickedItem: ItemCardType) => void;
  handleRemoveFromCart: (id: number) => void;
  items: ItemCardType[];
}

function Drawer({
  isOpen,
  handleClose,
  handleAddToCart,
  handleRemoveFromCart,
  items
}: DrawerProps): JSX.Element {
  return (
    <DrawerOverlay isOpen={isOpen}>
      <DrawerInner isOpen={isOpen}>
        <IconShop onClick={() => handleClose(false)}>
          <AiOutlineCloseCircle />
        </IconShop>
        <ul>
          <h2>Your shopping Cart</h2>
          {items && items.map(item => (
            <DrawerItem
              item={item}
              addToCart={handleAddToCart}
            />
          ))}
        </ul>
      </DrawerInner>
    </DrawerOverlay>
  )
};

export default Drawer;