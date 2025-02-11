const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Email is Invalid'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First Nname must be at least 3 charcters long'),
    body('password').isLength({ min: 6}).withMessage('Password must be at least 6 charcters long')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Email is Invalid'),
    body('password').isLength({ min: 6}).withMessage('Password must be at least 6 charcters long'),
],
    userController.login)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

router.get('/logout', authMiddleware.authUser, userController.logoutUser)

module.exports = router;