import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import BurgerMenu from "./BurgerMenu";
import classes from "./NavBar.module.css";

let prevScrollPosPercentage = 0;

const NavBar = () => {
  const scrollPositionPercentage = useSelector(
    (state) => state.scrollPositionPercentage
  );
  let isScrollingDown = scrollPositionPercentage > prevScrollPosPercentage;
  prevScrollPosPercentage = scrollPositionPercentage;

  const scrollToPos = (scrollPos) => {
    window.scroll(0, scrollPos);
  };

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      x: 200,
    },
  };

  const menu = [
    <Button
      key={0}
      onClick={() => {
        scrollToPos(0);
      }}
      className={classes.btn}
      variants={item}
    >
      Home
    </Button>,
    <Button
      key={1}
      onClick={() => {
        scrollToPos(window.innerHeight * 0.75);
      }}
      className={classes.btn}
      variants={item}
    >
      About Me
    </Button>,
    <Button
      key={2}
      onClick={() => {
        scrollToPos(window.innerHeight * 1.4);
      }}
      className={classes.btn}
      variants={item}
    >
      Projects
    </Button>,
    <Button
      key={3}
      onClick={() => {
        scrollToPos(window.innerHeight * 3.7);
      }}
      className={classes.btn}
      variants={item}
    >
      Skills
    </Button>,
    <Button
      key={4}
      onClick={() => {
        scrollToPos(window.innerHeight * 10);
      }}
      className={classes.btn}
      variants={item}
    >
      Contact Me
    </Button>,
  ];

  return (
    <>
      <motion.div
        animate={
          isScrollingDown
            ? {
                y: -65,
                transition: {
                  duration: 1,
                },
              }
            : {
                y: 0,
                transition: {
                  duration: 1,
                },
              }
        }
        className={`${classes.wrapper}`}
      >
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`${classes.navbar}`}
        >
          {menu}
        </motion.div>
      </motion.div>
      <BurgerMenu menu={menu} />
    </>
  );
};

export default NavBar;
