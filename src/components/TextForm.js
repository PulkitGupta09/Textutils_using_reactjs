import React,{useState} from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText); 
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
    }
    const handleClearText = ()=>{
        let newText = ""
        setText(newText); 
    }

    const RemovePunctuation = ()=>{
            let puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
            let result = text.replace(puncs, '');
            let newText = result;
            setText(newText);
    }
    const RemoveNumber = ()=>{
            let num = /[0123456789]/g;
            let result = text.replace(num, '');
            let newText = result;
            setText(newText);
    }

    // Copy to Clipboard
    const handleCopyClick = ({ alert }) => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }



    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className = "btn btn-primary" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button className = "btn btn-primary mx-2" onClick = {handleLoClick}>Convert to Lowercase</button>
            <button className = "btn btn-primary mx-2" onClick = {RemovePunctuation}>Remove Punctuation</button>
            <button className = "btn btn-primary mx-2" onClick = {RemoveNumber}>Remove Numbers</button>
            <button className = "btn btn-primary mx-2" onClick = {handleClearText}>Clear Text</button>
            <CopyToClipboard text={text}>
                        <span>
                            <button className="btn btn-outline-success mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
                            <span>{isCopied ? <b> Copied!</b> : false}
                        </span>
                        </span>
            </CopyToClipboard>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}