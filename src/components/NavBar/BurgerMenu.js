import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import classes from "./BurgerMenu.module.css";

const BurgerMenu = (props) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerMenuOpen = (
    <>
      <button
        onClick={() => {
          setShowBurgerMenu(false);
        }}
        className={classes.burgerMenuBtn}
      >
        <AiOutlineClose />
      </button>
      <div className={classes.burgerMenuLinks}>{props.menu}</div>
    </>
  );

  const burgerMenuClosed = (
    <button
      onClick={() => {
        setShowBurgerMenu(true);
      }}
      className={classes.burgerMenuBtn}
    >
      <AiOutlineMenu />
    </button>
  );

  return (
    <div className={classes.burgerMenuWrapper}>
      {showBurgerMenu ? burgerMenuOpen : burgerMenuClosed}
    </div>
  );
};

export default BurgerMenu;
