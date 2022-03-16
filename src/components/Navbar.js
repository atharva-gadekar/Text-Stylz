import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div id="box">
        <div className="navbox">
          <div className="logoimg same">
            <img src={require("../resources/logo.png")} id="logo" alt="logo" />
          </div>
          <div className="logo same">Text Stylzz</div>
          <div className="others">
            <div className="items">
              <a href="/">Let's Go! </a>
            </div>
            <div className="items">
              <a href="/">About Me</a>
            </div>
            <div className="items">
              <a href="/">Drop Me a Message!</a>
            </div>
            <div className="items github">
              <a href="/">My Github</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
