import React from "react";
import "./Header.css";
import  { Search, ShoppingBasket }  from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
    
      <div className="header__search">
          <input type="text" className="header__searchInput" />
          <Search className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Anum</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasket  className=""/>
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>


      </div>

    </nav>
  );
};

export default Header;
