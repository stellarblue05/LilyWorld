import { useRef, useEffect, useState } from "react";
import Xylem from "./Path/Xylem.jsx";
import "./Lilium.css";

const Lilium = () => {
  const [out, setOut] = useState(false);
  const [input, setInput] = useState(false);
  const [word, setWord] = useState("Hello!");
  //1 = right -1 = left 0 = stop
  const [direction, setDirection] = useState(1);

  const posRef = useRef({ x: 0, y: -25 });
  const idRef = useRef(null);
  const speedRef = useRef(5);
  const lilyRef = useRef(null);
  const directionRef = useRef(1);
  const timeRef = useRef(2000);
  const lilyImg = useRef(null);
  const tapCount = useRef(0);

  //Animation loop
  function animateX() {
    const width = document.documentElement.clientWidth || 500;
    const lilyWidth = 64;

    let newX = Math.floor(posRef.current.x + speedRef.current);

    //wall
    if (newX >= width - lilyWidth) {
      newX = width - lilyWidth;
      speedRef.current = -Math.abs(speedRef.current);
    }

    if (newX <= 0) {
      newX = 0;
      speedRef.current = Math.abs(speedRef.current);
    }

    posRef.current.x = newX;

    const newDirection = Math.sign(speedRef.current);

    if(newDirection !== directionRef.current){
      directionRef.current = newDirection;
      setDirection(newDirection);
    }

    if (lilyRef.current) {
      lilyRef.current.style.transform = `translate(${newX}px, ${posRef.current.y}px)`;
    }

    idRef.current = requestAnimationFrame(animateX);
  };
  //start
  const start = () => {
    stop();
    setOut(false);
    setInput(false);
    idRef.current = requestAnimationFrame(animateX);
    Walk();
  };
  //stop
  const stop = () => {

    if (idRef.current) {
      cancelAnimationFrame(idRef.current);
      idRef.current = null;
    }
    if(timeRef.current){
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
      setDirection(0);
      speedRef.current = 0;
      console.log("stop");
  };


  const Walk = () => {
    //0 = Idle, 1 = Right , 2 = Left
    const behavior =Math.floor(Math.random() * 3);

    const duration = Math.floor(Math.random() * 2500) + 1000;
    if(behavior === 0){
      speedRef.current = 0;
      setDirection(0);
    }
    else if(behavior === 1|| behavior === 2){
      const newSpeed = Math.floor(Math.random() * 2) + 2;

      //If behavior go right direction = 1 else -1
      const newDirection = behavior === 1 ? 1 : -1

      directionRef.current = newDirection;
      speedRef.current = newSpeed * newDirection;
      setDirection(newDirection);
    }

    timeRef.current = setTimeout(Walk, duration);
  }


  const talk =() => {
    stop();
    setInput(true);
  }

  function Submit(){
        setInput(false);
        setOut(true);
  }


  const tap = () => {
    setOut(false);
    
    if(input === true){
          console.log('tap');
          tapCount.current += 1
          console.log(tapCount.current);
    }

    switch (tapCount.current) {
      case 5:
        setWord("SYOPPP!");
        Submit();
        tapCount.current = 6;
        break;
      case 10:
        setWord("I SAID STOP!!!")
        Submit();
        tapCount.current = 11
        break;
      case 15:
        setWord("AAAAAAAAAAAA")
        Submit();
        tapCount.current = 16
        break;
      case 20:
        setWord("Pls stop")
        Submit();
        tapCount.current = 21
        break;
      case -1:
        setWord("HOW???????")
        Submit();
        break
      default:   
    }
  }

  
  //Random speed and direction swap every loop
  useEffect(() => {
    start();
    return () => stop();
  }, []);

  return (
    <div className="lilum">
      <div
        className="Sprite"
        style={{
          transform: `translate(${posRef.current.x}px, ${posRef.current.y}px)`,
        }}
        ref={lilyRef}
        onClick={input || out ? undefined : talk}
      >
        <Xylem input={input} setInput={setInput} out={out} setOut={setOut} start={start} stop={stop} talk={talk} word={word} setWord={setWord} Submit={Submit}/>
        <div className="lily" onClick={ out ? start : tap} ref={lilyImg}>
          {direction > 0 ? <div className="Walk" id="R"></div> : ""}
          {direction < 0 ? <div className="Walk" id="L"></div> : ""}
          {direction === 0 ? <div className="Stand"></div> : ""}
        </div>
      </div>
    </div>
  );
};
export default Lilium;
