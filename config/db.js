const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected'.rainbow);
    } catch (error) {
        console.log("Database Not Connected");
    }
}

module.exports = { connectDB }