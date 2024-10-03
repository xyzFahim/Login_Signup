const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI

const ConnectDB = async () => {
    try { await mongoose.connect(uri)
        console.log('MongoDb Connected')
    }catch(error){
        console.error(error.message)
    }
}

module.exports = ConnectDB;
