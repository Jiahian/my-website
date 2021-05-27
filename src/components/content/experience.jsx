import React, { Fragment } from "react";

const Experience = () => {
  return (
    <Fragment>
      <div id="experience" className="experience-section">
        <div className="title-heading">Work Experience</div>
        <div className="my-5">
          <h5>UI / UX Developer @ Plexure Pte Ltd</h5>
          <p>Aug 2019 – Jan 2020</p>
          <ul>
            <li>
              Constructed mobile-responsive website based on PHP Laravel with 3
              software programming (HTML, CSS, JavaScript) and imported
              open-source libraries (e.g. Bootstrap, JQuery)
            </li>
            <li>
              Setup MySql with Laravel Backend Controller and Ajax to store
              clients' data via online forms.
            </li>
            <li>
              Implemented 3 projects namely Plexure-Freshworks Webpage,
              Justcloud.co and Gigworks.co (landing page)
            </li>
          </ul>
        </div>
        <div className="my-5">
          <h5>Developer @ Dioworks Learning Pte Ltd</h5>
          <p>May 2019 – Aug 2019</p>
          <ul>
            <li>
              Researched and constructed Natural Language Understanding (NLU)
              models for used case identification
            </li>
            <li>
              Designed conversation trees and programmed Chatbots for selected
              learning topics
            </li>
            <li>Debugged errors and enhanced Chatbot User Interface</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
