const ContactUser = require('./db/contactUser')
// <========================above fro contact====================>
const express = require('express')
const User = require('./db/Users')
const cors = require('cors')
require('./db/config')

const app = express()
app.use(express.json())
app.use(cors())


app.post('/register',async (req,resp)=>{
    let user = User(req.body);
    let result = await user.save();

    resp.send(result)
})

// ===========this is for contact===========>

app.post('/contacts', async (req, resp) => {
    try {
        const { Name, Email, Subject, Message } = req.body;
        
        console.log(Name);
        const user = await ContactUser.create({
            Name,
            Email,
            Subject,
            Message
        });
        
        resp.status(200).json({ user });
    } catch (error) {
        console.error('Error while saving contact:', error);
        resp.status(500).json({ error: 'An error occurred while saving contact.' });
    }
});

  





app.listen(9000)