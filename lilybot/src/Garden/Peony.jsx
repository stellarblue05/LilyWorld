import Draggable from 'react-draggable';
import {useRef, useState} from 'react'

function Peony ( {onClick} ) {

    const nodeRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);

    return(
        <>
            <Draggable nodeRef={nodeRef} handle=".handle" disabled={fullscreen} position={fullscreen ? {x: 0,y: 0} : undefined}>
                <div ref={nodeRef} className={`flowers${fullscreen ? "fullscreen" : ""}`}>
                    <div className="handle"> 
                        <div>
                            <p>Setting</p>
                        </div>
                        <button className='fullButton' onClick={() => setFullscreen(!fullscreen)} >▢</button>
                        <button className='Xbutton' onClick={onClick}>X</button>
                    </div>
                    <div className='appbody'>
                        <h1>AAAA</h1>
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default Peony;   