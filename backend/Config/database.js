const mongoose = require('mongoose');

// require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect("mongodb+srv://sohambha96:92tvYNOBmmoKHrNu@cluster0.exmehwd.mongodb.net/",{dbName:"finance", })
    .then(()=>{
        console.log("db connection is possible  at port no 3000")
    })
}

module.exports = dbconnect ;