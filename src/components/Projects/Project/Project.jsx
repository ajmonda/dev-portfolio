import React from "react";
import ProjectHeader from "../ProjectHeader/ProjectHeader";

import "./project.css";

export default function Project() {
  return (
    <div className="project">
      <h4>Spotify Niche</h4>
      <div className="project-detail">
        <div className="project-description">
          <img src="https://i.imgur.com/TlhfGOg.png" alt="" />
          <div className="button-container"></div>
        </div>

        <div className="project-images">
          <h5>Summary</h5>
          <p>
            This was my last project of 2020, conceived amid a bombardment of
            Spotify users sharing their "top" playlists on social media.
            Recalling early music tracking and charting websites like Last.fm
            from the early 2000s and the emphasis we used to place on having
            unique, or niche, musical tastes, I fashioned an app that also
            collects the user's top steams, but ranks them based on their
            popularity.
          </p>
          <h5> Core Functionality</h5>
          <p>
            After connecting their account, the user is given a score based on
            the average popularity of their top artists (100 being the most
            obscure). Using a gradient slider bar, one can see where their
            favorite artists fall on that spectrum. There is a text graph of
            most frequent genres and a list of the "deep cuts" out of favorite
            tracks.
          </p>
          <h5>What I Learned</h5>
          <p>
            This was my first personal project post-graduation, and I was able
            to spend considerable time mastering the necessity of a clean,
            organized code base; something I (regrettably) did not prioritize
            under the strict pressures of boot camp assignments. It was also an
            excellent opportunity to flex the front-end muscles, determining how
            various algorithms would translate to CSS.
          </p>
          <button>Live Demo</button>
          <button>GitHub</button>
        </div>
      </div>
    </div>
  );
}
