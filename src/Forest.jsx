import { useState, useRef } from "react";

import Root from "./Garden/Parts/Root.jsx";

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
import Desk from "./House/Desk.jsx";
import Shelf from "./House/Shelf.jsx";

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
  const [isDesk, setIsDesk] = useState(false);
  const [isShelf, setIsShelf] = useState(false);

  const [isRoot, setIsRoot] = useState(false);

  //Pass props betweeen siblings
  const [T, setT] = useState(3000); //Lily talk time
  const [speed, setSpeed] = useState(5); //Lily walk speed
  const [id, setId] = useState(null); //This PC
  const [BarColor, setBarColor] = useState("#000000");
  const [appAlign, setAppAlign] = useState("column");

  //PC current
  const [blueOn, setBlueOn] = useState(false);
  const [airOn, setAirOn] = useState(false);
  const [savOn, setSavOn] = useState(false);
  const [WifiOn, setWifiOn] = useState(true);
  const [NoOn, setNoOn] = useState(false);



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
    { id: 8, name: "Flower", src: "img/Bg/Flower.png" },
    { id: 9, name: "House 1", src: "img/Bg/SunWin.png" },
    { id: 10, name: "Winter", src: "img/Bg/Winter.png" },
    { id: 11, name: "Anime 2", src: "img/Bg/F.png" },
  ];

  const [bg, setBg] = useState(
    Math.floor(Math.random() * backgrounds.length) + 1,
  );

  const [app, setApp] = useState([
    {
      id: 0,
      name: "Lily World",
      img: `${import.meta.env.BASE_URL}img/Lily.png`,
      style: {},
      onClick: lilyHarvest,
      is: isBloom,
      set: setIsBloom
    },
    {
      id: 1,
      name: "My Computer",
      img: `${import.meta.env.BASE_URL}img/PC.png`,
      style: { imageRendering: "pixelated" },
      onClick: () => setIsSunflower(!isSunflower),
      is: isSunflower,
      set: setIsSunflower
    },
    {
      id: 2,
      name: "Tools",
      img: `${import.meta.env.BASE_URL}/img/Calculator.png`,
      style: {},
      onClick: irisHarvest,
      is: isIris,
      set: setIsIris
    },
    {
      id: 3,
      name: "CommonNet",
      img: `${import.meta.env.BASE_URL}/img/Commonnet.png`,
      style: {},
      onClick: carnationHarvest,
      is: isCarnation,
      set: setIsCarnation
    },
    {
      id: 4,
      name: "Settings",
      img: `${import.meta.env.BASE_URL}/img/Settings.png`,
      style: { imageRendering: "pixelated" },
      onClick: peonyHarvest,
      is: isPeony,
      set: setIsPeony
    },
    {
      id: 5,
      name: "Paint",
      img: `${import.meta.env.BASE_URL}/img/Paint.png`,
      style: { imageRendering: "pixelated" },
      onClick: tulipHarvest,
      is: isTulip,
      set: setIsTulip
    },
  ]);

  const current = backgrounds.find((b) => b.id === bg);

  const [root, setRoot] = useState({

    desk: {
      is: isDesk,
      set: setIsDesk,
      on: () => setIsDesk(!isDesk),
    },
    shelf: {
      is: isShelf,
      set: setIsShelf,
      on: () => setIsShelf(!isShelf),
    },
    root: {
      is: isRoot,
      set: setIsRoot,
      on: () => setIsRoot(!isRoot),
    },
    sprite: {
      talkTime: {
        is: T,
        set: setT,
      },
    },
    PC: [
      {
        id: 0,
        name: 'Bluetooth',
        on: (() => setBlueOn(prev => !prev))
      },
      {
        id: 1,
        name: "Airplane Mode",
        on: (() => setAirOn(prev => !prev))
      },
      {
        id: 2,
        name: "Save Battery",
        on: (() => setSavOn(prev => !prev))
      },
      {
        id: 3,
        name: "Wi-Fi",
        on: (() => setWifiOn(prev => !prev))
      },
      {
        id: 4,
        name: "Do Not Disturb",
        on: (() => setNoOn(prev => !prev))
      },
    ],
  });

  return (
    <>
      <div className="background">
        {current ? (
          <img src={current.src} className="bg" id={`bg${current.id}`} />
        ) : null}
      </div>

      <div className="appPot" style={{ flexDirection: appAlign }}>
        {app.map((app) => {
          return (
            <div key={app.id}>
              <button onClick={app.onClick}>
                <img src={app.img} alt={app.name} style={app.style} />
              </button>
              <p>{app.name}</p>
            </div>
          );
        })}
      </div>

      <div className="board">
        {isDesk && (
          <Desk
            blueOn={blueOn}
            setBlueOn={setBlueOn}
            airOn={airOn}
            setAirOn={setAirOn}
            savOn={savOn}
            setSavOn={setSavOn}
            WifiOn={WifiOn}
            setWifiOn={setWifiOn}
            NoOn={NoOn}
            setNoOn={setNoOn}
            setIsPeony={setIsPeony}
          />
        )}
      </div>

      <div className="root">
        {isRoot && <Root onClick={() => setIsRoot(false)} root={root} app={app} setRoot={setRoot} setApp={setApp}/>}
      </div>

      <div
        className="shelf "
        onMouseLeave={() => {
          setIsShelf(false);
        }}
      >
        {isShelf && <Shelf app={app} setIsRoot={setIsRoot} />}
      </div>

      <div className="taskBar">
        <div className="color" style={{ backgroundColor: BarColor }}></div>
        <button className="power" onClick={powerHarvest}>
          <span className="material-symbols-outlined">power_settings_new</span>
        </button>

        <div className="mini">
          <div className="search">
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search.."
              onFocus={() => {
                setIsShelf(true);
              }}
            />
          </div>
          {/*
          {app.map((app) => {
            return (
              <div key={app.id}>
                {app.is ? (
                  <>
                    <img
                      src={app.img}
                      alt={app.name}
                      style={{ imageRendering: "pixelated" }}
                      onClick={app.onClick}
                    />
                  </>
                ) : null}
              </div>
            );
          })}*/}
        </div>
        <div className="panel">
          {WifiOn ? (
            <span className="material-symbols-outlined">wifi</span>
          ) : (
            <span className="material-symbols-outlined">wifi_off</span>
          )}
          {blueOn ? (
            <span className="material-symbols-outlined">bluetooth</span>
          ) : null}
          {airOn ? (
            <span className="material-symbols-outlined">travel</span>
          ) : null}
          {savOn ? (
            <span className="material-symbols-outlined">
              battery_android_frame_shield
            </span>
          ) : (
            <span className="material-symbols-outlined">
              battery_android_frame_5
            </span>
          )}
          {NoOn ? (
            <span className="material-symbols-outlined">do_not_disturb_on</span>
          ) : null}
          <div className="time">
            <Clock isDesk={isDesk} setIsDesk={setIsDesk} />
          </div>
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
      {isCarnation && <Carnation onClick={carnationHarvest} WifiOn={WifiOn} />}
      {isIris && <Iris onClick={irisHarvest} WifiOn={WifiOn} />}
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
          setAppAlign={setAppAlign}
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
      {isOb && <Obsidian onClick={() => setIsOb(!isOb)} />}
    </>
  );
}

export default Forest;
