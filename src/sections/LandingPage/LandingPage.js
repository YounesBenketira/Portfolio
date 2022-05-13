import { motion } from "framer-motion";
import React from "react";

import classes from "./LandingPage.module.css";

const LandingPage = () => {
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
      variants={container}
      initial='initial'
      animate='animate'
      exit='exit'
      className={`section ${classes.wrapper}`}
    >
      <motion.div variants={item} className={classes.name}>Younes Benketira</motion.div>
      <motion.div variants={item} className={classes.jobTitle}>Full Stack Developer</motion.div>
    </motion.section>
  );
};

export default LandingPage;
