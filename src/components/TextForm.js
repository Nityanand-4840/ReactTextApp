import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
// import { Button } from "react-bootstrap";
// import { useRef } from "react";
<SocialIcon url="" />;

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text are cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed!", "success");
  };
  //   const UseRef= (null);

  // const handleUndoText = () => {
  //   const inputField = useRef(null);
  //   if (inputField) {
  //     const previousValue = inputField.value;
  //     inputField.value = '';
  //     inputField.focus();
  //   }
  // };
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
          {" "}
          Convert to Lowercase
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>
          {" "}
          Copy text
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>

      {/* <div className="container my-2"
       style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <p>
          <strong> Check out my LinkedIn profile:-</strong>
          <a
            href="https://www.linkedin.com/in/nityanand-pandey-583941229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i> LinkedIn Profile
          </a>
        </p>

        <p>
          <strong>Check out my Github profile:-</strong>
          <a
            href="https://github.com/Nityanand-4840 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> Github Profile
          </a>
        </p>
      </div> */}
      {/* <div className="container">
      <div className="d-grid mx-1 my-1" >
      <Button variant="primary" size="st"  url=" https://in.linkedin.com">
        <SocialIcon url="https://in.linkedin.com"/>
      Continue with Linkedin
      </Button>
      </div>
    
      <div className="d-grid mx-1 my-1" >
      <Button variant="primary" size="sd"  url=" https://www.facebook.com">
        <SocialIcon url="https://www.facebook.com"/>
      Continue with Facebbok
      </Button>
      </div>
      </div> */}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Follow me</h2>
        <a
          href="https://www.linkedin.com/in/nityanand-pandey-583941229/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link "
        >
          <SocialIcon
            url="https://www.linkedin.com/in/nityanand-pandey-583941229/"
            className="icon mx-2"
          />
        </a>
        <a
          href="https://www.facebook.com/nityanandpandey.pandey.10"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <SocialIcon
            url="https://www.facebook.com/nityanandpandey.pandey.10"
            className="icon mx-2"
          />
        </a>
        <a
          href="https://github.com/Nityanand-4840"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <SocialIcon
            url="https://github.com/Nityanand-4840"
            className="icon mx-2"
          />
        </a>
      </div>
    </>
  );
}
