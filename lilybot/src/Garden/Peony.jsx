import Draggable from "react-draggable";
import { useRef, useState } from "react";
import "./Peony.css";
function Peony({
  onClick,
  bg,
  setBg,
  T,
  setT,
  BarColor,
  setBarColor,
  backgrounds,
}) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [isSepal, setIsSepal] = useState(false);

  return (
    <div className="Peony">
      <Draggable
        nodeRef={nodeRef}
        handle=".handle"
        disabled={fullscreen}
        position={fullscreen ? { x: 0, y: 0 } : undefined}
      >
        <div
          ref={nodeRef}
          className={`flowers${fullscreen ? "fullscreen" : ""}`}
        >
          <div className="handle">
            <div>
              <p>Setting</p>
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
            <h1>Settings</h1>
            <hr />
            <div className="main">
              <h3>
                Background image{" "}
                <button id="SM" onClick={() => setIsSepal(!isSepal)}>
                  {isSepal ? "Hide" : "Show More"}
                </button>
              </h3>

              {isSepal ? null : (
                <div className="bgImg">
                  {backgrounds &&
                    backgrounds.slice(0, 6).map((bg) => {
                      return (
                        <button onClick={() => setBg(bg.id)}>{bg.name}</button>
                      );
                    })}
                </div>
              )}

              {isSepal && <Sepal backgrounds={backgrounds} setBg={setBg}/>}
              <hr />
              <h3>Task Bar Color</h3>
              <div className="BarColor">
                <input
                  type="color"
                  value={BarColor}
                  onChange={(e) => setBarColor(e.target.value)}
                />
                <p>{BarColor}</p>
              </div>
              <hr />
              <div className="LilyFix">
                <h3>Lily</h3>
                <h5> Output Duration</h5>
                <div className="OutputDuration">
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="100"
                    value={T}
                    onChange={(e) => setT(Number(e.target.value))}
                  />
                  <div>
                    <p>{T / 1000} Seconds</p>
                  </div>
                  <button
                    onClick={() => {
                      setT(3000);
                    }}
                  >
                    Default
                  </button>
                </div>
              </div>
              <hr />
              <h3>Help</h3>
              <div className="help">
                <p>Q: How do I resize the pop-ups?</p>

                <p>
                  A: You can resize on bottom-right of the pop-ups (Some pop-ups
                  can't resize for better perfromance)
                </p>
                <br />
                <p>Q: Why is the Paint app so weird?</p>
                <p>A: I'm to lazy to fix</p>
                <br />
                <p>Q: My pop-ups is out of screen and I can't pull it back</p>
                <p>A: Click on that app icon</p>
                <br />
                <p>Q: How do I get in/out fullscreen?</p>
                <p>A: F11</p>
                <br />
                <p>Q: Why is lily froze?</p>
                <p>A: Try Clicking on her</p>
                <br />
                <p>Q: Who am I?</p>
                <p>A: You are the peoson who asked me question</p>
                <br />
                <p>Q: Am I real?</p>
                <p>A: No</p>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

function Sepal({ backgrounds , setBg}) {
  return (
    <>
      <div className="Sepal">
        <div className="bgimgfull">
          {backgrounds &&
            backgrounds.map((bg) => {
              return <button onClick={() => setBg(bg.id)} className="bgBTN"><img src={bg.src} className="preview"/> <p>{bg.name}</p></button>;
            })}
        </div>
      </div>
    </>
  );
}
export default Peony;
