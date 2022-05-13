import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "../../components";
import classes from "./ContactForm.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { motion } from "framer-motion";

const ContactForm = (props) => {
  const form = useRef();
  const [showEmailError, setShowEmailError] = useState(false);
  const [showSubjectError, setShowSubjectError] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);
  const [showContactFormError, setShowContactFormError] = useState(false);

  const contactFormHandler = (event) => {
    event.preventDefault();

    const emailInput = event.target[0].value;
    const subjectInput = event.target[1].value;
    const messageInput = event.target[2].value;

    if (
      emailInput.length > 4 &&
      !showEmailError &&
      subjectInput.length > 0 &&
      messageInput.length > 0
    ) {
      emailjs
        .sendForm(
          "service_wwuewx6",
          "template_we2b6vo",
          form.current,
          "dLvfkh36JowpIFGow"
        )
        .then(
          (result) => {
            console.log(result.text);
            props.contactBtnHandler();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setShowContactFormError(true);
    }
  };

  const validateInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    switch (inputName) {
      case "email":
        const hasCharacters =
          inputValue.includes("@") && inputValue.includes(".");
        if (inputValue.length > 4) {
          if (hasCharacters) {
            setShowEmailError(false);
          } else {
            setShowEmailError(true);
          }
        }
        break;
      case "subject":
        setShowSubjectError(!(inputValue.length > 0));
        break;
      case "message":
        setShowMessageError(!(inputValue.length > 0));
        break;
      default:
        break;
    }
  };

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      x: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <motion.form
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={form}
      className={classes.wrapper}
      onSubmit={contactFormHandler}
    >
      <motion.div variants={item} className={classes.rowDiv}>
        <label className={classes.label}>Email</label>
        <input
          type="text"
          className={`${classes.input} ${
            showEmailError ? classes.isInvalid : " "
          }`}
          name="email"
          onChange={validateInput}
        ></input>
        <ErrorMessage show={showEmailError}>
          Please enter a valid Email!
        </ErrorMessage>
      </motion.div>
      <motion.div variants={item} className={classes.rowDiv}>
        <label className={classes.label}>Subject</label>
        <input
          type="text"
          className={`${classes.input} ${
            showSubjectError ? classes.isInvalid : " "
          }`}
          name="subject"
          onChange={validateInput}
        ></input>
        <ErrorMessage show={showSubjectError}>
          Subject cannot be empty!
        </ErrorMessage>
      </motion.div>
      <motion.div variants={item} className={classes.rowDiv}>
        <textarea
          type="text"
          className={`${classes.inputLarge} ${
            showMessageError ? classes.isInvalid : " "
          }`}
          name="message"
          onChange={validateInput}
        ></textarea>
        <ErrorMessage show={showMessageError}>
          Message cannot be empty!
        </ErrorMessage>
        <ErrorMessage show={showContactFormError}>
          There is an error with your provided information
        </ErrorMessage>
      </motion.div>
      <motion.div variants={item} className={classes.btnDiv}>
        <Button
          onClick={(event) => {
            event.preventDefault();
            props.contactBtnHandler();
          }}
          className={classes.btn}
        >
          Cancel
        </Button>
        <Button>Submit</Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
