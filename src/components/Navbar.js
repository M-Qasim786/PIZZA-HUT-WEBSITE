import React,{useState} from "react";
import './Navbar.css';
import logo from "../image/logo.png";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <ShoppingBasketIcon className='logo_style' />
        </div>
        <ul className={isMobile?'nav_link_mobile' : 'nav_links'} onClick={()=>setIsMobile(false)}>
         <NavLink to='/' className='home' activeClassName='active_class' exact>
           <li>Home</li>
         </NavLink>
         <NavLink to='/about' className='about' activeClassName='active_class' exact>
           <li>About</li>
         </NavLink>
         <NavLink to='/menu' className='menu' activeClassName='active_class' exact>
           <li>Menu</li>
         </NavLink>
         <NavLink to='/contact' className='contact' activeClassName='active_class' exact>
           <li>Contact</li>
         </NavLink>
        </ul>
        <button className="mobile_menu_icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
        </button>
        <ShoppingCartIcon className='shope_icon'/>(2)
      </nav>
    </>
  );
};

export default Navbar;
