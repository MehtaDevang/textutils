import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    }

    const handleDownClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Cleared text", "success");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces from the given text", "success");
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white': 'black'}} />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy To Clipboard</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.length> 0 ? text.split(" ").length: 0} words, {text.length} characters
                </p>
                <p>
                    {text.replaceAll(" ", "").length} characters without space
                </p>
                <p>
                    {text.length> 0 ? 0.008 * text.trim().split(" ").length: 0} Minutes to read
                </p>
                <p>
                    {text.length > 0 ? text.split(".").length: 0} sentences
                </p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter someting in the textbox above to peview it"}</p>
            </div>
        </>
        
    )
}
