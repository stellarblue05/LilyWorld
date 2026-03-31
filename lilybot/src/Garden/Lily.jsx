import Draggable from 'react-draggable';
import {useRef, useState} from 'react'

function Lily( {onClick} ) {

    const nodeRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);

 return(
<>
    <Draggable nodeRef={nodeRef} handle=".handle" disabled={fullscreen}>
            <div ref={nodeRef} className={`flowers ${fullscreen ? "fullscreen" : ""}`}>
                <div className="handle"> 
                    <div>
                        <p>Lily World</p>
                    </div>
                    <button className='fullButton' onClick={() => setFullscreen(!fullscreen)}>▢</button>
                    <button className='Xbutton' onClick={onClick}>X</button>
                </div>
                <div className='appbody'></div>
                <img src="/img/Banana.png"/>
            </div>
     </Draggable>
</>
 )
}

export default Lily