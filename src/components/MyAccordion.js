import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import { SocialIcon } from "react-social-icons";

 function MyAccordion(props) {
  return (
    <div className="container my-1" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
   <h2>About Us</h2>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>#About The TextEditor</strong></Accordion.Header>
        <Accordion.Body>
        This is a TextEdior and WordCounter App A
          word counter and text editor app is a versatile tool designed
          to assist users in managing and editing textual content
          efficiently. These applications serve a wide range of
          purposes, from professional writing and content creation to
          academic research and everyday communication. Let's explore
          some key features and benefits of a word counter and text
          editor app:
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <strong>#About the WordCounter and all editing function</strong></Accordion.Header>
        <Accordion.Body>
           The primary function of a word counter and text
          editor app is, as the name suggests, counting words. This
          feature is invaluable for writers, bloggers, students, and
          professionals who need to meet specific word count
          requirements for their documents or articles. you can edit your text as per
          as your own choice you can remove your extra spaces,you can copy the text and you 
          can also see in how much time you can read that all text..
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <strong>#About the Character Counter</strong></Accordion.Header>
        <Accordion.Body>
        To find out the word and character count of your writing, simply copy 
        and paste text into the tool or write directly into the text area. 
        Once done, the free online tool will display both counts for the text 
        that's been inserted. This can be useful in many instances, but it can
         be especially helpful when you are writing for something that has a character
          minimum or limit.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> <strong>#About Me</strong></Accordion.Header>
        <Accordion.Body>
          <strong>Hey,I am Nityanand Pandey (Front-end-Devloper) {""}</strong>
          Currently i am pursuing BCA(Bachelor of Computer Application) from IIMT 
          Group of Colleges.I have worked on some basic projects as a beginner 
          and started to learning about the front-end technologies from scratch to advance
          and want to be the best Front-end-Developer.
          If you want to know more about me then click on the given below icon/profile for check more about me..
          Thank You!!!
        </Accordion.Body>
      </Accordion.Item>
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
       <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Follow me</h2>
       <SocialIcon  className=" icon" url="https://github.com/Nityanand-4840"/>
       <SocialIcon className="icon mx-4" url="https://www.linkedin.com/in/nityanand-pandey-583941229/"/>
       <SocialIcon className="icon " url="https://www.facebook.com/nityanandpandey.pandey.10"/>
       </div>
    </Accordion>
    </div>
  
  );
}
export default MyAccordion;