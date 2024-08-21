import React from 'react'
import './keyboard.css';

const Keyboard=()=> {
    const [inputText,setInputText]=useState('');
  return (
    <div>
      <h1>Hello </h1>
      <div className="keyboard">
        <div className="textconatiner">
            <pre>{inputText} </pre> 
        </div>
        <div className="keyboardcontainer">
            <div className="container">
                <div className="row">
                {['~.`', '!.1', '@.2', '#.3', '$.4', '%.5',
                        '^.6', '&.7', '*.8', '(.9', ').0', '_.-', '+.=',
                        '<i className="fa-solid fa-delete-left"></i>']}

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Keyboard 
