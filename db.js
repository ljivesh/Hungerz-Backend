const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;

db.on('connected', ()=> {
    console.log("Connection to MongoDB successful.");
});

db.on('error', ()=> {
    console.log("Connection to MongoDB failed.");
});

module.exports = mongoose;