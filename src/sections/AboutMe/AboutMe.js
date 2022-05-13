import React from "react";
import { useSelector } from "react-redux";

import classes from "./AboutMe.module.css";

const AboutMe = () => {
  const scrollPositionPercentage = useSelector(state => state.scrollPositionPercentage);
  const titleTextTranslateX = (scrollPositionPercentage - 5) * 5;

  return (
    <section className={`section ${classes.wrapper}`}>
      <div className={classes.title} style={{transform: `translateX(${titleTextTranslateX}vw)`}}>About Me</div>
      <div className={classes.text}>
        Passionate developer who is actively looking for new skills to pick up
        and contribute to something bigger than themselves. Will easily be up to
        date with latest technologies with confident self-teaching skills.
      </div>
    </section>
  );
};
export default AboutMe;
