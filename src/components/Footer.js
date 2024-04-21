import React from "react";
import { Link } from "react-router-dom";
import BotChat from "./BotChat";

function Footer() {
  return (
    <div className="footerEvent">
      <div>
        <h1>GB EVENTS</h1>
      </div>
      <div>
        <h3>Gilgit Balitistan Events</h3>
        <p>&copy; 2023 Your GB Events. All rights reserved. Join us</p>
      </div>
      <div>
        <p>GB birhdays parties</p>
        <p>GB Weeding</p>
        <p>GB Photography</p>
        <p>Online Event reistration</p>
        <p>contact us</p>
      </div>
      <div>
        <p> Join us</p>
        <p> in making a </p>
        <p> better Events.</p>
        <p> weedings</p>
        <p> festivels.</p>
        <p> Reuions</p>
        <p> better Events.</p>
       
      </div>
    
     <BotChat />

    </div>
  );
}

export default Footer;
