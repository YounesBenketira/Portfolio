import React from "react";
import { motion } from "framer-motion";

import { Button } from "../../components";
import classes from "./ProjectInfo.module.css";

const ProjectInfo = (props) => {
  const title = props.displayedProjectInfo["title"];
  const languages = props.displayedProjectInfo["langs"];
  const desc = props.displayedProjectInfo["desc"];
  const link = props.displayedProjectInfo["link"];

  const parentAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childAnimation = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={parentAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${classes.projectInfo}`}
    >
      <motion.div variants={parentAnimation} className={classes.title}>
        {[...title].map((char) => {
          let letterDiv;
          {
            char === " "
              ? (letterDiv = (
                  <motion.div variants={childAnimation}>&nbsp;</motion.div>
                ))
              : (letterDiv = (
                  <motion.div variants={childAnimation}>{char}</motion.div>
                ));
          }
          return letterDiv;
        })}
      </motion.div>
      <motion.div variants={parentAnimation} className={classes.langs}>
        {languages.map((word) => {
          return (
            <motion.div variants={childAnimation}>{word}&nbsp;</motion.div>
          );
        })}
      </motion.div>
      <motion.div variants={parentAnimation} className={classes.desc}>
        <motion.div variants={childAnimation}>{desc}</motion.div>
      </motion.div>
      <motion.div variants={parentAnimation} className={classes.desc}>
        <motion.div variants={childAnimation} className={classes.btnWrapper}>
          <Button
            className={classes.btn}
            onClick={() => {
              window.location.assign(link);
            }}
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectInfo;
