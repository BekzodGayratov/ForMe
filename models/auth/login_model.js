const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    phone_number: {
        type: String,
        required: true,
        unique: true,
    },

});
module.exports = mongoose.model('login', Schema);