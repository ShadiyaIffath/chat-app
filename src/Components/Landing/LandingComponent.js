import React from "react";

import LandingContent from "./LandingContent";
import "./Landing.css";
import ParticlesComponent from "../ParticlesComponent";

function LandingComponent() {
  return (
    <>
      <ParticlesComponent />
      <div className="content-container">
        <LandingContent />
      </div>
    </>
  );
}

export default LandingComponent;
