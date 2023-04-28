import React,{useState} from 'react'



export default function Textform(props) {
  const handleUpClick= ()=>{
   // console.log("uppercsse was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","sucess");
  }
  const handleloClick= ()=>{
    // console.log("uppercsse was clicked"+ text);
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("converted to Lowercase!","sucess");
   }

  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value)
   
  }

  const [text, setText] = useState(' ');
  return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className ="mb-4">
                <textarea className ="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Detcated the email id in text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h1>Your text summary</h1>
           <p>{text.split(" ").length} words and {text.length} characters</p>
           <p>{0.008 * text.split(" ").length} Minutes read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter something in the textbox to above to preview here"}</p>
        </div>
        </>
  )
}



