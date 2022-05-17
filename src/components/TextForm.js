import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert(" Converted to Uppercase", "success")
  }
  const handleLowClick = ()=>{
    //console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert(" Converted to Lowercase", "success")
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const copyText = ()=>{
    var copyText = document.getElementById("myBox");
    copyText.select();
    console.log("text is copied");
    navigator.clipboard.writeText(copyText.value);
    props.showAlert(" Copied to Clipboard!", "success")
  }
  const removeExtraWhiteSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extraspace is removed", "success")
  }
 
  const [text, setText] = useState(' ');
  // text = "naya"; //wrong way to change the state
  // setText("naya"); //Correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black' }}
      id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={copyText}>Copy the Text</button>
      <button className='btn btn-primary mx-1' onClick={removeExtraWhiteSpaces}>Remove Extra White Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Values</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div> 
    </>
  )
}
