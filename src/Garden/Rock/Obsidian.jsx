import Draggable from "react-draggable";
import { useRef, useState } from "react";

function Obsidian({ onClick }) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        handle=".handle"
        cancel=".fullButton, .Xbutton"
        disabled={fullscreen}
        position={fullscreen ? { x: 0, y: 0 } : undefined}
      >
        <div
          ref={nodeRef}
          className={`flowers${fullscreen ? "fullscreen" : ""}`}
        >
          <div className="handle">
            <div>
              <p>Credit</p>
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
          <div className="appbody" style={{overflow: "auto"}}>
            <div className="main"  style={{ margin: "5px", overflow: "auto" }}>
              <div className="mySelf">
                <a href="https://www.youtube.com/@Astellars">YouTube</a><br />
                <a href="https://github.com/stellarblue05/LilyWorld">Github</a>
                <br />
                <hr />
              </div>
              <div className="song">
                <h4>Song/Music</h4>
                <p>
                  Music track: Warm Cup of Coffe by Moavii Source:
                  https://freetouse.com/music Vlog Music for Videos (Free
                  Download)
                </p>
                <p>
                  Music track: Bread by Lukrembo Source:
                  https://freetouse.com/music Music for Video (Free Download)
                </p>
                <p>
                  Music track: Creamy by Aylex Source:
                  https://freetouse.com/music Royalty Free Music for Videos
                  (Safe)
                </p>
                <p>
                  Music track: A Beautiful Garden by Aventure Source:
                  https://freetouse.com/music No Copyright Vlog Music for Videos
                </p>
                <p>
                  Music track: Falling Into You by Aventure Source:
                  https://freetouse.com/music Free Vlog Music Without Copyright
                </p>
                <hr/>
              </div>
              <div className="a">

              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default Obsidian;
