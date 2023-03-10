const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const connectDB = async (url) => {
    try {
        await mongoose.connect(url,()=>{
            console.log('Connected to db')
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB

