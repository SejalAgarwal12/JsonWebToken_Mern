const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sejal1999ag:G2mba1qk2c7wTOp7@mongodb-tutorial.xvzlbar.mongodb.net/Mern_JWT?retryWrites=true&w=majority&appName=mongodb-tutorial")
.then(()=>console.log('connected successfully to DB'))
.catch(err => console.log(err));

module.exports = mongoose;