const express = require('express');
const { createNotice, getAllNotice } = require('../handler/notice');

const noticeRouter = express.Router();

noticeRouter.post('/createNotice', createNotice);
noticeRouter.get('/getAllNotice', getAllNotice);

module.exports = {noticeRouter};