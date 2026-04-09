import React, { useEffect, useState } from 'react';
//THis one is for input on lily :)
const Xylem = ({input ,setInput, out, setOut, start, stop, talk}) => {

    const [word, setWord] = useState("Hello!");
    function Submit(){
        setInput(false);
        setOut(true);
    }

    function Output(){
        setWord("Hello!");
        Submit();
    }

    function Eat(){
        Submit();
        setWord("Nom nom :p");
    }

    
    return (
        <div className='Xylem'>
        {input ? 
        <div className="input">
            <div className="inputBox">
                  <input type="text" onSubmit={Submit} placeholder="Chat with her.." /> 
                  <button onClick={Output}className="submit">:)</button>
                 </div>
                 <div className="action">
                    <button className="eat" onClick={Eat}>Eat</button>
                 </div>
            </div>
        : ""}

        <div className="OutputBox"> {out ? <p className='Output'>{word}</p> : ""} </div>
        
        </div>
    );
}

export default Xylem;
