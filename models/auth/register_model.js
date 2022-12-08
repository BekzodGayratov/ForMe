const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema({
    first_name: {
        type: String,
        default: "first_name"
    },
    last_name: {
        type: String,
        default: "last_name"
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
    },

});

module.exports = mongoose.model('register', Schema);