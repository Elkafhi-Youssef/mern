const express = require('express');
const cors = require('cors')
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const {connectDb}= require('./config/db');
const dotenv = require('dotenv').config();
const port = process.env.port  || 5000;
connectDb();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));


app.use('/goals', require('./routes/goalRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))
