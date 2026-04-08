import { useRef, useEffect, useState } from "react";
import "./Lilium.css";

const Lilium = () => {
  const [pos, setPos] = useState({ x: 0, y: -35 });
  const [out, setOut] = useState(false);

  const containerRef = useRef(null);
  const idRef = useRef(null);
  const direcRef = useRef(1);
  const speedRef = useRef(5);

  //Animation loop
  function animateX() {
    setPos((p) => {
      const width = containerRef.current?.offsetWidth || 500;
      const lilyWidth = 64;

      let newX = p.x + speedRef.current;

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

      return { ...p, x: newX };
    });
    idRef.current = requestAnimationFrame(animateX);
  }

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
    speedRef.current = 0;
    setOut(true);
    console.log("stop");
    if (idRef.current) {
      cancelAnimationFrame(idRef.current);
      idRef.current = null;
    }
  };

  //Start move
  useEffect(() => {
    start();

    return () => {
      if (idRef.current) {
        cancelAnimationFrame(idRef.current);
      }
    };
  }, []);

  //Random speed and direction swap every loop
  useEffect(() => {
    const idleTime = setInterval(() => {
      const random = Math.floor(Math.random() * 5);

      direcRef.current = direcRef.current * -1;
      speedRef.current = random * direcRef.current;

      console.log("speed:", speedRef.current, "direction:", direcRef.current);
    }, 2000);
    return () => clearInterval(idleTime);
  }, []);

  return (
    <div className="lilum" ref={containerRef}>
      <div
        className="Sprite"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: "64px",
          height: "auto",
        }}

        onClick={stop}
      >
        {out ? <p>hello</p> : ""}
        <img
          src="./img/Lily/Base.png"
          alt="Lily"
          id="lily-img"
          
        />
      </div>
    </div>
  );
};

export default Lilium;
