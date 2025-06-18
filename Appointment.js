const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: String,
  service: String,
  date: String,
  time: String,
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
