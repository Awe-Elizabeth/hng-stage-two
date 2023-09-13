const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./utils/errorHandler');

//Load Env Vars
dotenv.config({path: './config/.env'});
connectDB()

const app = express()

const port = process.env.PORT || 3000;

app.use(errorHandler)

const server = app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

//  Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //  Close server &exit process
    server.close(() => process.exit(1)); 
});

