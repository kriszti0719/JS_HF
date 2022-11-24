const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
    name: String,
    nick: String,
    room: Number,
    table: String,
    admin: Boolean,
});

module.exports = User;