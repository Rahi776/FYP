const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String,
    phoneNumber: String,
    password: String,

})



module.exports = mongoose.model('customers', userSchema);