import { motion } from "framer-motion";
import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <motion.div variants={props.variants}>
      <button
        className={`${classes.btn} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </motion.div>
  );
};

export default Button;
