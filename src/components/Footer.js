import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <h5>Let's get in touch!</h5>

        <a href="https://github.com/akpierce1" target={"_blank"}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/annakpierce/" target={"_blank"}>
          LinkedIn
        </a>

        <p class="copyright">
          Copyright 2023 Anna Pierce. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
