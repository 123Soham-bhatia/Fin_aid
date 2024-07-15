const mongoose = require('mongoose');

require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("db connection is possible  at port no 3000")
    })
}

module.exports = dbconnect ;