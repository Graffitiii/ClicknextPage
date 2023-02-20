import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const MenuItems = ({ items, depthLevel , namecl }) => {
    let ref = useRef();
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

       const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
       };

    return (
      <li className={`menu-items ${namecl}`} ref={ref} onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
        {items.submenu ? (
          <>
            <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}>
              {items.title}{' '}
              {depthLevel > 0 ? <span><BsChevronRight/></span> : <span><BsChevronDown/></span>}
            </button>
            <Dropdown depthLevel={depthLevel} dropdown={dropdown} submenus={items.submenu} />
          </>
        ) : (
          <a  href={items.url} >{items.title}</a>
          
        )}
      </li>
    );
  };

  export default MenuItems;