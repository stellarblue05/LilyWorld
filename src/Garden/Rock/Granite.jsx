import Draggable from "react-draggable";
import { useRef, useState } from "react";
import Slate from './Slate.json'
function Granite({ onClick , id}) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);


  const item = Slate.find(e => e.id === id);
  return (


    <div className="Granite">
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
              <p>{item.n}</p>
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
          <div className="appbody" style={{backgroundColor: "#333333"}}>
                    <div style={{width:"100%", height:"100%",display:"flex", justifyContent:"center"}}>
                    <img src={item.img} style={{width:"auto", height:"100%", imageRendering:"pixelated"}}></img>
                    </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Granite;
