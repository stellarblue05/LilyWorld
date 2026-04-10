//Forest -> App -> main

import { useState , useRef} from 'react';
import Lily from './Garden/Lily.jsx'
import Tulip from './Garden/Tulip.jsx';
import Peony from './Garden/Peony.jsx';
import Carnation from './Garden/Carnation.jsx';
import Iris from './Garden/Iris.jsx';
import Lilium from './Garden/Lilium.jsx'


import Clock from './House/Clock.jsx';
import Door  from './House/Door.jsx';


function Forest() {
  
  const [isBloom, setIsBloom] = useState(false);
  const [power, setPower] = useState(false);
  const [isTulip, setIsTulip] = useState(false);
  const [isIris , setIsIris] = useState(false);
  const [isCarnation, setIsCarnation] = useState(false);
  const [isPeony, setIsPeony] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [bg, setBg] = useState(1);

  const powerHarvest = () => {
    setPower(!power)
  }

  const lilyHarvest = () =>  {
      setIsBloom(!isBloom);
  }

  function tulipHarvest() {
    setIsTulip(!isTulip)
  }

  function irisHarvest() {
    setIsIris(!isIris)
  }

  function peonyHarvest() {
    setIsPeony(!isPeony)
  }

  function carnationHarvest() {
    setIsCarnation(!isCarnation)
  }



  return (
    <>
      <div className="background">
        {bg === 1 ? <img src="img/Bg/Bliss.png" className='bg' id='bg1'/> : ""}
        {bg === 2 ? <img src="img/Bg/CityNight.png" className='bg' id='bg2'/> : ""}
        {bg === 3 ? <img src="img/Bg/Green.png" className='bg' id='bg3'/> : ""}
        {bg === 4 ? <img src="img/Bg/Cat2.png" className='bg' id='bg4'/> : ""}
        {bg === 5 ? <img src="img/Bg/E.png" className='bg' id='bg5'/> : ""}
        {bg === 6 ? <img src="img/Bg/Cafe.png" className='bg' id='bg6'/> : ""}
      </div>


      <div className="appPot">
        <div className="app-lily">
          <button className="desktop-lily" onClick={lilyHarvest}><img src="/img/Lily.png" /></button>
          <p> NotSpyware </p>
        </div>

        <div className="app-Iris">
          <button className="desktop-Iris" onClick={irisHarvest}><img src="/img/Calculator.png"  /></button>
          <p> Calculator </p>
        </div>

        <div className="app-Tulip">
          <button className="desktop-Tulip" onClick={tulipHarvest}><img src="/img/Paint.png" /></button>
          <p> Paint </p>
        </div>

        <div className='app-Carnation'>
          <button className="desktop-Carnation" onClick={carnationHarvest}><img src="/img/Cat.png" /></button>
          <p> CommonNet </p>
        </div>

       <div className="app-Peony">
          <button className="desktop-Peony" onClick={peonyHarvest}><img src="/img/Banana.png"  /></button>
          <p> Settings </p>
        </div>

      </div>



      <div className="taskBar">
        <button className="power" onClick={powerHarvest}><span className="material-symbols-outlined">power_settings_new</span></button>
        <div className='time'> 
          <Clock/>
        </div>
      </div>

      {/*App pop ups*/}
      {isBloom && <Lily onClick={lilyHarvest} onAwake={() => setIsAwake(true)} isAwake={isAwake}/>}
      {power && <Door onClick={powerHarvest}/>}
      {isTulip && <Tulip onClick={tulipHarvest}/> }
      {isCarnation && <Carnation onClick={carnationHarvest}/>}
      {isIris && <Iris onClick={irisHarvest}/>}
      {isPeony && <Peony onClick={peonyHarvest} bg={bg} setBg={setBg}/>}
      {isAwake && <Lilium/>}

    </>
  )
}

export default Forest