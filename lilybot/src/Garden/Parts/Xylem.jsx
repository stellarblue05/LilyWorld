import React, { useEffect } from 'react';
//THis one is for input on lily :)
const Xylem = ({input ,setInput, out, setOut, start, stop, talk, word, setWord, Submit}) => {
const wait = (ms) => new Promise(reslove => setTimeout(reslove, ms));

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
                    <button className='move' onClick={start}>Move</button>
                    <button className="eat" onClick={Eat}>Eat</button>
                 </div>
            </div>
        : ""}

        <div className="pick"></div>
        <div className="OutputBox"> {out ? <p key={word} className='Output'>{word}</p> : ""} </div>
        
        </div>
    );
}

export default Xylem;
