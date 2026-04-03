import React from 'react';
import './Door.css';

const Door = ({onClick}) => {
    return (
            <div onClick={onClick} className='door'>
                <button >X</button>
                <h1>No :)</h1>
                <p>-Lily</p>
            </div>    );
}

export default Door;
