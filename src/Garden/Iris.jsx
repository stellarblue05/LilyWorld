import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";
import "./Iris.css";
import Ruby from "./Rock/Ruby.json";

function Iris({ onClick , WifiOn}) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [page, setPage] = useState(0);
  const [fullMail, setFullMail] = useState(false);

  //Page 0 = Hame Page
  function River({ setPage , WifiOn}) {
    return (

      <div className="River">
        {WifiOn ? 
        <>
        <div className="header">
          <nav>
            <ul>
              <li>Home</li>
              <li>Mail</li>
              <li>Custom</li>
            </ul>
          </nav>
        </div>
        <div className="main">
          <h1>Boogle</h1>
          {/*<input type="text" placeholder="Search..." />*/}
        </div>

        <div className="footer">
          <div className="BtnBox">
            <button onClick={() => setPage(2)}></button>
            <p>Bing</p>
          </div>

          <div className="BtnBox">
            <button onClick={() => setPage(1)}>
              <span className="material-symbols-outlined">mail</span>
            </button>
            <p>EMAIL</p>
          </div>

          <div className="BtnBox">
            <button onClick={() => setPage(3)}></button>
            <p>Exoplanet</p>
          </div>

          <div className="BtnBox">
            <button></button>
            <p>Games</p>
          </div>
        </div>
        </> :
        <div className="nowifi">
          No Internet connection: trun on Wi-Fi or restart your computer to process
        </div>
  }
      </div>
    );
  }

  function Pacific({ fullMail, setFullMail }) {
    const [mail, setMail] = useState(null);

    const current = Ruby.find((r) => r.id === mail);

    function back() {
      if (fullMail) {
        setFullMail(false);
      }
      if (!fullMail) {
        setPage(0);
      }
    }

    return (
      <div className="Pacific">
        <div className="goheader">
          <div className="tools">
            <button onClick={back}>
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <p>GoMail</p>
          </div>
          <input type="text" />
          <img src="img/pfp/p1.png" alt="pfp" />
        </div>

        <div className="main">
          {fullMail && current ? (
            <Atlantic current={current} key={current.id} />
          ) : (
            <>
              <div className="aside">
                <button>NEW</button>
              </div>
              <div className="center">
                {Ruby &&
                  Ruby.map((mail) => {
                    return (
                      <button
                        onClick={() => {
                          setFullMail((fullMail = true));
                          setMail(mail.id);
                        }}
                        key={mail.id}
                      >
                        <div className="mail">
                          <p>{mail.n}</p>
                          <p>{mail.t}</p>
                          <p>{mail.d}</p>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  function Atlantic({ current }) {
    return (
      <div className="Atlantic">
        <div className="fullMail">
          <div className="title">
            <h3>{current.t}</h3>
          </div>
          <div className="head">
            <img src={current.pfp} alt="pfp" />
            <p>{current.n}</p>
            <p id="a">({current.a})</p>
            <p>{current.d}</p>
          </div>
          <div className="body">
            <p>{current.c}</p>
          </div>
          <div className="foot">
            <button>Reply</button>
            <button>Forward</button>
          </div>
        </div>
      </div>
    );
  }

  function Oceania() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {/*<iframe
          src="https://www.bing.com/copilotsearch?q=&FORM=CSSCOP"
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
        />*/}
      </div>
    );
  }

  function Zenith() {
    const [starR, setStarR] = useState(1.0);
    const [transitD, setTransitD] = useState(0.01);
    const [semiMajorAxis, setSemiMajorAxis] = useState(1.0);
    const [starMass, setStarMass] = useState(1.0);
    const [page, setPage] = useState(1);

    const sunR = 696000;
    const jupiterR = 69911;
    const earthR = 6378.14;
    const AU = 1.496e11;
    const G = 6.6743e-11
    const solarM = 1.989e30;

    const RP = (starR || 0) * Math.sqrt(transitD || 0);
    const RJ = ((RP * sunR) / jupiterR)
    const Rkm = (RJ * jupiterR)
    const RE = (Rkm / earthR)

    const OS = (2 * Math.PI * (Math.sqrt(((semiMajorAxis * AU) ** 3) / (starMass * solarM * G))))
    const OD = (OS / 86400)
    const OY = (OS / 31536000 )
    const Or = Math.sqrt((G * starMass * solarM) / (semiMajorAxis * AU))

    function TDaPR() {
      return (
        <>
          <div className="mainE">
            <p>Insert Star Radius R★</p>
            <input
              step="0.1"
              onChange={(e) => setStarR(e.target.value) || 0}
              type="number"
              min="0"
              value={starR}
            />
            <p>Insert Transit Depth δ (fraction)</p>
            <input
              type="number"
              value={transitD}
              step="0.01"
              onChange={(e) => setTransitD(e.target.value) || 0}
              min="0"
              max="1"
            />
          </div>
          <div className="result">
            <div className="planetR">
              <p>R Compare to Jupiter</p>
              <p>{RJ.toFixed(3)} RJ</p>
            </div>
            <div className="earthR">
              <p>R Compare to Earth</p>
              <p>{RE.toFixed(2)} R⊕ ​</p>
            </div>
            <div className="KiloR">
              <p>In Kilo</p>
              <p>{Rkm.toFixed(2)} km</p>
            </div>
          </div>
        </>
      );
    }

    function OPfSMA() {
     return( 
     <>
        <div className="mainE">
          <p>Semi-Major Axis (AU)</p>
          <input
            step="0.1"
            onChange={(e) => setSemiMajorAxis(e.target.value) || 0}
            type="number"
            min="0"
            value={semiMajorAxis}
          />
          <p>Star Mass M☉</p>
          <input
            type="number"
            value={starMass}
            step="0.1"
            onChange={(e) => setStarMass(e.target.value) || 0}
            min="0"
          />
        </div>
        <div className="result">
          <div>
            <p>Orbital Period (days)</p>
            <p>{OD.toFixed(2)}</p>
          </div>
          <div>
            <p>Orbital Period (years)</p>
            <p> {OY.toFixed(2)}​</p>
          </div>
          <div>
            <p>Orbital Velocity</p>
            <p>{Or.toFixed(2)} m/s</p>
          </div>
        </div>
      </>)
    }

    return (
      <div
        className="Zenith"
        style={{ width: "100%", height: "100%", backgroundColor: "white" }}
      >
        <div className="head">
          <h2>Exoplanet Calculator</h2>
          <div className="headBTN">
            <button onClick={() => setPage(1)}>
              Planet Radius from Transit Depth
            </button>
            <button onClick={() => setPage(2)}>
              Orbital Period from Semi-Major Axis
            </button>
          </div>
        </div>
        
        {page === 1 && <TDaPR />}
        {page === 2 && <OPfSMA />}
      </div>
    );
  }
  return (
    <div className="Iris">
      <Draggable
        nodeRef={nodeRef}
        handle=".handle"
        cancel="button"
        disabled={fullscreen}
        position={fullscreen ? { x: 0, y: 0 } : undefined}
      >
        <div
          ref={nodeRef}
          className={`flowers${fullscreen ? "fullscreen" : ""}`}
        >
          <div className="handle">
            <div>
              <p> Boogle </p>
            </div>
            <button
              className="fullButton"
              onClick={() => setFullscreen(!fullscreen)}
            >
              ▢
            </button>
            <button className="Xbutton" onClick={onClick}>
              X
            </button>
          </div>

          <div className="appbody">
            {page === 0 && <River setPage={setPage} WifiOn={WifiOn}/>}
            {page === 1 && (
              <Pacific fullMail={fullMail} setFullMail={setFullMail} />
            )}
            {page === 2 && <Oceania />}
            {page === 3 && <Zenith />}
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Iris;
