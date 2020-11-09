import React from "react";
import GitHubCalander from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import ListProject from "./ListProject";

function Projects() {
  return (
    <>
      <section
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-easing="ease-in-left"
        data-aos-mirror="true"
        data-aos-once="false"
        className="text-center"
        className="text-center project-background "
        id="margin"
      >
        <h2>
          <strong>My Projects</strong>
        </h2>
        <ListProject />
      </section>
      <div
        data-aos="fade-rigth"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        className="container"
        id="margin"
      >
        <h2 className="text-center">
          <strong>I Have Compelted</strong>
        </h2>
        <div className="d-md-flex col-md-10 col-12 justify-content-center container my-4">
          <div className="text-center">
            <div className="circle mx-2 raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">1000+</h2>
            </div>
            <p className="lead">Hours Of Coding</p>
          </div>
          <div className="text-center">
            <div className="circle mx-2 raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">200+</h2>
            </div>
            <p className="lead">DataStructure Problems</p>
          </div>
          <div className="text-center">
            <div className="circle mx-2 raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">100+</h2>
            </div>
            <p className="lead">Git Commits</p>
          </div>
          <div className="text-center">
            <div className="circle mx-2 raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">12+</h2>
            </div>
            <p className="lead">Projects</p>
          </div>
        </div>
      </div>
      <div className="row m-auto container">
        <div
          className=" col-12 col-md-12"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <h2 id="margin" className="text-center m-4">
            <strong>Github</strong>
          </h2>
          <div className="calendar">
            <GitHubCalander
              username="adityashukla0801"
              color="hsl(203, 82%, 33%)"
            >
             
              <ReactTooltip delayShow={50} html />
            </GitHubCalander>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
