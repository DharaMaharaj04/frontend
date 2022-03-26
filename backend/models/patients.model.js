const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
 
});


const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;