import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";
import "./Root.css";

function Root({ onClick, root, app, setApp, setRoot }) {
  const nodeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);

  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(null);
  const [history, setHistory] = useState([]);
  const [help, setHelp] = useState(null);

  const pad = (str, len = 18) => str.padEnd(len, " ");





  const answer = {

    
    help101:
      `[HELP] Available commands:\n` +
      `- ${pad("app.name.X")} => Get app name by index\n` +
      `- ${pad("app.name.e")} => Get all apps name\n` +
      `- ${pad("app.id")} => List all app IDs\n` +
      `- ${pad("app.on.X")} => Execute app\n` +
      `- ${pad("app.set.X.NAME")} => Rename app\n` +
      `- ${pad("pc.X.on")} => Turn on PC settings\n` +
      `Enter [help102] for more commands`,
    "app.name":  
      "Please enter the APP.TARGET.ID to get the application name. Enter ADD.TARGET.E to execute all",
    help102:
      `[Help] Current index:\n ` +
      `- ${app.map((app) => {return pad(`${app.id}.${app.name}`)})} \n` +
      `- ${root.PC.map((pc) => {return pad(`${pc.id}.${pc.name}`)})}\n` +
      `- ------------------ Customize --------------------------\n` +
      `- ${pad("color.text.X")} => Customize Text color\n` +
      `- ${pad("color.bg.X")} => Customize Background Color\n`+ 
      `- ${pad("text.weight.X")} => Customize Text Weight\n` +
      `- ${pad("text.size.X")} => Customize Text Size\n` +
      `- ${pad("text.style.X")} => Customize Text Style\n` ,

  };

  const handleEnter = () => {
    const s = text.trim().toLowerCase();
    let result = "";

    if (s.startsWith("app.name.")) {
      const index = s.split(".")[2];

      if (!isNaN(index) && index >= 0 && index < app.length) {
        result = app[index].name;
      } else if (index === "e") {
        result = app.map((app) => app.name).join(" ,");
      } else {
        result = "Invalid app index";
      }
    } else if (s.startsWith("app.id")) {
      result = app.map((app) => {
        return `${app.id}.${app.name}, `;
      });
    } else if (s.startsWith("app.on.")) {
      const index = s.split(".")[2];

      if (!isNaN(index) && index >= 0 && index < app.length) {
        app[index].onClick();
        result = `${app[index].name}_successfully execute`;
      } else if (index === "e") {
        result = app.map((app) => app.onClick?.());
        result = `Allapp_successfully execute`;
      } else {
        result = "Invalid app index";
      }
    } else if (s.startsWith("app.set.")) {
      const index = Number(s.split(".")[2]);
      const change = text.trim().split(".")[3];
      if (!isNaN(index) && index >= 0 && index < app.length && change) {
        setApp((prev) =>
          prev.map((item, i) =>
            i === index ? { ...item, name: change } : item,
          ),
        );
        result = `${app[index].name}_successfully change to_ ${change}`;
      } else {
        result = "Invalid app index";
      }
    } else if (s.startsWith("pc.")) {
      const index = Number(s.split(".")[1]);
      const action = s.split(".")[2];
      if (index >= 0 && index < root.PC.length) {
        const id = root.PC[index];
        if (action === "on") {
          id.on();
          result = `${id.name}_successfully execute`;
        } else {
          result = "Please define action  (type help101 for more info)";
        }
      } else {
        result = "Invalid index";
      }
    }else if(s.startsWith("color.")){
        const thing = s.split(".")[1];
        const color = s.split(".")[2];
        if(thing === "text" && color){
            bodyRef.current.style.color = color; 
            inputRef.current.style.color = color;
        }
        else if(thing === "bg" && color){
            bodyRef.current.style.backgroundColor = color;
        }
        else{
            result = "Invaild type";
        }
    }
    else if(s.startsWith("text.")){
        const thing = s.split(".")[1];
        const value = s.split(".")[2];
        if(thing === "weight" && value){
            bodyRef.current.style.fontWeight = value;
            inputRef.current.style.fontWeight = value;
        }
        else if(thing === "style" && value){
            bodyRef.current.style.fontStyle = value;
            inputRef.current.style.fontStyle = value;
        }
        else if(thing === "size" && value){
            if(!isNaN(value) && value > 0 && value < 50){
                bodyRef.current.style.fontSize = `${value}px`;
            inputRef.current.style.fontSize = `${value}px`;
            }
            else if(value >= 50){
                result="Number too big"
            }
            else if(value <= 0){
                result="Text size can't be lower than 1"
            }
            else{
                result = "Invalid Value"
            }
        }
    } else {
       result = answer[s] || ("Unknown command. Type 'help101' for help.");
    }
    setHistory((prev) => [...prev, `> ${s}`, result]);
    setText("");
  };

  useEffect(() => {
    bodyRef.current.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const helper = {
    app: "name, id, set, on",
    "app.name": "e: All , Integer: App index",
    "app.set": "Integer: App index",
    "app.on": "Integer: App index, e: All",
    "color": "text, bg",
    "text": "weight, size",
    "text.weight": "100 - 700, bold",
    "text.size": "1 - 50",
  };
  
  useEffect(() => {
    const t = text.trim().toLowerCase();
    if (!t) {
      setHelp("Enter help101 to see available commands.");
    } else {
      setHelp(helper[t] || "");
    }
  }, [text]);

  return (
    <div className="root">
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
              <p>Control Panel</p>
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
            <div className="items" ref={bodyRef}>
              {history.map((text, id) => (
                <div className="history">
                  <p key={id}>{text}</p>
                </div>
              ))}
              <input
                type="text"
                ref={inputRef}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEnter();
                    inputRef.current.value = "";
                  }
                }}
              />
              <div className="help">
                <p style={{ opacity: 0.8 }}>{help}</p>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Root;

/*
  const root = {
    app: {
      carnation: {
        is: isCarnation,
        set: setIsCarnation,
        on: carnationHarvest,
      },
      tulip: {
        is: isTulip,
        set: setIsTulip,
        on: tulipHarvest,
      },
      lily: {
        is: isBloom,
        set: setIsBloom,
        on: lilyHarvest,
      },
      iris: {
        is: isIris,
        set: setIsIris,
        on: irisHarvest,
      },
      peony: {
        is: isPeony,
        set: setIsPeony,
        on: peonyHarvest,
      },
      sunflower: {
        is: isSunflower,
        set: setIsSunflower,
        on: () => setIsSunflower(!isSunflower),
      },
    },

    desk: {
      is: isDesk,
      set: setIsDesk,
      on: () => setIsDesk(!isDesk),
    },
    shelf: {
      is: isShelf,
      set: setIsShelf,
      on: () => setIsShelf(!isShelf),
    },
    root: {
      is: isRoot,
      set: setIsRoot,
      on: () => setIsRoot(!isRoot),
    },
    sprite: {
      talkTime: {
        is: T,
        set: setT,
      },
    },
    PC: {
      bluetooth: {
        is: blueOn,
        set: setBlueOn,
      },
      airplaneMode: {
        is: airOn,
        set: setAirOn,
      },
      SaveBattery: {
        is: savOn,
        set: setSavOn,
      },
      Wifi: {
        is: WifiOn,
        set: setWifiOn,
      },
      DoNotDisturb: {
        is: NoOn,
        set: setNoOn,
      },
    },
  };

*/
