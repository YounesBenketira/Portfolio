import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import classes from "./ProjectImages.module.css";

const ProjectImages = (props) => {
  const imageList = props.images;

  const leftColumnAnimation = {
    animate: {
      x: 20,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const rightColumnAnimation = {
    animate: {
      x: -20,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <ParallaxProvider>
      <div className={classes.imagesWrapper}>
        <motion.div
          variants={leftColumnAnimation}
          animate="animate"
          className={classes.leftColumn}
        >
          <Parallax speed={70}>
            <img src={imageList[0]} alt="template" />
          </Parallax>
          <Parallax speed={50}>
            <img src={imageList[0]} alt="template" className={classes.imgL2} />
          </Parallax>
        </motion.div>
        <motion.div
          variants={rightColumnAnimation}
          initial="initial"
          animate="animate"
          className={classes.rightColumn}
        >
          <Parallax speed={30}>
            <img src={imageList[0]} alt="template" />
          </Parallax>
          <Parallax speed={80}>
            <img src={imageList[0]} alt="template" className={classes.imgR2} />
          </Parallax>
        </motion.div>
      </div>
    </ParallaxProvider>
  );
};

export default ProjectImages;
