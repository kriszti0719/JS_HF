const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nqc2ba', { useNewUrlParser: true });

module.exports = mongoose;