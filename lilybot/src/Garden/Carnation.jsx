import Draggable from "react-draggable";
import { useRef, useState, useEffect, useMemo } from "react";
import Carrot from "./Carrot.json";
import "./Carnation.css";
import Stamen from "./Parts/Stamen";

function Carnation({ onClick }) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const shuffled = useMemo(() => {
    return [...Carrot].sort(() => Math.random() - 0.5);
  }, [Carrot]);

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
              <p>User note: likes post that is human?, dislike bot</p>
            </div>

            <div className="main">
              <div className="firstBox">
                <button className="friend">Add friend</button>{" "}
                <input type="text" placeholder="What's on your mind today?" />{" "}
                <button>Profile</button> <button>Manage</button>
              </div>
              <div className="mainBox">
                {Carrot &&
                  shuffled.map((carrot) => {
                    return <Stamen key={carrot.id} carrot={carrot} />;
                  })}
              </div>
            </div>
            <div className="footer">
              <p>How many post do you think is ai?</p>
              <div className="button">
                <button>40%</button>
                <button>60%</button>
                <button>90%</button>
                <button>100%</button>
                <button>FREE JOE</button>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Carnation;
