import Draggable from "react-draggable";
import { useRef, useState } from "react";
import Carrot from "./Carrot.json";
import "./Carnation.css";

function Carnation({ onClick }) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);


  function like() {
    setIsLike(!isLike);
  }

  function dislike() {
    setIsDislike(!isDislike);
  }

 return(
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
              {Carrot &&
                Carrot.map((carrot) => {
                  return (
                    <div className="box" key={carrot.id}>
                      <div className="post">
                        <div className="user">
                          <img src={carrot.pfp} />
                          <p>{carrot.user}</p>
                        </div>
                        <div className="title">
                          {carrot.title}
                          <br />
                          <span className="tags">{carrot.tags}</span>
                        </div>

                        {carrot.image && (
                          <div className="image">
                            <img src={carrot.image}/>
                          </div>
                        )}



                      </div>
                      <div className="postbar">
                        <button
                          className={`${isLike ? "isLike" : "like"}`}
                          onClick={like}
                        >
                          <span className="material-symbols-outlined">
                            sentiment_satisfied
                          </span>{" "}
                          {carrot.like}
                        </button>
                        <button
                          className={`${isDislike ? "isDislike" : "dislike"}`}
                          onClick={dislike}
                        >
                          <span className="material-symbols-outlined">
                            sentiment_dissatisfied
                          </span>{" "}
                          {carrot.dislike}
                        </button>
                      </div>
                      <div className="commentbar">
                        {" "}
                        <p>Comment</p>{" "}
                      </div>
                      {carrot.comment &&
                        carrot.comment.map((reply) => {
                          return (
                            <div className="comment" key={reply.index}>
                              <div className="commentName">
                                <img src={reply.replyPic} /> <p>{reply.name}</p>
                              </div>
                              <div className="commentReply">{reply.reply}</div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Carnation;