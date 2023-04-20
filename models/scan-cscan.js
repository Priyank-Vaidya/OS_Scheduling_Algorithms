const mongoose = require('mongoose');

const scancscanSchema = new mongoose.Schema({
  head: Number,
  upperBound: Number,
  Type: String,
  Direction: String,
  ReferenceString: String
});

const Scancscan = mongoose.model('Scancscan', scancscanSchema);

module.exports = Scancscan;
