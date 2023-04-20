const mongoose = require('mongoose');

const BankersModel = new mongoose.Schema({
    availableResources:{
        resA: Number,
        resB: Number,
        resC: Number
    },
    processSequence:String
})
module.exports = mongoose.model('BankersModel', BankersModel);