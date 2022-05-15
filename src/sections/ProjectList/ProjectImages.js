import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

import classes from "./ProjectImages.module.css";

const ProjectImages = (props) => {
  const imageList = props.images;
  let imageClassName;
  props.type === 'mobile' ? imageClassName = classes.mobileImage : imageClassName = classes.desktopImage;

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
          // variants={leftColumnAnimation}
          animate="animate"
          className={classes.leftColumn}
        >
          <Parallax speed={90}>
            <img className={imageClassName} src={imageList[0]} alt="template" />
          </Parallax>
          <Parallax speed={70}>
            <img
              className={`${imageClassName} ${classes.imgL2}`}
              src={imageList[2]}
              alt="template"
            />
          </Parallax>
        </motion.div>
        <motion.div
          // variants={rightColumnAnimation}
          initial="initial"
          animate="animate"
          className={classes.rightColumn}
        >
          <Parallax speed={50}>
            <img className={imageClassName} src={imageList[1]} alt="template" />
          </Parallax>
          {imageList[3] === undefined ? (
            " "
          ) : (
            <Parallax speed={60}>
              <img
                className={`${imageClassName} ${classes.imgR2}`}
                src={imageList[3]}
                alt="template"
              />
            </Parallax>
          )}
        </motion.div>
      </div>
    </ParallaxProvider>
  );
};

export default ProjectImages;
