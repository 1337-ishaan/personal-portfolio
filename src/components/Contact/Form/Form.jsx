import React from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_c8k8tpm",
        "template_yicopbg",
        document.getElementById("#myForm"),
        "user_g9ckXS2cF7YuNBhSql7ZQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="u-center-content hello__text">SAY HELLO!</div>

    <form className="container__contact_form" onSubmit={sendEmail}>
      <div className="container__contact_form_1">
        <input
          className=" u-form-input container__contact_form_name_input"
          type="text"
          required
          name="user_name"
          placeholder="Name"
        />
        <label className="u-label-text">Name</label>
        {/* <input
          placeholder="Phone number"
          className="u-form-input container__contact_form_contact_input"
          type="text"
          name="user_number"
          pattern="[123456789][0-9]{9}"
        />
        <label className="u-label-text">Phone number</label> */}

        <input
          placeholder="Email"
          className="u-form-input container__contact_form_email_input"
          required
          type="email"
          name="user_email"
        />
        <label className="u-label-text">Email</label>
      </div>
      <div className="container__contact_form_1">
        <textarea
          className="u-form-input container__contact_form_message_input"
          name="message"
          required
          placeholder="Let me know, how can I help you."
        />
        <label className="u-label-text">Let me know, how can I help you.</label>

        <a href="#" className="container__contact_form_button">
          Email
        </a>
      </div>
    </form>
</>
  );
};

export default Form;
