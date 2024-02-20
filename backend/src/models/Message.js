const mongoose = require('mongoose');

// Define Message schema
const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true }
});

// Create Message model
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;