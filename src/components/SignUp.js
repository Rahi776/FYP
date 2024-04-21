import React,{useState} from "react";

const SigUp =()=>{
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName]= useState("");
    const [dateOfBirth, setdateOfBirth] = useState("")
    const[email, setEmail] = useState("")
    const [phoneNumber, setNumber] = useState("")
    const [password, setPassword] = useState("")

    const collectData =async()=>{
        console.log(firstName, lastName,dateOfBirth,email,phoneNumber,password)
        let result = await fetch('http://localhost:9000/register',{
            method:'post',
            body: JSON.stringify({firstName,lastName,dateOfBirth,email,phoneNumber,password}),
            headers:{
                'content-type':'application/json'
            },
        })
        result = await result.json()
        console.warn(result)
    }
    return(
        <div className="register">
             <h1>SignUp</h1>
             <input className="inputBox" type="text" value={firstName} 
             onChange={(e)=> setFirstName(e.target.value)} placeholder=" Enter First Name" />

             <input className="inputBox" type="text" value={lastName}
             onChange={(e)=> setLastName(e.target.value)} placeholder=" Enter Last Name" />

             <input className="inputBox" type="date" value={dateOfBirth}
             onChange={(e)=>setdateOfBirth(e.target.value)} placeholder="Enter Date of birth" />

             <input className="inputBox" type="" value={email} 
             onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />

             <input className="inputBox" type="" value={phoneNumber}
             onChange={(e)=>setNumber(e.target.value)} placeholder="Enter phone Number" />

             <input className="inputBox" type="password" value={password} 
             onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
             <button onClick={collectData} className="appButton">sign Up</button>

        </div>
    )
}

export default SigUp;