const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    img: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
    address: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
    name: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
    status: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
    gender: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
    number: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
    age: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;