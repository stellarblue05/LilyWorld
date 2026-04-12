import React, { useState } from "react";
import '../Carnation.css';


const Stamen = ({ carrot }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  function like() {
    setIsLike(!isLike);

    if (!isLike) setIsDislike(false); 
  }

  function dislike() {
    setIsDislike(!isDislike);
    if (!isDislike) setIsLike(false);
  }

  return (
    <div className="box">
      <div className="post">
        <div className="user">
          <img src={carrot.pfp} alt={carrot.user} />
          <p>{carrot.user}</p>
        </div>
        <div className="title">
          {carrot.title}
          <br />
          <span className="tags">{carrot.tags}</span>
        </div>

        {carrot.image && (
          <div className="image">
            <img src={carrot.image} alt="post content" />
          </div>
        )}
      </div>

      <div className="postbar">
        <button 
          className={isLike ? "isLike" : "like"} 
          onClick={like}
        >
          <span className="material-symbols-outlined">sentiment_satisfied</span>
          {" "}{carrot.like}
        </button>

        <button
          className={isDislike ? "isDislike" : "dislike"}
          onClick={dislike}
        >
          <span className="material-symbols-outlined">sentiment_dissatisfied</span>
          {" "}{carrot.dislike}
        </button>
      </div>

      <div className="commentbar">
        <p>Comment</p>
      </div>

      {carrot.comment &&
        carrot.comment.map((reply) => (
          <div className="comment" key={reply.index}>
            <div className="commentName">
              <img src={reply.replyPic} alt={reply.name} /> 
              <p>{reply.name}</p>
            </div>
            <div className="commentReply">{reply.reply}</div>
          </div>
        ))}
    </div>
  );
};

export default Stamen;