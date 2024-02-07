const mongoose = require('mongoose');

   const pollSchema = new mongoose.Schema({
     // Define your schema fields here
     id: String, // Assuming 'id' is a string for simplicity
     isControlling: Boolean,
   });

   const Poll = mongoose.model('Poll', pollSchema);

   module.exports = Poll;