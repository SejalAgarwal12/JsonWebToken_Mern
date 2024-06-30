const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString("hex");
// The crypto.randomBytes() method is used to generate artificial random data

module.exports= secretKey