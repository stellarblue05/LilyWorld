import React from 'react';
//THis one is for input on lily :)
const Xylem = ({input ,setInput, out, setOut}) => {

    function Submit(){
        setInput(false);
        setOut(true);
        console.log("e");
    }
    return (
        <div className='Xylem'>
        {input ? <div className="inputBox">
                  <input type="text" placeholder="Chat with her.." /> 
                  <button onClick={Submit}className="submit">:)</button>
                 </div>
        : ""}

        {out ? <p className='Output'>hello?</p> : ""}
        </div>
    );
}

export default Xylem;
