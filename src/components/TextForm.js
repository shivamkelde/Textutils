import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');
const handleClearClick=()=>{
setText("");

}
    const handleUpClick = () => {

        const newTextUp = text.toUpperCase();
        setText(newTextUp);
       }
    const handleLoClick = () => {
        
        const newTextUp = text.toLowerCase();
        setText(newTextUp); 
       }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
       
    }
    //setText("new text");
    return (
        <div className='container' data-bs-theme={props.Mode} style={{color:props.Mode==='dark'?'white':'black'}}>
            <h1 style={{color:props.Mode==='dark'?'white':'black'}}>{props.Heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className={`btn btn-${props.Mode==="light"?"primary":props.color==="Red"?"success":props.color==="Green"?"primary":"danger"} buttOn mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.Mode==="light"?"primary":props.color==="Red"?"success":props.color==="Green"?"primary":"danger"} buttOn mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn btn-${props.Mode==="light"?"primary":props.color==="Red"?"success":props.color==="Green"?"primary":"danger"} buttOn mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className={`btn btn-${props.Mode==="light"?"primary":props.color==="Red"?"success":props.color==="Green"?"primary":"danger"} buttOn mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.Mode==="light"?"primary":props.color==="Red"?"success":props.color==="Green"?"primary":"danger"} buttOn mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces </button>
            <div className="container">
                <h2 >Paragraph Summary</h2>
                <p>Words {text.split(' ').length-1} And character {text.length} </p>
                <p>{0.008 * text.split(' ').length}  Minute to read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something first'}</p>
            </div>

        </div>
    )
}
