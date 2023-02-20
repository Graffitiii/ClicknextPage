// import { click } from '@testing-library/user-event/dist/click';
import { menuItems } from '../menuItems';
import React, {useState} from 'react';
import MenuItems from './MenuItems';




const Navbar = (props) => {
    const depthLevel = 0;
    return (
        <nav>
          
        <ul className={props.click ? "menus active" : "menus"}>
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            if(index == 0){
                return <MenuItems namecl={'homemenu'} items={menu} key={index} depthLevel={depthLevel}/>;
            }
            else{
            return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
            }
          })}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;