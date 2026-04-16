import Draggable from 'react-draggable';
import {useRef, useState} from 'react'

//If this is not a rock, then why is it here? 
function ForgetMeNot ( {onClick} ) {

    const nodeRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);

    return(
        <>
            <Draggable nodeRef={nodeRef} handle=".handle" disabled={fullscreen} position={fullscreen ? {x: 0,y: 0} : undefined}>
                <div ref={nodeRef} className={`flowers${fullscreen ? "fullscreen" : ""}`}>
                    <div className="handle"> 
                        <div>
                            <p>README</p>
                        </div>
                        <button className='fullButton' onClick={() => setFullscreen(!fullscreen)} >▢</button>
                        <button className='Xbutton' onClick={onClick}>X</button>
                    </div>
                    <div className='appbody' >
                        <div className="main" style={{margin: "10px"}}>
                                <h3>Lily World (In Development)</h3>
                                <p>A solo project to see what would happen for new-born large language model that lives and trains in the AI world.</p>
                                <br />
                                <p>This project code ,design, Art ,everything is create by human but the content inside it is AI</p>
                                <br />
                                <p style={{marginLeft: "80%"}}>-Astella</p>
                        </div>
                        
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default ForgetMeNot;   