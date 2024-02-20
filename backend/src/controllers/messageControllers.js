const Message = require('../models/Message'); // Assuming you have a Message model

// Controller function for sending a message
const sendMessage = async (req, res) => {
  const { sender, receiver, text } = req.body;

  try {
    // Create new message
    const newMessage = new Message({ sender, receiver, text });
    await newMessage.save();

    // Sending message successful
    res.status(201).json({ message: 'Message sent successfully', newMessage });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function for receiving messages
const receiveMessage = async (req, res) => {
  try {
    // Retrieve all messages
    const messages = await Message.find();

    // Sending messages successful
    res.status(200).json({ messages });
  } catch (error) {
    console.error('Error receiving messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  sendMessage,
  receiveMessage
};