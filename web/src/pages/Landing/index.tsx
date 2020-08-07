import React from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataform de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Landing" className="hero-image" />

        <div className="buttons-container">
          <a href="URL" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="URL" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Estudar
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
}
