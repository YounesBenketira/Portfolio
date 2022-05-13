import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";


import { LandingPage, AboutMe, ProjectList, Skills, Contact } from "./sections";
import { NavBar } from "./components";
import { scrollActions } from "./store/index";

import classes from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  const scrollHandler = useCallback(() => {
    dispatch(scrollActions.updateState(window.pageYOffset));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
      <div className={classes.rootDiv}>
        <NavBar />
        <LandingPage />
        <AboutMe />
        <ProjectList/>
        <Skills />
        <Contact />
      </div>
  );
};

export default App;