import React from "react";
import "./Shelf.css";

const Shelf = ({ app , setIsRoot }) => {
  return (
    <div className="Shelf">
        <p>Application</p>
      <div className="head">
        {app.map((app) => {
          return (
              <div key={app.id} className="app">
                <button onClick={app.onClick}>
                  <img src={app.img} alt={app.name} style={app.style} />
                </button>
                <p>{app.name}</p>
              </div>          );
        })}
      </div>
      <hr />
      <p>Advance Tool</p>
      <div className="body">
        <div className="app">
            <button onClick={() => setIsRoot(true)}>
                <img src="img/Cat.png" alt="cmd" />
            </button>
            <p>Command Panel</p>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
