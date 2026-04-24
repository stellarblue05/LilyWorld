import Draggable from 'react-draggable';
import {useEffect, useRef, useState} from 'react'
import './Tulip.css';

function Tulip ( {onClick} ) {

    const nodeRef = useRef(null);
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    const [fullscreen, setFullscreen] = useState(true);
    const [isDrawing, setIsDrawing] = useState(false);
    const [size,setSize] = useState(5);
    const [color, setColor] = useState("#000000");
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const ctx = ctxRef.current
        if(!ctx) return;
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
    }, [color, opacity, size]);

    const getMousePos = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        return{
             x: (e.clientX - rect.left) * (canvas.width / rect.width),
             y: (e.clientY - rect.top) * (canvas.height / rect.height)
        };
    };

    // Start Draw
    const startDarw = (e) => {

        const { x, y} = getMousePos(e);
        ctxRef.current.beginPath()
        ctxRef.current.moveTo(
            x,y
        );
        setIsDrawing(true);
    };

    //End draw
    const endDraw = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    }

    //draw

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }

        const {x, y} = getMousePos(e);
        ctxRef.current.lineTo(
            x, y
        )
        ctxRef.current.stroke();
    };


useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctxRef.current = ctx;

    return () => window.removeEventListener("resize", resizeCanvas);
}, []);

    const clear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }




    return( 
        <div className='tulip'>
            <Draggable nodeRef={nodeRef} handle=".handle" disabled={fullscreen} position={fullscreen ? {x: 0,y: 0} : undefined}>
                <div ref={nodeRef} className={`flowers${fullscreen ? "fullscreen" : ""}`}>
                    <div className="handle"> 
                        <div>
                            <p>Paint</p>
                        </div>
                        <button className='fullButton' onClick={() => setFullscreen(!fullscreen)} >▢</button>
                        <button className='Xbutton' onClick={onClick}>X</button>
                    </div>
                    <div className='appbody'>
                        <div className="container">
                            <div className="toolbar">


                                <label>Color</label>
                                <p>{color}</p>
                                <input id="color"  type="color" onChange={(cake) => {
                                    setColor(cake.target.value);
                                }}/>



                                <label>Size</label>
                                <p>{size} </p>
                                <input id="size"  type='range' min="1" max="30" className="range" onChange={(apple) => {
                                    setSize(Number(apple.target.value));
                                }}/>
                                


                                <label>Opacity</label>
                                <p>{opacity}</p>
                                <input id="Opacity"  type='range' min="1" max="100" className="range" onChange={(m) => {
                                    setOpacity(Number(m.target.value / 100));
                                }}/>

                                <button id="clear" onClick={clear}>Clear</button>
                            </div>
                            <div className="canvas">
                                <canvas ref={canvasRef}
                                        onMouseDown={startDarw}
                                        onMouseMove={draw}
                                        onMouseUp={endDraw}
                                        onMouseLeave={endDraw}/>
                            </div>
                            <div className="footer">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default Tulip;   