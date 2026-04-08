import { useRef, useEffect, useState } from "react";
import Xylem from './Path/Xylem.jsx'
import "./Lilium.css";

const Lilium = () => {
  const [out, setOut] = useState(false);
  const [input, setInput] = useState(false);

  const posRef = useRef({x: 0, y: -25});
  const idRef = useRef(null);
  const direcRef = useRef(1);
  const speedRef = useRef(5);
  const lilyRef = useRef(null);

  //Animation loop
  function animateX() {
      const width = document.documentElement.clientWidth || 500;
      const lilyWidth = 64;

      let newX = Math.floor(posRef.current.x + speedRef.current);

      //wall
      if (newX >= width - lilyWidth) {
        newX = width - lilyWidth;
        direcRef.current *= -1;
        speedRef.current = Math.abs(speedRef.current) * direcRef.current;
      }

      if (newX <= 0) {
        newX = 0;
        direcRef.current *= -1;
        speedRef.current = Math.abs(speedRef.current) * direcRef.current;
      }

      posRef.current.x = newX;

      if (lilyRef.current) {
        lilyRef.current.style.transform = `translate(${newX}px, ${posRef.current.y}px)`;
      }

       idRef.current = requestAnimationFrame(animateX);
    };
   


  //start
  const start = () => {
    speedRef.current = 5 * direcRef.current;

    if (idRef.current) {
      cancelAnimationFrame(idRef.current);
      idRef.current = null;
    }

    idRef.current = requestAnimationFrame(animateX);
  };

  //stop
  const stop = () => {
    if(!input && !out){
    speedRef.current = 0;
    setInput(true);
    console.log("stop");
    }
    if (idRef.current) {
      cancelAnimationFrame(idRef.current);
      idRef.current = null;
    }
  };


  //Random speed and direction swap every loop
  useEffect(() => {
    start();
    const idleTime = setInterval(() => {
      if(idRef.current !== null){
      const random = Math.floor(Math.random() * 5) + 1;

      direcRef.current = direcRef.current * -1;
      speedRef.current = random * direcRef.current;

      console.log("id:", idRef.current,"speed:", speedRef.current, "direction:", direcRef.current);
      }
    }, 2000);
    return () => {
      clearInterval(idleTime);
      if(idRef.current){
        cancelAnimationFrame(idRef.current);
      }
    };
  }, []);

  return (
    <div className="lilum">
      <div
        className="Sprite"
        style={{transform: `translate(${posRef.current.x}px, ${posRef.current.y}px)`}}
        ref={lilyRef}

        onClick={stop}
      >
        <Xylem input={input} setInput={setInput} out={out} setOut={setOut}/>
        <img
          src="./img/Lily/Base.png"
          alt="Lily"
          id="lily-img"
        />
      </div>
    </div>
  );

}
export default Lilium;
