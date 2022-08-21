const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/index');
const { noticeRouter } = require('./routes/post');
const { userRouter } = require('./routes/user');

const app = express();  
const port = 7000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use(noticeRouter);
app.use(userRouter);


connectDB().then(()=>{
    app.listen(port, ()=> {
        console.log(`Server is running on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
});