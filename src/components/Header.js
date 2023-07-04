import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import workspace from '../images/workspace.jpg';
import '../styles.css';

export default function Header() {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    return (
      <div>
        <header>
        <nav class="navbar navbar-expand-md navbar-light bg-light p-3">
        <div class="container">

          <div class="logo">
            <p class="fs-3">Anna Pierce</p>
            <p class="fs-5 title">web + brand design</p>
          </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {
            setHamburgerIsOpen(!hamburgerIsOpen);
          }}>
                <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarText">
            <div class="navbar-nav ms-auto">
              <div class="navbar-nav ms-auto">
                    <a class="nav-item nav-link" href="#about-section">About</a>
                    <a class="nav-item nav-link" href="#projects-section">Projects</a>
                    <a class="nav-item nav-link" href="#skills-section">Skills</a>
                    <a class="nav-item nav-link" href="#experience-section">Experience</a>
                </div>
              </div>
            </div>
          </div>
      </nav>
      </header>
      <img src={workspace} class="img-fluid hero-img"/>
      </div>
    );
  }