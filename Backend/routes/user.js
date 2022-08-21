const express = require('express');
const { loginUser } = require('../handler/user');

const userRouter = express.Router();

userRouter.post('/loginUser', loginUser);

module.exports = {userRouter};