import React from "react";

const Skills = () => {
  return (
    <div className="skill-section">
      <div className="title-heading">My Skills</div>
      <div className=" d-flex flex-wrap row g-5">
        <div className="col-sm-6">
          <h5>Languages</h5>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h5>Frameworks</h5>
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Node</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h5>Tools</h5>
          <ul>
            <li>Github</li>
            <li>Chrome DevTools</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>Unity</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h5>Design</h5>
          <ul>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Prototyping</li>
            <li>Wireframing</li>
            <li>User Testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
