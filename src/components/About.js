import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black",
        


    })
    const [mode, setMode] = useState("Light Mode")
    const [modeBg, setModeBg] = useState("btn btn-light my-3")


    const modeChange = () => {
        if (myStyle.backgroundColor === "black") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
               
            })
            setMode("Dark Mode")
            setModeBg("btn btn-dark my-3")

        }
        else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "solid 1px white"

            })
            setMode("Light Mode")
            setModeBg("btn btn-light my-3")
        }
    }


    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <Accordion defaultActiveKey="0" style={myStyle}>
                <Accordion.Item eventKey="0" style={myStyle}>
                    <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header >Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="container my-3">
                <button type="button" onClick={modeChange} className={modeBg}>{mode}</button>
            </div>
        </div>
    )
}
