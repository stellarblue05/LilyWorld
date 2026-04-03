//Forest -> App -> main

import { useState } from 'react';
import Lily from './Garden/Lily.jsx'
import Tulip from './Garden/Tulip.jsx';
import Peony from './Garden/Peony.jsx';
import Carnation from './Garden/Carnation.jsx';
import Iris from './Garden/Iris.jsx';

import Clock from './House/Clock.jsx';
import Door  from './House/Door.jsx';


function Forest() {
  
  const [isBloom, setIsBloom] = useState(false);
  const [power, setPower] = useState(false);
  const [isTulip, setIsTulip] = useState(false);
  const [isIris , setIsIris] = useState(false);
  const [isCarnation, setIsCarnation] = useState(false);
  const [isPeony, setIsPeony] = useState(false);

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
      {isBloom && <Lily onClick={lilyHarvest}/>}
      {power && <Door onClick={powerHarvest}/>}
      {isTulip && <Tulip onClick={tulipHarvest}/> }
      {isCarnation && <Carnation onClick={carnationHarvest}/>}
      {isIris && <Iris onClick={irisHarvest}/>}
      {isPeony && <Peony onClick={peonyHarvest}/>}


    </>
  )
}

export default Forest