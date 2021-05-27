import React, { Component, Fragment } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-light fixed">
          <div class="container-fluid p-0">
            <a class="navbar-brand" href="#">
              JX.
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#featured">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a class="btn btn-outline-violet" href="#" role="button">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
