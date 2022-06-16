import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import classes from "./FitNPreview.module.css";

const FitNPreview = () => {
  const projectList = useSelector((state) => state.projectDataList);
  const scrollPositionPercentage = useSelector(
    (state) => state.scrollPositionPercentage
  );

  return (
    <div className={classes.imagesWrapper}>
      <motion.div className={classes.leftColumn}>
        <motion.img
          animate={{
            y: -(scrollPositionPercentage * 5),
          }}
          src={projectList[0]["images"][0]}
          alt="template"
        />
        <motion.img
          animate={{
            y: -(scrollPositionPercentage * 20),
          }}
          src={projectList[0]["images"][2]}
          alt="template"
          className={classes.leftImg2}
        />
      </motion.div>
      <motion.div className={classes.rightColumn}>
        <motion.img
          animate={{
            y: -(scrollPositionPercentage * 5),
          }}
          src={projectList[0]["images"][1]}
          alt="template"
        />
      </motion.div>
    </div>
  );
};

export default FitNPreview;
