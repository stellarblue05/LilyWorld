import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";
import Carrot from "./Carrot.json";
import './Carnation.css'
import Stamen from "./Parts/Stamen";

function Carnation({ onClick }) {

  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
;

  return (
    <div className="carnation">
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
              <p>Common Net</p>
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
            <div className="header">
              <h1>CommonNet</h1>
              <p>A place for everyone to have fun!!</p>
            </div>

            <div className="main">
              <div className="firstBox">
                <button className="friend">Add friend</button>{" "}
                <input type="text" placeholder="What's on your mind today?" />{" "}
                <button>Profile</button> <button>Manage</button>
              </div>
              <div className="mainBox">
                
                {Carrot &&
                Carrot.map((carrot) => {
                return <Stamen key={carrot.id} carrot={carrot} />;
              })}
              </div>

            </div>
            <div className="footer"></div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Carnation;
