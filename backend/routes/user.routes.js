const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Routes for user authentication
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/getCouponCode', userController.getCouponCode);
router.post('/bookShow', userController.bookShow);

module.exports = router;
