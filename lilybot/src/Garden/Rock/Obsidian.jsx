
import Draggable from 'react-draggable';
import {useRef, useState} from 'react'


function Obsidian ( {onClick} ) {

    const nodeRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);

    return(
        <>
            <Draggable nodeRef={nodeRef} handle=".handle" disabled={fullscreen} position={fullscreen ? {x: 0,y: 0} : undefined}>
                <div ref={nodeRef} className={`flowers${fullscreen ? "fullscreen" : ""}`}>
                    <div className="handle"> 
                        <div>
                            <p>Note</p>
                        </div>
                        <button className='fullButton' onClick={() => setFullscreen(!fullscreen)} >▢</button>
                        <button className='Xbutton' onClick={onClick}>X</button>
                    </div>
                    <div className='appbody'>
                        <div className="main"  style={{margin: "5px", overflow: "hidden"}}>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default Obsidian;   