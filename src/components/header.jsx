import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header id="Intro" class="header-section">
          <div className="title-heading text-uppercase">Hello</div>
          <h1 className="mb-1">I'm Jia Hian.</h1>
          <h1 className="">I build things for the web.</h1>
          <p>
            A front-end software engineer with a passion in UX design to build
            beautiful interfaces and experiences.
          </p>
          <a
            class="btn btn-outline-violet"
            href="mailto:jiahian@hotmail.com"
            role="button"
          >
            Get in touch
          </a>
        </header>
      </Fragment>
    );
  }
}

export default Header;
