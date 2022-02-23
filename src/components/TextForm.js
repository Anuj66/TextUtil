import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("Enter your text here");

    const arr = text.split(" ");


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(text === ""){
            props.showAlert("Please enter the text", "warning");
        }else{
            props.showAlert("Converted to Upper Case", "success");
        }
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text === ""){
            props.showAlert("Please enter the text", "warning");
        }else{
            props.showAlert("Converted to Lower Case", "success");
        }
    }

    const handleClearClick = () => {
        setText('');
        if(text === ""){
            props.showAlert("Please enter the text", "warning");
        }else{
            props.showAlert("Text is cleared", "success");        }
    }

    const handleRemoveSpaces = () => {
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText);
        if(text === ""){
            props.showAlert("Please enter the text", "warning");
        }else{
            props.showAlert("Removed Extra Spaces", "success");
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className={"container my-3"}>
                <div className="mb-3" style={{ color: props.mode === 'light' ? 'black' : 'white'}}>
                    <h1 htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                        color: props.mode==='light' ? 'black' : 'white'}}></textarea>
                </div>
                <button className={"btn btn-primary mx-2"} onClick={handleUpClick} >Convert to UpperCase</button>
                <button className={"btn btn-primary mx-2"} onClick={handleLoClick} >Convert to LowerCase</button>
                <button className={"btn btn-primary mx-2"} onClick={handleClearClick} >Convert to Clear</button>
                <button className={"btn btn-primary mx-2"} onClick={handleRemoveSpaces} >Remove Extra-Spaces</button>
            </div>
            <div className={"container my-3"} style={{ color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>Your text summary</h1>
                <p>{arr[arr.length-1] === "" ? arr.length-1 : arr.length} words, {text.length} characters</p>
            </div>
        </>
    );
}