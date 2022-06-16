import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


import ProjectInfo from "./ProjectInfo";
import ProjectImages from "./ProjectImages";
import classes from "./ProjectList.module.css";
import classes2 from "./ProjectImages.module.css";

const ProjectList = () => {
  const displayedProject = useSelector((state) => state.displayedProject);
  const isProjectMounted = useSelector((state) => state.isProjectMounted);
  const projectList = useSelector((state) => state.projectDataList);

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
    <section className={classes.projectListSection}>
      <AnimatePresence>
        {isProjectMounted ? (
          <ProjectInfo
            key={displayedProject["key"]}
            displayedProjectInfo={displayedProject}
          />
        ) : (
          <div></div>
        )}
      </AnimatePresence>
      <div className={classes.imagesWrapper}>
        {/* {projectList.map((project) => {
          return (
            <ProjectImages key={project["key"]} images={project["images"]} type={project["type"]} />
          );
        })} */}
        {/* <ProjectImages key={projectList[0]["key"]} images={projectList[0]["images"]} type={projectList[0]["type"]} />
        <ProjectImages key={projectList[1]["key"]} images={projectList[1]["images"]} type={projectList[1]["type"]} /> */}
        <ParallaxProvider>
          <div className={classes2.imagesWrapper}>
            <motion.div
              variants={leftColumnAnimation}
              animate="animate"
              className={classes2.leftColumn}
            >
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={speedAnimation1}
              >
                <img
                  className={classes2.mobileImage}
                  src={projectList[0]['images'][0]}
                  alt="template"
                />
              </motion.div>
              <motion.div
                ref={ref}
                animate={controls}
                variants={speedAnimation3}
              >
                <img
                  className={`${classes2.mobileImage} ${classes2.imgL2Mobile}`}
                  src={projectList[0]['images'][1]}
                  alt="template"
                />
              </motion.div>
            </motion.div>
            <motion.div
              variants={rightColumnAnimation}
              initial="initial"
              animate="animate"
              className={classes2.rightColumn}
            >
              <motion.div
                ref={ref}
                animate={controls}
                variants={speedAnimation2}
              >
                <img
                  className={classes2.mobileImage}
                  src={projectList[0]['images'][2]}
                  alt="template"
                />
              </motion.div>
              {projectList[0]['images'][3] === undefined ? (
                " "
              ) : (
                <motion.div
                  ref={ref}
                  animate={controls}
                  variants={speedAnimation1}
                >
                  <img
                    className={`${classes2.mobileImage} ${classes2.imgR2}`}
                    src={projectList[0]['images'][3]}
                    alt="template"
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </ParallaxProvider>
      </div>
    </section>
  );
};

export default ProjectList;
