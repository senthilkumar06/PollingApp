const mongoose = require('mongoose')

// Map global promise
mongoose.Promise = global.Promise

// Connect to db
mongoose.connect('mongodb://admin:admin@ds233769.mlab.com:33769/polldb0606')
.then(() => console.log("db connected"))
.catch(error => console.log(error))


