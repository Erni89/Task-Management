const mongoose = require('mongoose')

const connectToDB = async () => {
    const conn = await mongoose.connect(process.env.URL_DB)  
    console.log(`mongoDB connected: ${conn.connection.host}`);
}

module.exports = {connectToDB}
