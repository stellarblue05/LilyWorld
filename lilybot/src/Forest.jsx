//Forest -> App -> main

function Forest() {
  

  function test() {
    console.log("ok");
  }


  return (
    <>
   
      <div className="appPot">
        <div className="app-lily">
          <button className="desktop-lily"><img src="https://placehold.co/70"/></button>
          <p> Lily Bot </p>
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
          <p> Ca     </p>
        </div>

       <div className="app-Gardener">
          <button className="desktop-Gardener" onClick={test}><img src="https://placehold.co/70"/></button>
          <p> Settings </p>
        </div>

      </div>


      <div className="taskBar">
        <button className="power">O</button>
        <button className="menu">Menu</button>
      </div>



    </>
  )
}

export default Forest