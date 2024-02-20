const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const MessageController = require('../controllers/messageControllers');


// POST /api/message/send (protected route)
router.post('/send', authMiddleware, MessageController.sendMessage);

// GET /api/message/receive (protected route)
router.get('/receive', authMiddleware, MessageController.receiveMessage);

module.exports = router;