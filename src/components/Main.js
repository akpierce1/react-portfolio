import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import portrait from "../images/portrait.jpg";
import tyrellCounty from "../images/tyrell-county-website.png";
import NCisland from "../images/nc-beach-website.png";
import portfolio from "../images/portfolio-website.png";
import "../styles.css";

export default function Main() {
  return (
    <div>
      <main>
        {/* About Me Section */}
        <div class="container">
          <div class="row">
            <div class="about-section" id="about-section">
              <h1>About Me</h1>
              <img src={portrait} class="img-fluid portrait" />

              <div class="col">
                <p class="about">
                  Hi, I’m Anna! I am an aspiring web and graphic designer with
                  the intent of creating stylish designs for small businesses!
                  My focus is to help bring companies’ visions to life by
                  blending soulful designs with purposeful solutions. The
                  ambition of my brand is to prepare intentional and artistic
                  website layouts and packaging designs for small brands who
                  value stylish, yet purposeful design.
                </p>

                <p class="about">
                  If you have a business in need of a brand redesign, or if you
                  are starting a new business, I would be thrilled to connect
                  with you to help your vision come to life!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div class="projects-section" id="projects-section">
          <h2>Projects</h2>
          <div class="container mt-3">
            <div class="row">
              <div class="col-md-4">
                <div class="text-center">
                  <a
                    href="https://wcet.waketech.edu/akpierce/WEB125/final-project/home.html"
                    target={"_blank"}
                  >
                    <img src={tyrellCounty} class="img-fluid tyrellCounty" />
                  </a>
                  <p class="website-title">Tyrell County Website</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="text-center">
                  <a
                    href="https://wcet.waketech.edu/akpierce/WEB125/bootstrap/home.html"
                    target={"_blank"}
                  >
                    <img src={NCisland} class="img-fluid NCisland" />
                  </a>
                  <p class="website-title">NC Island Website</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="text-center">
                  <a
                    href="https://akpdesignstudio.com/home.html"
                    target={"_blank"}
                  >
                    <img src={portfolio} class="img-fluid portfolio" />
                  </a>
                  <p class="website-title">Portfolio Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills * Experience Section*/}
        <div class="skills-experience">
          <div class="skills-section text-center" id="skills-section">
            <h3>Skills</h3>
            <p>HTML + CSS</p>
            <p>Bootstrap</p>
            <p>Adobe XD</p>
            <p>Adobe Illustrator</p>
          </div>
          <div class="experience-section text-center" id="experience-section">
            <h4>Experience</h4>
            <p>Brand design for YouTube channel</p>
            <p>Photography Logo</p>
            <p>Business Card Design</p>
            <p>Logo Adjustment</p>
          </div>
        </div>
      </main>
    </div>
  );
}
