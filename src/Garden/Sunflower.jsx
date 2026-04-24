import Draggable from "react-draggable";
import { useRef, useState, useContext } from "react";
import "./Sunflower.css";
import Slate from "./Rock/Slate.json";

function Sunflower({
  onClick,
  isForgetMeNot,
  setIsForgetMeNot,
  isGran,
  setIsGran,
  setId,
  isOb,
  setIsOb,
}) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <div className="Sunflower">
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
              <p>My computer</p>
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
          {page === 0 && (
            <Basalt
              page={page}
              setPage={setPage}
              isForgetMeNot={isForgetMeNot}
              setIsForgetMeNot={setIsForgetMeNot}
              isOb={isOb}
              setIsOb={setIsOb}
            />
          )}{" "}
          {/*Home Page*/}
          {page === 1 && (
            <Marble
              page={page}
              setPage={setPage}
              isGran={isGran}
              setIsGran={setIsGran}
              setId={setId}
            />
          )}
        </div>
      </Draggable>
    </div>
  );
}

function Basalt({ isForgetMeNot, setIsForgetMeNot, setPage, isOb, setIsOb }) {
  return (
    <div className="marble">
      <div className="appbody">
        <nav>
          <div className="arrow">
            <button onClick={() => setPage(0)}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Help</li>
          </ul>
        </nav>
        <div className="main">
          <div className="file">
            <button onClick={() => setIsForgetMeNot(!isForgetMeNot)}>
              <img src="img/txt.png" alt="README" />
            </button>
            <p>README</p>
          </div>
          <div className="file">
            <button onClick={() => setPage(1)}>
              <img src="img/folder.png" alt="Picture" />
            </button>
            <p>Picture</p>
          </div>
          <div className="file">
            <button onClick={() => setIsOb(!isOb)}>
              <img src="img/txt.png" alt="Credits" />
            </button>
            <p>Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Marble({ page, setPage, isGran, setIsGran, setId }) {
  return (
    <div className="Marble">
      <div className="appbody">
        <nav>
          <div className="arrow">
            <button onClick={() => setPage(0)}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Help</li>
          </ul>
        </nav>
        <div className="main">
          {Slate &&
            Slate.map((Slate) => {
              return (
                <Pumice
                  isGran={isGran}
                  setIsGran={setIsGran}
                  key={Slate.id}
                  Slate={Slate}
                  setId={setId}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

function Pumice({ Slate, isGran, setIsGran, setId }) {
  return (
    <>
      <div className="file">
        <button
          onClick={() => {
            setId(Slate.id);
            setIsGran(!isGran);
          }}
        >
          <img
            src={Slate.img}
            alt={Slate.n}
            onError={(e) => (e.target.src = "img/txt.png")}
          />
        </button>
        <p>{Slate.n}</p>
      </div>
    </>
  );
}

export default Sunflower;
