const { Notice } = require('../database/notice');

const createNotice = async (req, res) => {
    try {
        const {notice,username} = req.body;
        const newNotice = await Notice.create(notice,username);
        return res.status(200).send({ message: 'Notice created successfully', notice: newNotice });
    } catch (err) {
        res.status(500).json(err);
    }
}


const getAllNotice = async (req, res) => {
    try {
        const notices = await Notice.find().sort({createdAt:-1});
        return res.status(200).json(notices);
    } catch (err) {
        console.log({ error: err })
        res.status(500).json(err);
    }
}

module.exports = { createNotice, getAllNotice }