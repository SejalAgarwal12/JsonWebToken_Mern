const express = require('express');
const router = express.Router();
const {getUserById} = require('../controller/Authenticated');
const {authenticateToken} = require('../utils/authMiddleware')

router.get('/user', authenticateToken, getUserById);


module.exports = router;