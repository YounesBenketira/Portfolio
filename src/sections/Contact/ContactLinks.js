import { motion } from "framer-motion";
import React from "react";

import classes from "./ContactLinks.module.css";

const ContactLinks = (props) => {
  return (
    <motion.div variants={props.variants} className={classes.wrapper}>
      <a href="https://twitter.com/younesbenketira">Twitter</a>
      <a href="https://github.com/YounesBenketira">Github</a>
      <a href="https://www.linkedin.com/in/younes-benketira-a1869519a/">LinkedIn</a>
    </motion.div>
  );
};

export default ContactLinks;
