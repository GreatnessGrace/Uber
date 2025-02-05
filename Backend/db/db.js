const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Connected to DB');
    }).catch(err => {
        console.log("Error in DB Connection",err)
    })
}

module.exports = connectToDb;
