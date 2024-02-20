const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

// POST /api/user/login
router.post('/login', UserController.login);

// POST /api/user/register
router.post('/register', UserController.register);

// GET /api/user/logout
router.get('/logout', UserController.logout);

module.exports = router;