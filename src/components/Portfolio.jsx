import React from "react";

import ljmDev from "../img/project-mockups/levijmason.png";
import pomodoro from "../img/project-mockups/Pomodoro.png";
import foxroyale from "../img/project-mockups/FoxRoyale.png";
import siyla from "../img/project-mockups/Siyla.png";
import tripthefan from "../img/project-mockups/TripTheFan.png";
import whiskyoutlaws from "../img/project-mockups/WhiskyOutlaws.png";
import flashcards from "../img/project-mockups/Flashcards.png";

function Portfolio() {
  return (
    <div class="container" className="Projects">
      <section id="projects">
        <h2>PROJECTS</h2>
        <br />
        <p class="lead">
          Here are some of the projects I've been fortunate enough to work on.
          In the future I would love to work with clients on more front-end
          focused projects, and small full-stack projects.
        </p>
        <br />

        <div class="row">
          <div class="col">
            <div class="card-deck">
              {/* LEVIJMASON.DEV */}
              <div class="card text-white bg-dark">
                <img src={ljmDev} class="card-img" alt="Done sponge" />
                <div class="card-body">
                  <h5 class="card-title">levijmason.dev</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    React, Bootstrap, JavaScript
                  </h6>
                  <p class="card-text">
                    This is my personal website that you're looking at right
                    now. In building this project, I learned how to build a
                    responsive site using HTML, CSS, React, and Bootstrap.
                  </p>
                  <a
                    href="#home"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/levijmason/levijmason"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* POMODORO TIMER */}
              <div class="card text-white bg-dark">
                <img src={pomodoro} class="card-img" alt="Done sponge" />
                <div class="card-body">
                  <h5 class="card-title">Pomodoro Timer</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    React, Bootstrap, JavaScript
                  </h6>
                  <p class="card-text">
                    This is an application that generates two timers, one for
                    focusing on a task and one for taking a break, based on the
                    Pomodoro Technique developed by Francesco Cirillo.
                  </p>
                  <a
                    href="https://pomodoro-timer-levijmason.vercel.app/"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/levijmason/Pomodoro-Timer"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* FLASHCARDS */}
              <div class="card text-white bg-dark">
                <img src={flashcards} class="card-img" alt="Done sponge" />
                <div class="card-body">
                  <h5 class="card-title">Flashcards</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    React, Bootstrap, JavaScript
                  </h6>
                  <p class="card-text">
                    An application that allows users to create and delete decks
                    containing double sided flashcards. In this app, I built the
                    entire front end using the stack listed above.
                  </p>
                  <a
                    href="https://flashcards-levijmason.vercel.app"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/levijmason/Flashcards"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
              {/* END ROW */}
            </div>
          </div>
        </div>

        <br />

        <div class="row">
          <div class="col">
            <div class="card-deck">
              {/* SIYLA */}
              <div class="card text-white bg-dark">
                <img src={siyla} class="card-img" alt="Done sponge" />
                <div class="card-body">
                  <h5 class="card-title">Siyla</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Squarespace, JavaScript, CSS
                  </h6>
                  <p class="card-text">
                    A website and store for a hip-hop artist based out of
                    Oklahoma City, OK. This website was built using Squarespace
                    with custom JavaScript and CSS.
                  </p>
                  <a
                    href="https://www.siyla.co"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="#home"
                    class="btn btn-link disabled"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* FOX ROYALE */}
              <div class="card text-white bg-dark">
                <img src={foxroyale} class="card-img" alt="Done sponge" />
                <div class="card-body">
                  <h5 class="card-title">Fox Royale</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Squarespace, JavaScript, CSS
                  </h6>
                  <p class="card-text">
                    This is a website I built for a band from Joplin, MO, using
                    Squarespace and then customized with JavaScript and CSS.
                  </p>
                  <a
                    href="https://www.wearefoxroyale.com"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="#home"
                    class="btn btn-link disabled"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* TRIP THE FAN */}
              <div class="card text-white bg-dark">
                <img src={tripthefan} class="card-img" alt="Done sponge" />
                <div class="card-body">
                  <h5 class="card-title">tripthe.fan</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Squarespace, JavaScript, CSS
                  </h6>
                  <p class="card-text">
                    A website for an artist management firm that I built using
                    Squarespace and customized with JavaScript and CSS.
                  </p>
                  <a
                    href="https://www.tripthe.fan"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="#home"
                    class="btn btn-link disabled"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* WHISKY OUTLAWS */}
              <div class="card text-white bg-dark">
                <img src={whiskyoutlaws} class="card-img" alt="Done sponge" />
                <div class="card-body">
                  <h5 class="card-title">Whisky Outlaws</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Squarespace, JavaScript, CSS
                  </h6>
                  <p class="card-text">
                    This is a website that I built using Squarespace and
                    implemented custom CSS and JavaScript for a country band
                    based out of Joplin, MO.
                  </p>
                  <a
                    href="https://www.whiskyoutlaws.com"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="#home"
                    class="btn btn-link disabled"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
              {/* END ROW */}
            </div>
          </div>
        </div>

        <br />

        <div class="row">
          <div class="col">
            <div class="card-deck">
              {/* GRUBDASH */}
              <div class="card text-white bg-dark">
                {/* <img src={ljmDev} class="card-img" alt="Done sponge" /> */}
                <div class="card-body">
                  <h5 class="card-title">GrubDash</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    JavaScript, Express, and PostgreSQL
                  </h6>
                  <p class="card-text">
                    In this application I built a backend server for a food
                    delivery site.
                  </p>
                  <a
                    href="#home"
                    class="btn btn-link disabled"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/levijmason/GrubDash"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* WE LOVE MOVIES */}
              <div class="card text-white bg-dark">
                {/* <img src={pomodoro} class="card-img" alt="Done sponge" /> */}
                <div class="card-body">
                  <h5 class="card-title">We Love Movies</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    JavaScript, Express, and PostgreSQL
                  </h6>
                  <p class="card-text">
                    In this application I built a backend server for a movie
                    streaming site.
                  </p>
                  <a
                    href="#home"
                    class="btn btn-link disabled"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/levijmason/We-Love-Movies"
                    class="btn btn-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
              {/* END ROW */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
