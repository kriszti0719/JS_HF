const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Umbrella = db.model('Umbrella', {
    name: String,
    color: String,
    room: Number,
    owner: String,
    _owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Umbrella;