import React from "react";
import { motion } from "framer-motion";

import { Button } from "../../components";
import classes from "./ProjectInfo.module.css";

const ProjectInfo = (props) => {
  const title = props.displayedProjectInfo["title"];
  const languages = props.displayedProjectInfo["langs"];
  const desc = props.displayedProjectInfo["desc"];
  const link = props.displayedProjectInfo["link"];

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.1,
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
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      key={Math.random()}
      className={`${classes.projectInfo}`}
    >
      <motion.div key={Math.random()} variants={container} className={classes.title}>
        {[...title].map((char) => {
          if (char === " ") {
            return (
              <motion.div key={Math.random()} variants={item}>
                &nbsp;
              </motion.div>
            );
          }
          return (
            <motion.div key={Math.random()} variants={item}>
              {char}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div key={Math.random()} variants={container} className={classes.langs}>
        {languages.map((word) => {
          return (
            <motion.div key={Math.random()} variants={item}>
              {word}&nbsp;
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div variants={container} className={classes.desc}>
        <motion.div key={Math.random()} variants={item}>{desc}</motion.div>
      </motion.div>
      <motion.div variants={container} className={classes.desc}>
        <motion.div key={Math.random()} variants={item} className={classes.btnWrapper}>
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
