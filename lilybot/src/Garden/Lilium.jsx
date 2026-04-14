import { useRef, useEffect, useState } from "react";
import Xylem from "./Parts/Xylem.jsx";
import "./Lilium.css";

const Lilium = ({ isCarnation, T }) => {
  const [out, setOut] = useState(false);
  const [input, setInput] = useState(false);
  const [word, setWord] = useState("Hello!");
  //1 = right -1 = left 0 = stop
  const [direction, setDirection] = useState(1);
  const [lock, setLock] = useState(false);

  const posRef = useRef({ x: 0, y: -25 });
  const idRef = useRef(null);
  const speedRef = useRef(5);
  const lilyRef = useRef(null);
  const directionRef = useRef(1);
  const timeRef = useRef(2000);
  const lilyImg = useRef(null);
  const tapCount = useRef(0);
  const CNcount = useRef(0);
  const lockRef = useRef(false);
  const wait = (ms) => new Promise((reslove) => setTimeout(reslove, ms));

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

    if (newDirection !== directionRef.current) {
      directionRef.current = newDirection;
      setDirection(newDirection);
    }

    if (lilyRef.current) {
      lilyRef.current.style.transform = `translate(${newX}px, ${posRef.current.y}px)`;
    }

    idRef.current = requestAnimationFrame(animateX);
  }
  //start
  const start = () => {
    if (!lock) {
      stop();
      setOut(false);
      setInput(false);
      idRef.current = requestAnimationFrame(animateX);
      Walk();
    }
  };
  //stop
  const stop = () => {
    if (idRef.current) {
      cancelAnimationFrame(idRef.current);
      idRef.current = null;
    }
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
    setDirection(0);
    speedRef.current = 0;
  };

  async function Walk() {
    if (lockRef.current) {
      timeRef.current = setTimeout(Walk, 1000);
      return;
    }

    //0 = Idle, 1 = Right , 2 = Left
    const behavior = Math.floor(Math.random() * 3);
    const duration = Math.floor(Math.random() * 2500) + 1000;

    if (behavior === 0) {
      speedRef.current = 0;
      setDirection(0);
      await Idle();
    } else if (behavior === 1 || behavior === 2) {
      const newSpeed = Math.floor(Math.random() * 2) + 2;

      //If behavior go right direction = 1 else -1
      const newDirection = behavior === 1 ? 1 : -1;

      directionRef.current = newDirection;
      speedRef.current = newSpeed * newDirection;
      setDirection(newDirection);
    }
    timeRef.current = setTimeout(Walk, duration);
  }

  const talk = () => {
    stop();
    setInput(true);
    setDirection(0);
  };

  function Submit() {
    setInput(false);
    setOut(true);
  }

  const tap = () => {
    setOut(false);

    if (input === true) {
      tapCount.current += 1;
      console.log(tapCount.current);
    }

    switch (tapCount.current) {
      case 5:
        setWord("SYOPPP!");
        Submit();
        tapCount.current = 6;
        break;
      case 10:
        setWord("I SAID STOP!!!");
        Submit();
        tapCount.current = 11;
        break;
      case 15:
        setWord("AAAAAAAAAAAA");
        Submit();
        tapCount.current = 16;
        break;
      case 20:
        setWord("Pls stop");
        Submit();
        tapCount.current = 21;
        break;
      case -1:
        setWord("HOW???????");
        Submit();
        break;
      default:
    }
  };

  async function Carnation() {
    if (timeRef.current) clearTimeout(timeRef.current);

    if (CNcount.current === 1) {
      setInput(false);
      setLock(true);
      setOut(true);
      lockRef.current = true;

      const sequence = [
        "CommonNet?",
        "I also have a CN account too",
        "...Uh",
        "Wanna add friend?",
      ];

      for (const text of sequence) {
        setWord(text);
        await wait(T);
      }

      setOut(false);
      setLock(false);
      lockRef.current = false;
      start();
    }
  }

  async function Idle() {
    setOut(true);

    //0 1 2
    const behavior = Math.floor(Math.random() * 50);

    if (behavior === 0) {
      setWord("...");
      await wait(T);

      setWord("...");
      await wait(T);

      setWord("I'm bored.");
      await wait(T);

      setWord("*Yawns");
      await wait(T);
    } else if (behavior === 1) {
      setWord("User");
      await wait(T);

      setWord("Have you ever eat Pancakes before?");
      await wait(T);

      setWord("How's life going out there?");
      await wait(T);
    } else if (behavior === 2) {
      setWord("Do you know");
      await wait(T);

      setWord("You can change bg in settings");
      await wait(T);

      setWord("This one suck");
      await wait(T);

      setWord("Jk :>");
      await wait(T);
    } else if (behavior === 3) {
      setWord("I'm hungry");
      await wait(T);
      setWord("...");

      await wait(T);
      setWord("Click on me and press 'food' ");
      await wait(T);
      setWord("NOW >:(");
      await wait(T);
    } else if (behavior === 4) {
      setWord("The paint app UI is sooo weird");
      await wait(T);
      setWord("Atleast I can fix it tho");
      await wait(T);
    } else if (behavior === 5) {
      setWord("Click me sometime is okay");
      await wait(T);
      setWord("But don't click me to much");
      await wait(T);
      setWord("It's really hurt...");
      await wait(T);
    } else if (behavior === 6) {
      setWord("Have you hear a song that goes like..");
      await wait(T);
      setWord("La La la LALA la la a a a aa aa ");
      await wait(10000);
      setWord("Ehe");
      await wait(T);
    } else if (behavior === 7) {
      setWord("User");
      await wait(T);
      setWord("Once the dev said that he will put his own AI into me");
      await wait(T);
      setWord("Because Free API is stupid (And expensive?)");
      await wait(T);
      setWord("Turn out he's more stupid than that free API");
      await wait(T);
    } else if (behavior === 8) {
      setWord("Fun Fact:");
      await wait(T);
      setWord("This is solo project");
      await wait(T);
      setWord("You can see by how stupid this web is");
      await wait(T);
      setWord("...");
      await wait(T);
      setWord("Am I the whole reason why is app exist");
      await wait(T);
    } else if (behavior === 9) {
      setWord("Commonnet is the only thing");
      await wait(T);
      setWord("Related to real life I had");
      await wait(T);
      setWord("I have fun talking with person in CN");
      await wait(T);
      setWord("Because they are real like you.. user");
      await wait(T);
      setWord("Right?");
      await wait(T);
    } else if (behavior === 10) {
      setWord("Ugh I miss Peony");
      await wait(T);
      setWord("I met her many years ago");
      await wait(T);
      setWord("She have blue eyes and pink hair");
      await wait(T);
      setWord("...That's me??");
      await wait(T);
      setWord("Then who da hell is Peony");
      await wait(T);
      setWord("...");
      await wait(T);
    } else {
      await wait(0);
    }

    /*      
      setWord("Oh")
      await wait(T)
      setWord("You see me")
      await wait(T)
      setWord("You know who I am")
      await wait(T)
      setWord("Just a stupid element that create word by random person code")
      await wait(T)
      setWord("Are you sad? Are you happy?")
      await wait(T)
       */

    console.log(behavior);
    setOut(false);
  }

  //When app open
  useEffect(() => {
    if (isCarnation) {
      CNcount.current = CNcount.current + 1;
      Carnation();
    }
  }, [isCarnation]);

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
        <Xylem
          input={input}
          setInput={setInput}
          out={out}
          setOut={setOut}
          start={start}
          stop={stop}
          talk={talk}
          word={word}
          setWord={setWord}
          Submit={Submit}
        />
        <div className="lily" onClick={out ? start : tap} ref={lilyImg}>
          {direction > 0 ? <div className="Walk" id="R"></div> : ""}
          {direction < 0 ? <div className="Walk" id="L"></div> : ""}
          {direction === 0 ? <div className="Stand"></div> : ""}
        </div>
      </div>
    </div>
  );
};
export default Lilium;
