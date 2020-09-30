import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
  <div className={`defaultFooter ${footerClass}`}>
    <p>
      View site source on{" "}
      <a href="https://github.com/ethioeph/new_website" target="_blank">
        Github
      </a>
    </p>
  </div>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
