import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";

import classes from "./ProjectImages.module.css";
import { useInView } from "react-intersection-observer";

const ProjectImages = (props) => {
  const imageList = props.images;
  const scrollPositionPercentage = useSelector(
    (state) => state.scrollPositionPercentage
  );

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, scrollPositionPercentage]);

  let imageClassName;
  props.type === "mobile"
    ? (imageClassName = classes.mobileImage)
    : (imageClassName = classes.desktopImage);

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

  const speed1 =
    scrollPositionPercentage < 56
      ? scrollPositionPercentage * 10
      : scrollPositionPercentage * 5;
  const speed2 =
    scrollPositionPercentage < 50
      ? scrollPositionPercentage * 1
      : scrollPositionPercentage * 10;
  const speed3 =
    scrollPositionPercentage < 50
      ? scrollPositionPercentage * 20
      : scrollPositionPercentage * 1;

  const speedAnimation1 = {
    visible: { y: -speed1, opacity: 1 },
    hidden: { opacity: 0 },
  };

  const speedAnimation2 = {
    visible: { y: -speed2, opacity: 1 },
    hidden: { opacity: 0 },
  };

  const speedAnimation3 = {
    visible: { y: -speed3, opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <ParallaxProvider>
      <div className={classes.imagesWrapper}>
        <motion.div
          variants={leftColumnAnimation}
          animate="animate"
          className={classes.leftColumn}
        >
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={speedAnimation1}
          >
            <img className={imageClassName} src={imageList[0]} alt="template" />
          </motion.div>
          <motion.div ref={ref} animate={controls} variants={speedAnimation3}>
            <img
              className={`${imageClassName} ${
                imageList[3] === undefined ? classes.imgL2Mobile : classes.imgL2
              }`}
              src={imageList[2]}
              alt="template"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={rightColumnAnimation}
          initial="initial"
          animate="animate"
          className={classes.rightColumn}
        >
          <motion.div ref={ref} animate={controls} variants={speedAnimation2}>
            <img className={imageClassName} src={imageList[1]} alt="template" />
          </motion.div>
          {imageList[3] === undefined ? (
            " "
          ) : (
            <motion.div ref={ref} animate={controls} variants={speedAnimation1}>
              <img
                className={`${imageClassName} ${classes.imgR2}`}
                src={imageList[3]}
                alt="template"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </ParallaxProvider>
  );
};

export default ProjectImages;
