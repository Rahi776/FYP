// Example model definition using Mongoose
const mongoose = require('mongoose');

const contactUserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Subject: String,
    Message: String
});

const ContactUser = mongoose.model('ContactUser', contactUserSchema);

module.exports = ContactUser;
