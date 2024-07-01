const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('connected successfully to DB'))
.catch(err => console.log(err));

module.exports = mongoose;
