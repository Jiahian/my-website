import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-section text-center py-5">
          <div className="mb-3">
            <a href="mailto:jiahian@hotmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Jiahian">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/chee-jia-hian-1689b6180/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div>Designed & Built by Jia Hian, 2021</div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
// <i className="fab fa-codepen"></i>
