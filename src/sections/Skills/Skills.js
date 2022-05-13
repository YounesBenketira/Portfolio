import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import classes from "./Skills.module.css";

const Skills = () => {
  const scrollPositionPercentage = useSelector(
    (state) => state.scrollPositionPercentage
  );
  const titleTextTranslateX = (scrollPositionPercentage - 75) * 5;

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 100,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <section className={`section ${classes.wrapper}`}>
      <div
        className={classes.title}
        style={{ transform: `translateX(${titleTextTranslateX}vw)` }}
      >
        Skills
      </div>
      <div className={classes.skillListWrapper}>
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            exit="exit"
            key={0}
            className={classes.skillList}
          >
            <motion.p variants={item} className={classes.skillListHeader}>
              Languages
            </motion.p>
            <motion.p variants={item}>HTML</motion.p>
            <motion.p variants={item}>CSS</motion.p>
            <motion.p variants={item}>Javascript</motion.p>
            <motion.p variants={item}>Dart</motion.p>
            <motion.p variants={item}>Java</motion.p>
            <motion.p variants={item}>Python</motion.p>
            <motion.p variants={item}>PHP</motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            exit="exit"
            key={1}
            className={classes.skillList}
          >
            <motion.p variants={item} className={classes.skillListHeader}>
              Frameworks
            </motion.p>
            <motion.p variants={item}>React.js</motion.p>
            <motion.p variants={item}>Next.js</motion.p>
            <motion.p variants={item}>Node.js</motion.p>
            <motion.p variants={item}>Flutter</motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            exit="exit"
            key={2}
            className={classes.skillList}
          >
            <motion.p variants={item} className={classes.skillListHeader}>
              Dev Tools
            </motion.p>
            <motion.p variants={item}>Firebase</motion.p>
            <motion.p variants={item}>Github</motion.p>
            <motion.p variants={item}>AWS</motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
