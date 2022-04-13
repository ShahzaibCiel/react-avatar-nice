import logo from "./logo.svg";
import "./App.css";
import Avatar, { genConfig } from "react-nice-avatar";
import { useState } from "react";

const hairStyles = ["normal", "thick", "mohawk", "womanLong", "womanShort"];
const hatStyles = ["none", "beanie", "turban"];
const eyeStyles = ["circle", "oval", "smile"];
const glassStyles = ["none", "round", "square"];
const noseStyles = ["short", "long", "round"];
const mouthStyles = ["laugh", "smile", "peace"];
const shirtStyles = ["hoody", "short", "polo"];
const shapes = ["circle", "rounded", "square"];

function App() {
  const [config, setConfig] = useState({
    faceColor: "#AC6651",
    earSize: "big",
    eyeStyle: "oval",
    noseStyle: "short",
    mouthStyle: "smile",
    shirtStyle: "polo",
    glassesStyle: "none",
    hairColor: "#D2EFF3",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#FC909F",
    eyeBrowStyle: "up",
    shirtColor: "#77311D",
    bgColor: "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)",
    shape: "square",
  });

  const myConfig = genConfig(config);

  return (
    <div className="main">
      <Avatar className="avatar" {...myConfig} />

      <div className="faces-main">
        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              faceColor:
                config.faceColor === "rgb(249, 201, 182)"
                  ? "rgb(172, 102, 81)"
                  : "rgb(249, 201, 182)",
            })
          }
        >
          <img src="images/face.svg" alt="face" />
        </div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              hairStyle: hairStyles.filter(
                (_, i) => i !== hairStyles.indexOf(config.hairStyle)
              )[Math.floor(Math.random() * hairStyles.length)],
            })
          }
        >
          <img src="images/hair.svg" alt="hair" />
        </div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              hatStyle: hatStyles.filter(
                (_, i) => i !== hatStyles.indexOf(config.hatStyle)
              )[Math.floor(Math.random() * hatStyles.length)],
            })
          }
        ></div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              eyeStyle: eyeStyles.filter(
                (_, i) => i !== eyeStyles.indexOf(config.eyeStyle)
              )[Math.floor(Math.random() * eyeStyles.length)],
            })
          }
        >
          <img src="images/eyes.svg" alt="eyes" />
        </div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              glassesStyle: glassStyles.filter(
                (_, i) => i !== glassStyles.indexOf(config.glassesStyle)
              )[Math.floor(Math.random() * glassStyles.length)],
            })
          }
        ></div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              earSize: config.earSize === "small" ? "big" : "small",
            })
          }
        >
          <img src="images/ear.svg" alt="ear" />
        </div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              noseStyle: noseStyles.filter(
                (_, i) => i !== noseStyles.indexOf(config.noseStyle)
              )[Math.floor(Math.random() * noseStyles.length)],
            })
          }
        >
          <img src="images/nose.svg" alt="nose" />
        </div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,

              mouthStyle: mouthStyles.filter(
                (_, i) => i !== mouthStyles.indexOf(config.mouthStyle)
              )[Math.floor(Math.random() * mouthStyles.length)],
            })
          }
        >
          <img src="images/mouth.svg" alt="mouth" />
        </div>

        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              shirtStyle: shirtStyles.filter(
                (_, i) => i !== shirtStyles.indexOf(config.shirtStyle)
              )[Math.floor(Math.random() * shirtStyles.length)],
            })
          }
        >
          <img src="images/shirt.svg" alt="shirt" />
        </div>
        {/* 
        <div
          className="faces"
          onClick={() =>
            setConfig({
              ...config,
              shape: shapes[Math.floor(Math.random() * shapes.length)],
            })
          }
        >
          <div
            style={{
              width: "50%",
              height: "50%",
              backgroundColor: "#fff",
              borderRadius: "50%",
            }}
          ></div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
