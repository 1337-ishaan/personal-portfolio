import React from "react";

const SocialMedia = () => {
  return (
    <div className="container__social">
      <a className="u-media-icon" target="_blank" href="https://m.facebook.com/ishaan.parmar">
        <i class="fa_contact fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a className="u-media-icon" target="_blank" href="https://github.com/1337-ishaan/">
        <i class="fa_contact fa fa-github" aria-hidden="true"></i>
      </a>
      <a className="u-media-icon" target="_blank" href="https://www.instagram.com/ishaan.js/">
        <i class="fa_contact fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a className="u-media-icon" href="tel:+917021173513">
        <i class="fa_contact fa fa-phone" aria-hidden="true"></i>
      </a>
      {/* <a className="u-media-icon" href="mailto:1337.ishaan@gmail.com">
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a> */}
    </div>
  );
};

export default SocialMedia;
