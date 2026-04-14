import Draggable from "react-draggable";
import { useRef, useState } from "react";
import "./Iris.css";

function Iris({ onClick }) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className="Iris">
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
              <p> Google but very bad </p>
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
              <nav>
                <ul>
                    <li>Home</li>
                    <li>Mail</li>
                    <li>Account</li>
                </ul>
              </nav>
            </div>
            <div className="main">
            <h1>Comming Soon!</h1>
              <input type="text" />
            </div>

            <div className="footer">
              <div class="BtnBox">
                <button></button>
                <p>Calculator</p>
              </div>

              <div class="BtnBox">
                <button></button>
                <p>Stores</p>
              </div>

              <div class="BtnBox">
                <button></button>
                <p>Image</p>
              </div>

              <div class="BtnBox">
                <button></button>
                <p>Games</p>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Iris;
