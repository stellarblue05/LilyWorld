//Forest -> App -> main

import { useState } from 'react';
import Lily from './Garden/Lily.jsx'


function Forest() {
  
  const [isBloom, setIsBloom] = useState(false);


  const lilyHarvest = () =>  {
      setIsBloom(!isBloom);
  }


  return (
    <>
   
      <div className="appPot">
        <div className="app-lily">
          <button className="desktop-lily"><img src="https://placehold.co/70" onClick={lilyHarvest}/></button>
          <p> MyComputer </p>
        </div>

        <div className="app-Iris">
          <button className="desktop-Iris"><img src="https://placehold.co/70"/></button>
          <p> Calculator </p>
        </div>

        <div className="app-Tulip">
          <button className="desktop-Tulip"><img src="https://placehold.co/70"/></button>
          <p> Paint </p>
        </div>

        <div className="app-Rose">
          <button className="desktop-Rose"><img src="https://placehold.co/70"/></button>
          <p> Carntion</p>
        </div>

       <div className="app-Gardener">
          <button className="desktop-Gardener" ><img src="/img/Banana.png"/></button>
          <p> Settings </p>
        </div>

      </div>



      <div className="taskBar">
        <button className="power">O</button>
        <button className="menu">Menu</button>
      </div>

      {/*App pop ups*/}
      {isBloom && <Lily onClick={lilyHarvest}/>}



    </>
  )
}

export default Forest