import React from "react";

import logo from "../img/me.PNG";
import github from "../img/GitHub.PNG";
import instagram from "../img/Instagram.PNG";
import twitter from "../img/Twitter.PNG";
import linkedin from "../img/LinkedIn.PNG";

function Navigation() {
  return (
    <header class="container" className="Navigation">
      <nav class="navbar navbar-default navbar-fixed-top navbar-expand-md">

        {/* LOGO */}

        <a class="navbar-brand" href="#home">
          <img
            src={logo}
            alt="Levi J Mason profile pic"
            class="avi-logo"
          />
        </a>

        {/* SITE TITLE */}

        <h1 class="navbar-brand">LEVI J MASON</h1>

        {/* NAVIGATION LINKS */}

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="#home">
              home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" href="#about">
              about
            </a>
            <a class="nav-link" href="#projects">
              projects
            </a>
            <a class="nav-link" href="#contact">
              contact
            </a>
          </div>
        </div>

        {/* SOCIAL LINKS */}

        <div class="navbar socials">
          <a href="https://www.github.com/levijmason">
            <img src={github} alt="GitHub logo" class="social"/>
          </a>

          <a href="https://www.linkedin.com/levijmason">
            <img
              src={linkedin}
              alt="LinkedIn logo"
              class="social"
            />
          </a>

          <a href="https://www.instagram.com/levijmason">
            <img
              src={instagram}
              alt="Instagram logo"
              class="social"
            />
          </a>

          <a href="https://www.twitter.com/levijmason">
            <img
              src={twitter}
              alt="Twitter logo"
              class="social"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
