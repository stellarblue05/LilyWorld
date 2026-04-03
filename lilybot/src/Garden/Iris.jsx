import Draggable from 'react-draggable';
import {useRef, useState} from 'react'
import './Iris.css'

function Iris ( {onClick} ) {

    const nodeRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);
    const [value, setValue] = useState("");

    return(
        <div className='Iris'>
            <Draggable nodeRef={nodeRef} handle=".handle" disabled={fullscreen} position={fullscreen ? {x: 0,y: 0} : undefined}>
                <div ref={nodeRef} className={`flowers${fullscreen ? "fullscreen" : ""}`}>
                    <div className="handle"> 
                        <div>
                            <p>Calculator</p>
                        </div>
                        <button className='fullButton' onClick={() => setFullscreen(!fullscreen)} >▢</button>
                        <button className='Xbutton' onClick={onClick}>X</button>
                    </div>

                    <div className='appbody'>
                        <div className="calContainer">
                            <div className="calculator">
                                <form action="">
                                    <div>
                                        <input type='text' placeholder='21'/>
                                    </div>
                                    <div>
                                        <p>9 + 10?</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default Iris;   