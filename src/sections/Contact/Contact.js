import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../../components/Button/Button";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import classes from "./Contact.module.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const contactBtnHandler = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  const container = {
    initial: {
      y: -200,
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      y:0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 3,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      y: -200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
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
    <motion.section
      variants={container}
      initial="initial"
      whileInView="whileInView"
      animate="animate"
      exit="exit"
      className={`section ${classes.wrapper}`}
    >
      <AnimatePresence>
        {showForm ? (
          <ContactForm
            key={Math.random()}
            contactBtnHandler={contactBtnHandler}
          />
        ) : (
          <motion.div key={Math.random()} className="section" variants={item}>
            <div className={classes.header}>Interested in working with me?</div>
            <Button onClick={contactBtnHandler} className={classes.btn}>
              Send Email
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactLinks variants={item} />
    </motion.section>
  );
};

export default Contact;
