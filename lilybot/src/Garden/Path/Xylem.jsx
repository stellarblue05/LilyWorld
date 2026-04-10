import React from 'react';
//THis one is for input on lily :)
const Xylem = ({input ,setInput, out, setOut, start, stop, talk, word, setWord, Submit}) => {


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

        <div className="OutputBox"> {out ? <p className='Output'>{word}</p> : ""} </div>
        
        </div>
    );
}

export default Xylem;
