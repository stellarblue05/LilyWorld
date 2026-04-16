import Draggable from "react-draggable";
import { useRef, useState } from "react";
import "./Iris.css";
import Ruby from "./Rock/Ruby.json";

function Iris({ onClick }) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [page, setPage] = useState(0);
  const [fullMail, setFullMail] = useState(false);

  //Page 0 = Hame Page
  function River({ setPage }) {
    return (
      <div className="River">
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
            <p>Wikipedia</p>
          </div>

          <div className="BtnBox">
            <button onClick={() => setPage(1)}>
              <span className="material-symbols-outlined">mail</span>
            </button>
            <p>EMAIL</p>
          </div>

          <div className="BtnBox">
            <button></button>
            <p>Image</p>
          </div>

          <div className="BtnBox">
            <button></button>
            <p>Games</p>
          </div>
        </div>
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

  function Oceania(){
    return(
      {/*<div style={{width:"100%", height:"100%"}}>
        <iframe src="https://www.bing.com/images?FORM=Z9LH" loading="lazy" style={{width:"100%", height:"100%"}}/>
      </div>*/}
    )
  }

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
            {page === 0 && <River setPage={setPage} />}
            {page === 1 && (
              <Pacific fullMail={fullMail} setFullMail={setFullMail} />
            )}
            {page === 2 && <Oceania/>}
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Iris;
