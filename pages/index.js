import React, {useState} from 'react';
import CropComponent from './CropComponent';
import {StoreContext} from '../src/context';

const menuDataRef = ['None','Cucumber', 'SugarCane', 'Carrot'];

export default function Home() {
  let cartData = {menuData:menuDataRef};
  const [cartList, setCartdata] = useState({menuData:menuDataRef});
  const [selectedMenu, setMenu] = useState('');
  const setSelectedMenu = (menu) => {
    setMenu(menu);
  }
  cartData = {...cartData, selectedMenu}
  return (
    <StoreContext.Provider value={{data:cartData, setSelectedMenu:setSelectedMenu}}>
          <div>
      <p>This is the test project</p>
      <CropComponent></CropComponent>
    </div>
    </StoreContext.Provider>
  )
}
