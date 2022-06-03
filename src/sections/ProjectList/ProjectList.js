import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import ProjectInfo from "./ProjectInfo";
import ProjectImages from "./ProjectImages";
import classes from "./ProjectList.module.css";

const ProjectList = () => {
  const displayedProject = useSelector((state) => state.displayedProject);
  const isProjectMounted = useSelector((state) => state.isProjectMounted);
  const projectList = useSelector((state) => state.projectDataList);

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
        <ProjectImages key={projectList[0]["key"]} images={projectList[0]["images"]} type={projectList[0]["type"]} />
        <ProjectImages key={projectList[1]["key"]} images={projectList[1]["images"]} type={projectList[1]["type"]} />
      </div>
    </section>
  );
};

export default ProjectList;
