import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Background.css";

function BackgroundSection() {
  return (
    <div className="background-container">
      <video
        src="../videos/background-video.mp4"
        autoPlay
        loop
        muted /* burada arkaplan için video kullanmak istersek bir örnek var*/
      />
      <h1>MOST PLAYFUL GAMES</h1>
      <p>What are you waiting for?</p>
      <div className="background-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SIGN UP
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("routes-test")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default BackgroundSection;
