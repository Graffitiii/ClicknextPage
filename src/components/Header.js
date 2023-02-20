import Navbar from './Navbar';
import React, {useState} from 'react';
import { FiMenu , FiX } from "react-icons/fi";

const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);
  return (
    <div className='testfixed'>
      <div className="nav-area">
        <img className='logo' src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/clicknext_logo2x.png?v=202012190947'/>
        <div className='mobile-menu' onClick={handleClick}>
          {click ? (
                <FiX/>
          ) : (
                <FiMenu/>
          )}
        </div>
      </div>
      <Navbar click={click}/>
    </div>
  );
};

export default Header;