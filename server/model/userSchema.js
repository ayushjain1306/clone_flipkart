const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        requires: true,
        trim: true
    },
    mobile: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: "string",
        required: true,
    },
    username: {
        type: "string",
        required: true,
    }
})

const User =  mongoose.model('user', userSchema);

module.exports = User;