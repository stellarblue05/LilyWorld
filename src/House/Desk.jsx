import React, { useEffect, useRef, useState } from "react";
import "./Desk.css";
import Ruby from "../Garden/Rock/Ruby.json";
const Desk = ({
  blueOn,
  setBlueOn,
  airOn,
  setAirOn,
  savOn,
  setSavOn,
  WifiOn,
  setWifiOn,
  NoOn,
  setNoOn,
  setIsPeony,
}) => {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const barRef = useRef(0);
  const audioRef = useRef(null);

  const songs = [
    {
      img: "img/Mic/AG.png",
      name: "A Beautiful Garden",
      art: "Aventure",
      audio: "audio/ABeautifulGarden.mp3",
    },
    {
      img: "img/Mic/FIY.png",
      name: "Falling Into You",
      art: "Aventure",
      audio: "audio/FallingIntoYou.mp3",
    },
    {
      img: "img/Mic/Bre.png",
      name: "Bread",
      art: "Lukrembo",
      audio: "audio/Bread.mp3",
    },
    {
      img: "img/Mic/Crm.png",
      name: "Creamy",
      art: "Aylex",
      audio: "audio/Creamy.mp3",
    },
    {
      img: "img/Mic/WCC.png",
      name: "Warm Cup of Coffe",
      art: "Moavii",
      audio: "audio/WarmCupofCoffe.mp3",
    },
  ];
  function prevSong() {
    if (songIndex === 0) {
      setSongIndex(songs.length - 1);
    } else {
      setSongIndex(songIndex - 1);
    }
  }
  function nextSong() {
    if (songIndex == songs.length - 1) {
      setSongIndex(0);
    } else {
      setSongIndex(songIndex + 1);
    }
  }
  function start() {
    const audio = audioRef.current;
    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      audio.play();
    }
  }
  function onload() {
    barRef.current.value = 0;
    barRef.current.max = audioRef.current.duration;
  }
  function moveBar() {
    barRef.current.value = audioRef.current.currentTime;
    if (audioRef.current.currentTime == barRef.current.max) {
      nextSong();
      start();
    }
  }
  function barcurrent() {
    audioRef.current.currentTime = barRef.current.value;
  }
  function shuffle() {
    setSongIndex(Math.floor(Math.random() * songs.length));
    console.log(songIndex);
    start();
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    }
  }, [songIndex]);

  const song = songs[songIndex];

  {
    /*--------------------------------------------------------------------------*/
  }

  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("#FFFFFF");
  const [cid, setCid] = useState(0);

  function handleColor() {
    if (cid === 0) {
      setColor("#fd4932");
      setCid(1);
    } else if (cid === 1) {
      setColor("#1ccd72");
      setCid(2);
    } else if (cid === 2) {
      setColor("#7a7ad9");
      setCid(3);
    } else if (cid === 3) {
      setColor("#ffc7fa");
      setCid(-1);
    } else {
      setColor("#FFFFFF");
      setCid(0);
    }
  }

  {
    /* --------------------------------------------------------------------------- */
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function formatDate() {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    return `${padZero(day)}/${padZero(month)}/${padZero(year)}`;
  }

  function formatDay() {
    const day = time.getDay();
    let d;
    switch (day) {
      case 1:
        d = "Monday";
        break;
      case 2:
        d = "Tuesday";
        break;
      case 3:
        d = "Wednesday";
        break;
      case 4:
        d = "Thursday";
        break;
      case 5:
        d = "Friday";
        break;
      case 6:
        d = "Saturday";
        break;
      case 0:
        d = "Sunday";
        break;
      default:
        d = "";
    }

    return d;
  }

  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  {
    /* --------------------------------------------------------------------- */
  }

  const mail = Ruby.slice(-5);
  const [fullId, setFullId] = useState(null);

  return (
    <div className="desk">
      <div className="main">
        <div className="head">
          <div className="sett">
            <button
              onClick={() => {
                setWifiOn(!WifiOn);
              }}
              className={WifiOn ? "on" : ""}
            >
              {WifiOn ? (
                <span className="material-symbols-outlined">wifi</span>
              ) : (
                <span className="material-symbols-outlined">
                  signal_wifi_statusbar_not_connected
                </span>
              )}
            </button>
            <p>Wi-Fi</p>
          </div>

          <div className="sett">
            <button
              onClick={() => {
                setBlueOn(!blueOn);
              }}
              className={blueOn ? "on" : ""}
            >
              {blueOn ? (
                <span className="material-symbols-outlined">bluetooth</span>
              ) : (
                <span className="material-symbols-outlined">
                  bluetooth_disabled
                </span>
              )}
            </button>
            <p>Bluetooth</p>
          </div>

          <div className="sett">
            <button
              onClick={() => {
                setAirOn(!airOn);
              }}
              className={airOn ? "on" : ""}
            >
              {airOn ? (
                <span className="material-symbols-outlined">travel</span>
              ) : (
                <span className="material-symbols-outlined">
                  airplanemode_inactive
                </span>
              )}
            </button>
            <p>Airplane Mode</p>
          </div>

          <div className="sett">
            <button
              onClick={() => {
                setSavOn(!savOn);
              }}
              className={savOn ? "on" : ""}
            >
              {savOn ? (
                <span className="material-symbols-outlined">
                  battery_android_frame_shield
                </span>
              ) : (
                <span className="material-symbols-outlined">
                  battery_android_shield
                </span>
              )}
            </button>
            <p>Energy Saver</p>
          </div>

          <div className="sett">
            <button
              onClick={() => {
                setNoOn(!NoOn);
              }}
              className={NoOn ? "on" : ""}
            >
              {NoOn ? (
                <span className="material-symbols-outlined">
                  do_not_disturb_on
                </span>
              ) : (
                <span className="material-symbols-outlined">
                  do_not_disturb_off
                </span>
              )}
            </button>
            <p>Do not disturb</p>
          </div>

          <div className="sett">
            <button
              onClick={() => {
                setIsPeony(true);
              }}
            >
              <span className="material-symbols-outlined">add_2</span>
            </button>
            <p>More</p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="body">
          <img src={song.img} alt="Audio" />
          <div className="item">
            <h3>{song.name}</h3>
            <p>{song.art}</p>

            <input
              type="range"
              className="bar"
              ref={barRef}
              onChange={barcurrent}
            />
            <div className="play">
              <button className="sml" onClick={shuffle}>
                <span className="material-symbols-outlined">shuffle</span>
              </button>
              <button onClick={prevSong}>
                <span className="material-symbols-outlined">skip_previous</span>
              </button>
              <button onClick={start} className="big">
                {isPlaying ? (
                  <span className="material-symbols-outlined">pause</span>
                ) : (
                  <span className="material-symbols-outlined">play_arrow</span>
                )}
              </button>
              <button onClick={nextSong}>
                <span className="material-symbols-outlined">skip_next</span>
              </button>
              <button className="sml">
                <span className="material-symbols-outlined">repeat</span>
              </button>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={song.audio}
            onLoadedMetadata={onload}
            onTimeUpdate={moveBar}
          ></audio>
        </div>
      </div>
      <div className="main">
        <div className="foot">
          <div>
            <p style={{ color: color }} className="time">
              {formatTime()}
            </p>
            <p style={{ color: color }} className="day">
              {formatDay()}
            </p>
            <p style={{ color: color }} className="date">
              {formatDate()}
            </p>
          </div>
        </div>
        <button
          className="color"
          onClick={handleColor}
          style={{ backgroundColor: color }}
        ></button>
      </div>
      <div className="main">
        <div className="leg">
          <div className="hl">
            <p>Notification</p>
            <span className="material-symbols-outlined">
              notifications_active
            </span>
          </div>
          <div className="mail" key={mail.id}>
            {mail.map((mail) => {
              const isFull = fullId === mail.id;
              return (
                <div className="content" key={mail.id}>
                  <div className="h" key={mail.id}>
                    <img src={mail.pfp} alt={mail.n} />
                    <div className="na">
                      <p className="n">{mail.n}</p>
                      <p className="a">{mail.a}</p>
                    </div>
                    <button
                      className="bu"
                      onClick={() => {
                        setFullId(isFull ? null : mail.id);
                      }}
                    >
                      {isFull ? (
                        <span className="material-symbols-outlined">
                          keyboard_arrow_up
                        </span>
                      ) : (
                        <span className="material-symbols-outlined">
                          keyboard_arrow_down
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="b">
                    <p className="t">{mail.t}</p>
                    {isFull ? (
                      <p className="c">{mail.c}</p>
                    ) : (
                      <p className="c">{mail.c.slice(0, 80)}...</p>
                    )}
                    <p className="d">{mail.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desk;
