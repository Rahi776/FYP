// // import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';


import React,{useState} from "react";
// import React, { useState } from "react";

function Contactus() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");

    const collectData = async () => {
        console.log(Name, Email, Subject, Message);
        let result = await fetch('http://localhost:9000/contacts', {
            method: 'post',
            body: JSON.stringify({ Name, Email, Subject, Message }),
            headers: {
                'content-type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
    };

    return (
        <div className='ContactusForm'>
            <h1 className='contactusheadingone'>Contact US</h1>
            <p className='contactUsparagraph'>We are here for you! How can we help?</p>
            <input type='text' id='contactme' value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Full Name' />
            <input type='text' id='contactme' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Valid Email Address' />
            <input type='text' id='contactme' value={Subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
            <textarea type='text' id='contactme' value={Message} onChange={(e) => setMessage(e.target.value)} placeholder='Your message here....' />
            <button onClick={collectData} className="appButton">Sign Up</button>
        </div>
    );
}

export default Contactus;
