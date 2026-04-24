import Draggable from "react-draggable";
import { useRef, useState, useEffect, useMemo } from "react";
import Carrot from "./Carrot.json";
import "./Carnation.css";
import Stamen from "./Parts/Stamen";

function Carnation({ onClick, WifiOn }) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullPost, setFullPost] = useState(null);
  const shuffled = useMemo(() => {
    return [...Carrot].sort(() => Math.random() - 0.5);
  }, [Carrot]);

    function like() {
    setIsLike(!isLike);
    if(isLike){
      carrot.l -= 1
    }
    if(!isLike){
      carrot.l += 1
    }
    if (!isLike) setIsDislike(false);
  }

  function dislike() {
    setIsDislike(!isDislike);
    if(isDislike){
      carrot.d -= 1
    }
    if(!isDislike){
      carrot.d += 1
    }
    if (!isDislike) setIsLike(false);
  }
  
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
            {!WifiOn ? (
              <div className="noWifi">
                <p>No Connection</p>
                <p>Trun on Wifi to connect or restart your PC</p>
              </div>
            ) : (
              <>
                {fullPost ? (
                  <FullPost fullPost={fullPost} setFullPost={setFullPost}/>
                ) : (
                  <>
                    <div className="header">
                      <h1>CommonNet</h1>
                      <p>User note: likes post that is human?, dislike bot</p>
                    </div>
                    <div className="main">
                      <div className="firstBox">
                        <button className="friend">Add friend</button>{" "}
                        <input
                          type="text"
                          placeholder="What's on your mind today?"
                        />{" "}
                        <button>Profile</button> <button>Manage</button>
                      </div>
                      <div className="mainBox">
                        {Carrot &&
                          shuffled.map((carrot) => {
                            return (
                              <Stamen
                                key={carrot.id}
                                fullPost={fullPost}
                                setFullPost={setFullPost}
                                carrot={carrot}
                              />
                            );
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
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </Draggable>
    </div>
  );
}

function FullPost({ fullPost, setFullPost }) {
  if (!fullPost) return null;

  return (
    <div className="fullPost">
      <div className="head">
        <img
          src={"/img/pfp/" + fullPost.p}
          alt={fullPost.u}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/img/pfp/p1.png";
          }}
        />
        <p>{fullPost.u}</p>
        <button onClick={() => setFullPost(null)}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <hr />
      <p>{fullPost.co || fullPost.t}</p>
      <span className="tags">{fullPost.g}</span>
      {fullPost.img && <img src={fullPost.img} alt={fullPost.t} />}

      <div className="commentbar">
      <p>Comment</p>
      </div>

      <div className="b">
        {fullPost.c &&
        fullPost.c.map((reply, index) => (
          <div className="c" key={index || reply.id}>
            <div className="cN">
              <img src={ "/img/pfp/" + reply[0]} alt={reply[1]}  onError={(e) =>{
                e.target.onerror = null;
                e.target.src = "/img/pfp/p1.png";
              }} />
              <h6>{reply[1]}</h6>
            </div>
            
            <div className="cR"><p>{reply[2]}</p></div>
          </div>
        ))}
        </div>
      </div>
  );
}
export default Carnation;
