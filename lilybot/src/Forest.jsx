//Forest -> App -> main

import { useState, useRef, useContext } from "react";
import Lily from "./Garden/Lily.jsx";
import Tulip from "./Garden/Tulip.jsx";
import Peony from "./Garden/Peony.jsx";
import Carnation from "./Garden/Carnation.jsx";
import Iris from "./Garden/Iris.jsx";
import Lilium from "./Garden/Lilium.jsx";
import ForgetMeNot from "./Garden/Rock/ForgetMeNot.jsx";
import Sunflower from "./Garden/Sunflower.jsx";
import Granite from "./Garden/Rock/Granite.jsx";
import Obsidian from "./Garden/Rock/Obsidian.jsx";

import Clock from "./House/Clock.jsx";
import Door from "./House/Door.jsx";

function Forest() {
  const [isBloom, setIsBloom] = useState(false);
  const [power, setPower] = useState(false);
  const [isTulip, setIsTulip] = useState(false);
  const [isIris, setIsIris] = useState(false);
  const [isCarnation, setIsCarnation] = useState(false);
  const [isPeony, setIsPeony] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [isSunflower, setIsSunflower] = useState(false);
  const [isForgetMeNot, setIsForgetMeNot] = useState(false);
  const [isGran, setIsGran] = useState(false);
  const [isOb, setIsOb] = useState(false);
  const [bg, setBg] = useState(1);

  //Pass props betweeen siblings
  const [T, setT] = useState(3000); //Lily talk time
  const [speed, setSpeed] = useState(5); //Lily walk speed
  const [id, setId] = useState(null);
  const [BarColor, setBarColor] = useState("rgba(31, 28, 42, 0.8)");
  const powerHarvest = () => {
    setPower(!power);
  };

  const lilyHarvest = () => {
    setIsBloom(!isBloom);
  };

  function tulipHarvest() {
    setIsTulip(!isTulip);
  }

  function irisHarvest() {
    setIsIris(!isIris);
  }

  function peonyHarvest() {
    setIsPeony(!isPeony);
  }

  function carnationHarvest() {
    setIsCarnation(!isCarnation);
  }

  const backgrounds = [
    { id: 1, name: "Bliss", src: "img/Bg/Bliss.png" },
    { id: 2, name: "City Night", src: "img/Bg/CityNight.png" },
    { id: 3, name: "Green Screen", src: "img/Bg/Green.png" },
    { id: 4, name: "Cat", src: "img/Bg/Cat2.png" },
    { id: 5, name: "Anime", src: "img/Bg/E.png" },
    { id: 6, name: "Cafe", src: "img/Bg/Cafe.png" },
    { id: 7, name: "Meme 1", src: "img/Bg/Meme1.png" },
    { id: 8, name: "Evil AI", src: "img/Bg/Evil.png" },
    { id: 9, name: "Flower", src: "img/Bg/Flower.png" },
    { id: 10, name: "House 1", src: "img/Bg/SunWin.png" },
    { id: 11, name: "Winter", src: "img/Bg/Winter.png" },
    { id: 12, name: "Anime 2", src: "img/Bg/F.png" }
  ];

  const current = backgrounds.find((b) => b.id === bg);

  return (
    <>
      <div className="background">
        {current ? (
          <img src={current.src} className="bg" id={`bg${current.id}`} />
        ) : null}
      </div>

      <div className="appPot">
        <div className="app-lily">
          <button className="desktop-lily" onClick={lilyHarvest}>
            <img src="/img/Lily.png" />
          </button>
          <p> Lily World </p>
        </div>

        <div className="app-Sunflower">
          <button
            className="desktop-Sunflower"
            onClick={() => setIsSunflower(!isSunflower)}
          >
            <img src="/img/PC.png" style={{ imageRendering: "pixelated" }} />
          </button>
          <p> My computer </p>
        </div>

        <div className="app-Iris">
          <button className="desktop-Iris" onClick={irisHarvest}>
            <img src="/img/Calculator.png" />
          </button>
          <p> Tools </p>
        </div>

        <div className="app-Carnation">
          <button className="desktop-Carnation" onClick={carnationHarvest}>
            <img src="/img/Commonnet.png" />
          </button>
          <p> CommonNet </p>
        </div>

        <div className="app-Tulip">
          <button className="desktop-Tulip" onClick={tulipHarvest}>
            <img src="/img/Paint.png" style={{ imageRendering: "pixelated" }} />
          </button>
          <p> Paint </p>
        </div>

        <div className="app-Peony">
          <button className="desktop-Peony" onClick={peonyHarvest}>
            <img
              src="/img/Settings.png"
              style={{ imageRendering: "pixelated" }}
            />
          </button>
          <p> Settings </p>
        </div>
      </div>

      <div className="taskBar" style={{ backgroundColor: BarColor }}>
        <button className="power" onClick={powerHarvest}>
          <span className="material-symbols-outlined">power_settings_new</span>
        </button>
        <div className="mini">
          <img
            src="/img/PC.png"
            style={{ imageRendering: "pixelated" }}
            alt="PC"
            onClick={() => setIsSunflower(!isSunflower)}
          />
          <input type="text" placeholder="Search..." />
          {isBloom && <img src="/img/Lily.png" onClick={lilyHarvest} />}
          {isTulip && (
            <img
              src="/img/Paint.png"
              onClick={tulipHarvest}
              style={{ imageRendering: "pixelated" }}
            />
          )}
          {isIris && <img src="/img/Calculator.png" onClick={irisHarvest} />}
          {isPeony && (
            <img
              src="/img/Settings.png"
              onClick={peonyHarvest}
              style={{ imageRendering: "pixelated" }}
            />
          )}
          {isCarnation && (
            <img src="/img/Commonnet.png" onClick={carnationHarvest} />
          )}
          {/*isSunflower && <img src='/img/PC.png' onClick={() => setIsSunflower(!isSunflower)} style={{imageRendering: 'pixelated'}}/>*/}
        </div>
        <div className="time">
          <Clock />
        </div>
      </div>

      {/*App pop ups*/}
      {isBloom && (
        <Lily
          onClick={lilyHarvest}
          onAwake={() => setIsAwake(true)}
          isAwake={isAwake}
          speed={speed}
        />
      )}
      {power && <Door onClick={powerHarvest} />}
      {isTulip && <Tulip onClick={tulipHarvest} />}
      {isCarnation && <Carnation onClick={carnationHarvest} />}
      {isIris && <Iris onClick={irisHarvest} />}
      {isPeony && (
        <Peony
          onClick={peonyHarvest}
          backgrounds={backgrounds}
          bg={bg}
          setBg={setBg}
          setT={setT}
          T={T}
          BarColor={BarColor}
          setBarColor={setBarColor}
        />
      )}
      
      {isAwake && <Lilium isCarnation={isCarnation} T={T} />}
      {isSunflower && (
        <Sunflower
          onClick={() => setIsSunflower(!isSunflower)}
          isGran={isGran}
          setIsGran={setIsGran}
          setId={setId}
          isForgetMeNot={isForgetMeNot}
          setIsForgetMeNot={setIsForgetMeNot}
          isOb={isOb}
          setIsOb={setIsOb}
        />
      )}

      {/* INSIDE THIS PC */}
      {isForgetMeNot && (
        <ForgetMeNot onClick={() => setIsForgetMeNot(!isForgetMeNot)} />
      )}
      {isGran && (
        <Granite onClick={() => setIsGran(!isGran)} id={id} setId={setId} />
      )}
      {isOb && (
        <Obsidian onClick={() => setIsOb(!isOb)}/>
      )}
    </>
  );
}

export default Forest;
