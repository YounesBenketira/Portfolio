import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import FitNPreview from "./FitNPreview";
import ProjectInfo from "./ProjectInfo";

import classes from "./ProjectList.module.css";

const NewProjectList = () => {
  const isProjectMounted = useSelector((state) => state.isProjectMounted);
  const displayedProject = useSelector((state) => state.displayedProject);
  const projectList = useSelector((state) => state.projectDataList);
  const scrollPositionPercentage = useSelector(
    (state) => state.scrollPositionPercentage
  );

  const { ref, inView } = useInView({});

  const visualGoAnimation1 = useAnimation();
  const visualGoAnimation2 = useAnimation();
  const visualGoAnimation3 = useAnimation();
  const visualGoAnimation4 = useAnimation();
  useEffect(() => {
    if (inView) {
      visualGoAnimation1.start({
        y: -((scrollPositionPercentage - 45) * 30),
        opacity: 1,
      });
      visualGoAnimation2.start({
        y: -((scrollPositionPercentage - 45) * 40),
        opacity: 1,
      });
      visualGoAnimation3.start({
        y: -((scrollPositionPercentage - 45) * 20),
        opacity: 1,
      });
      visualGoAnimation4.start({
        y: -((scrollPositionPercentage - 50) * 30),
        opacity: 1,
      });
    } else {
      visualGoAnimation1.start({
        y: 0,
        opacity: 0,
      });
      visualGoAnimation2.start({
        y: "-100vh",
        opacity: 0,
      });
      visualGoAnimation3.start({
        y: "-100vh",
        opacity: 0,
      });
      visualGoAnimation4.start({
        y: "-100vh",
        opacity: 0,
      });
    }
  }, [inView, scrollPositionPercentage]);

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
      <FitNPreview />
      <div className={classes.imagesWrapper}>
        <motion.div
          ref={ref}
          animate={{
            x: 20,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className={classes.leftColumn}
        >
          <motion.img
            animate={visualGoAnimation1}
            src={projectList[1]["images"][0]}
            alt="template"
          />
          <motion.img
            animate={visualGoAnimation2}
            src={projectList[1]["images"][2]}
            alt="template"
            className={classes.leftImg2}
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={{
            x: -20,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className={classes.rightColumn}
        >
          <motion.img
            animate={visualGoAnimation3}
            src={projectList[1]["images"][1]}
            alt="template"
          />
          <motion.img
            animate={visualGoAnimation4}
            src={projectList[1]["images"][3]}
            alt="template"
            className={classes.rightImg2}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NewProjectList;
