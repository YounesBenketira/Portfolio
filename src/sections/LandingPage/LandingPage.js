import React from "react";
import { motion } from "framer-motion";

import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const parentAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const childAnimation = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      variants={parentAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className={`section ${classes.wrapper}`}
    >
      <motion.div variants={childAnimation} className={classes.name}>Younes Benketira</motion.div>
      <motion.div variants={childAnimation} className={classes.jobTitle}>Full Stack Developer</motion.div>
    </motion.section>
  );
};

export default LandingPage;
