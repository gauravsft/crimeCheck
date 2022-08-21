const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        let uri = `mongodb://localhost:27017/notice`;
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {connectDB};