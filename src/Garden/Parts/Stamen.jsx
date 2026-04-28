import React, { useEffect, useState } from "react";
import "../Carnation.css";

const Stamen = ({ carrot, setFullPost, fullPost }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const PFP = "./img/pfp/";
  const [full, setfull] = useState(false);

  function like() {
    setIsLike(!isLike);
    if (isLike) {
      carrot.l -= 1;
    }
    if (!isLike) {
      carrot.l += 1;
    }
    if (!isLike) setIsDislike(false);
  }

  function dislike() {
    setIsDislike(!isDislike);
    if (isDislike) {
      carrot.d -= 1;
    }
    if (!isDislike) {
      carrot.d += 1;
    }
    if (!isDislike) setIsLike(false);
  }

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = `${import.meta.env.BASE_URL}img/pfp/p1.png`;
  };

  return (
    <div className="box">
      <div className="post">
        <div className="user">
          <img src={PFP + carrot.p} alt={carrot.u} onError={handleImgError} />
          <p>{carrot.u}</p>
        </div>
        <div className="title">
          {full && carrot.co ? `${carrot.t}. \n ${carrot?.co}` : carrot.t}

          <br />
          <span className="tags">{carrot.g}</span>
          {carrot.co && (
            <button onClick={() => setfull(!full)} className="fullBtn">
              {full ? "hide" : "Show more"}
            </button>
          )}
        </div>

        {carrot.img && (
          <div className="image">
            <img src={carrot.img} alt="post content" />
          </div>
        )}
      </div>

      <div className="postbar">
        <div className="a">
          <button className={isLike ? "isLike" : "like"} onClick={like}>
            <span className="material-symbols-outlined">
              sentiment_satisfied
            </span>{" "}
            {carrot.l.toLocaleString("en-US")}
          </button>
          <button
            className={isDislike ? "isDislike" : "dislike"}
            onClick={dislike}
          >
            <span className="material-symbols-outlined">
              sentiment_dissatisfied
            </span>{" "}
            {carrot.d.toLocaleString("en-US")}
          </button>
        </div>

        <div className="view">
          <p>Views:{carrot.v.toLocaleString("en-US")}</p>
        </div>
      </div>

      <div className="commentbar">
        <p>Comment</p>
      </div>

      {carrot.c &&
        carrot.c.map((reply, index) => (
          <div className="c" key={index}>
            <div className="comment" key={index}>
              <div className="commentName">
                <img
                  src={PFP + reply[0]}
                  alt={reply[1]}
                  onError={handleImgError}
                />
                <p>{reply[1]}</p>
              </div>
              <div className="commentReply">{reply[2]}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

const Anther = ({ Lapis, setPage }) => {
  const [Chat, setChat] = useState(null);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = `${import.meta.env.BASE_URL}img/pfp/p1.png`;
  };

  console.log(Chat);

  return (
    <div className="Anther">
      <div className="DMnav">
                      <button onClick={() => {Chat ? setChat(null): setPage(0)}}>
                        <span className="material-symbols-outlined">
                          arrow_back
                        </span>
                      </button>
                      <p>Chats</p>
                      <button>
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
      {!Chat ? (
        <>
        
          <div className="DMhead">
            <img src="img/Cat.png" alt="Profile" />
            <div className="DMneck">
              <input type="text" />
            </div>
            <button>
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
          {Lapis &&
            Lapis.map((Lapis) => (
              <div className="DMbody" key={Lapis.id}>
                <img
                  src={Lapis.pfp}
                  alt={Lapis.name}
                  onError={handleImgError}
                />
                <div className="DMname">
                  <p>{Lapis.name}</p>
                  <p>{Lapis.msg?.at(-1)?.text || null}</p>
                </div>
                <button onClick={() => setChat(Lapis)}></button>
              </div>
            ))}
        </>
      ) : (
        <div className="DMfull">
          
          <div className="DMfullbody" key={Chat.msg.msgId}>
            {Chat.msg &&
              Chat.msg.map((msg) => {
                const date = msg.time.split("'")[0];
                const time = msg.time.split("'")[1];
                return (
                  <div className={msg.user ? "other" : "you"}>
                    <div className="user">
                      <div className="userHead">
                        <img
                          src={msg.user ? Chat.pfp : "./img/Cat.png"}
                          alt=""
                        />
                        <p>{msg.user ? Chat.name : null}</p>
                      </div>

                      <div className="bubbleCon">
                        <div className="bubble">
                          <p>{msg.text}</p>
                        </div>
                        <div>
                          <div className="time">
                            <p>{date} {time}</p>
                             <p className="read">{msg.read && msg.user ? null : "read" }</p>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                );
              })}
          </div>
        </div>
        
      )}
    </div>
  );
};

export { Stamen, Anther };
