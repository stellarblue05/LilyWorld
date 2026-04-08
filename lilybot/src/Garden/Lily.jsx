import Draggable from 'react-draggable';
import {useRef, useState} from 'react'

import './Lily.css';

function Lily( {onClick ,onAwake ,isAwake} ) {

    const nodeRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);


 return(
<div className='lily'>  
    <Draggable nodeRef={nodeRef} handle=".handle" disabled={fullscreen} position={fullscreen ? {x: 0,y: 0} : undefined}>
            <div ref={nodeRef} className={`flowers${fullscreen ? "fullscreen" : ""}`}>
                <div className="handle"> 
                    <div>
                        <p>Lily World 2.0</p>
                    </div>
                    <button className='fullButton' onClick={() => setFullscreen(!fullscreen)} >▢</button>
                    <button className='Xbutton' onClick={onClick}>X</button>
                </div>
                <div className='appbody'>
                 <div className="home">
                    <div className="headerPot">
                        <h1 className='MyHeader'>Welcome</h1>
                    </div>
                    
                    <p>Welcome to my world bla a bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur asperiores explicabo dignissimos nesciunt, in, quo ipsam, quaerat dolore ut illo est laudantium! Aperiam dolorum deserunt soluta sit, qui atque?</p>

                    <div className='mainPot'>
                         
                        <div className="centerPot">
                            <p>Bring me to your desktop!!!</p>
                            <img src="./img/Cat.png"/>
                            <button className='downloadBtn' id={isAwake ? "OK" : ""}onClick={onAwake}>{isAwake ? "Complete!" : "Download"}</button>
                        </div>
                        <div className="sidePot">
                            <p className='chat'>Chat with me!</p>
                            <p className='tutorial'>Tutorial</p>

                        </div>
                    </div>


                    <div className="footerPot">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel debitis tempore, a quas consequatur, eveniet repellendus corporis impedit in eum tenetur distinctio ab corrupti ipsam perferendis asperiores repellat, dicta ratione.</p>
                    </div>
                 </div>


                </div>
                
            </div>
     </Draggable>
</div>
 )
}

export default Lily