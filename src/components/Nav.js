import react from "react";
import { Link } from "react-router-dom";


const Nav=()=>{
return(
       <div className="Navebar">
        <div className=" logevents">
         <img  src="https://img.freepik.com/premium-vector/alphabetical-letter-e-logo-collection_647881-448.jpg?size=626&ext=jpg&ga=GA1.1.618043122.1689257950&semt=ais"/>
        </div>
        
        <div className="nav-ulitem"> 
        <ul className="nav-ul">
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/add">About Us </Link></li>  
            <li><Link to="/services">Services</Link></li>  
            <li><Link to="/Contactus">Contact us</Link></li> 
            <li><Link to="/SignUp">Sign Up</Link></li> 
           
        </ul>
        </div>
      </div>
   )
}

export default Nav;