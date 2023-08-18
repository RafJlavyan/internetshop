import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import Order from "./Order";

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);
  let sum = 0
  props.orders.forEach(element => ( sum += parseFloat(element.price)));
  return (
    <header>
      <div>
        <span className="logo">Raf Technologies</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contact</li>
          <li>Cabinet</li>
        </ul>
        <BsFillCartFill
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length <= 0 ? (
              <p style={{ fontSize: 18 }}>No products</p>
            ) : (
              props.orders.map((el) => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
              ))
            )}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
