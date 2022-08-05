import React from "react";
import "../styles/home.scss";
import homepic from "../images/adventureMe.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homepage">
      <div className="info">
        <p className="nameTitle">Disney Harley</p>
        <h5 className="roleTitle">Full-Stack Developer</h5>
        <a href="\work"><button>PROJECTS</button></a>
      </div>
    </div>
  );
}
