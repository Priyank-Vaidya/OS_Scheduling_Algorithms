const mongoose = require('mongoose');

const mruSchema = new mongoose.Schema({
    referenceString: String
})

module.exports = mongoose.model('mru_model', mruSchema);
