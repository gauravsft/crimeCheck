const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    notice: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

}, { timestamps: true });

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = { Notice };