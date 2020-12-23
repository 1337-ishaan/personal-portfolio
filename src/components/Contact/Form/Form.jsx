import React, { useState } from "react";
import emailjs from "emailjs-com";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useSnackbar } from "react-simple-snackbar";

const Form = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const sendEmail = (e) => {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    if (!name || !email || !message) {
      openSnackbar("Please fill out all the fields.");
      return;
    }
    if (!emailRegex.test(email)) {
      openSnackbar("Please enter a valid email.");
      return;
    }
    emailjs
      .sendForm(
        "service_c8k8tpm",
        "template_yicopbg",
        document.getElementById("myForm"),
        "user_g9ckXS2cF7YuNBhSql7ZQ"
      )
      .then(
        (result) => {
          openSnackbar("Mail Sent, I shall get back to you within 24h :)");
          console.log(result.text);
        },
        (error) => {
          openSnackbar("Some error occured :(");
          console.log(error.text);
        }
      );
    console.log(name, email, message);
  };
  return (
    <>
      <div className="u-center-content hello__text">SAY HELLO!</div>

      <form
        className="container__contact_form"
        id="myForm"
        onSubmit={sendEmail}
      >
        <div className="container__contact_form_grid">
          <div className="container__contact_form_1">
            <input
              className=" u-form-input container__contact_form_name_input"
              type="text"
              name="user_name"
              pattern="^[-a-zA-Z]+$"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <label className="u-label-text">Name</label>
            <input
              placeholder="Email"
              className="u-form-input container__contact_form_email_input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
            />
            <label className="u-label-text">Email</label>
          </div>
          <div className="container__contact_form_1">
            <textarea
              className="u-form-input container__contact_form_message_input"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Let me know, how can I help you."
            />
            <label className="u-label-text u-label-text-message">
              Let me know, how can I help you.
            </label>
          </div>
        </div>
        <div className="container__contact_form_2">
          <input
            type="submit"
            value="Email"
            onClick={sendEmail}
            className="container__contact_form_button"
          />
          {/* Email */}
          {/* </a> */}
          <div className="or__text">OR</div>
          <SocialMedia />
        </div>
      </form>
    </>
  );
};

export default Form;
