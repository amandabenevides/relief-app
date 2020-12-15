import React, { Component } from "react";
import background from '../assets/background.mp4';
import logo from '../assets/logowhite.png';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro" style={{ background: "none" }}>
          <div className="overlay" style={{ background: "none" }}>
            <div className="header-wrap">
              <h1>
                <img className="main-logo" src={logo} alt=""></img>
                <h2> <p>
                  Ofereça e receba pedidos de ajuda durante a quarentena!
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Saiba mais
                  </a>{" "} </h2>
              </h1>
            </div>
            <video id="videoBG" autoPlay muted loop > <source src={background} type="video/mp4"
              style={{
                position: "fixed",
                zIndex: "-1",
                width: "100%",
                height: "100%"
              }} />
            </video>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
