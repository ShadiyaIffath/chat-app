import React from "react";
import Particles from "react-particles-js";

function ParticlesComponent() {
  return (
    <Particles
      params={{
        particles: {
          color: {
            value: "#ad5389",
          },
          line_linked: {
            color: {
              value: "#3c1053",
            },
          },
          number: {
            value: 65,
          },
          size: {
            value: 4,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default ParticlesComponent;
