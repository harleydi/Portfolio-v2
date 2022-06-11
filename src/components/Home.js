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
        <button><Link to="/work">PROJECTS</Link></button>
      </div>
    </div>
  );
}
