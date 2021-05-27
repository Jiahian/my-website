import React, { Fragment } from "react";

const Featured = () => {
  return (
    <Fragment>
      <div id="featured" class="featured-section">
        <div className="title-heading">Featured Projects</div>
        <div className="d-flex flex-wrap">
          <div className="col-lg-6 card">
            <img
              src="..."
              class="card-img-top"
              alt="career-guidance-platform-img"
            ></img>
            <div className="card-body">
              <h3>Career Guidance Platform</h3>
              <p>
                An interactive career pathways to chart out individuals' career
                journey and career-tailored course recommendations within NTU
                EEE faculty. Includes Google Dialogflow Chatbot to enhance
                career search experience.
              </p>
              <ul>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Vis.js</li>
                <li>Google Dialogflow</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Justcloud.co</h3>
            <p>
              A website introducing Justcloud CRM software that I had built
              during my internship. 7 webpages contributed by me are found{" "}
              <a
                className="link"
                href="https://www.justcloud.co"
                target="blank"
              >
                here
              </a>
              .
            </p>
            <ul>
              <li>PHP Laravel</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
              <li>MySql</li>
            </ul>
          </div>
          <div>
            <h3>Shopee Product & Design Challenge 2021</h3>
            <p>
              Ideated 3 creative solutions for current Shopee's search and
              recommendations user interface, namely Trending Searches,
              Hover-over-app Personal Shopping Assistant and Explore Highly
              Aesthetic Visuals of Products on Shopee. Emerged as top 30 out of
              over 700 teams.
            </p>
            <ul>
              <li>Figma</li>
              <li>Prototyping</li>
              <li>User Research</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Featured;
