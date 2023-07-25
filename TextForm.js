import React,{useState} from 'react'


export default function (props) {
  const handleUpClick=()=>{
    // console.log("upper case was clciked +text ");
   let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    // console.log("upper case was clciked +text ");
   let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClClick=()=>{
    // console.log("upper case was clciked +text ");
   let newText='';
    setText(newText);
  }
  const handleOnChange=(Event)=>{
    // console.log("On change");
    setText(Event.target.value);
  }
  // const handleCopy=()=>{
   
  //   var text=document.getElementById("myBox");
  //   text.select();
  
  //   navigator.clipboard.writeText(text.value);
  // }
  const [text, setText] = useState('Enter text here');

  // text="new text" wrong way to change the text
  // setText=("new Text") correct way
  return (
    <>
    <div className='container'>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
</div>
<button className="btn.btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>        
<button className="btn.btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>   

<button className="btn.btn-primary mx-2" onClick={handleClClick}>Clear text</button>     
{/* <button className="btn.btn-primary mx-2" onClick={handleCopy}>Copy Text</button>                                */}
    </div>
<div className='container my-3' >
  <h1>
    Your text summary
  </h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split("").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
  </>

  )

}











