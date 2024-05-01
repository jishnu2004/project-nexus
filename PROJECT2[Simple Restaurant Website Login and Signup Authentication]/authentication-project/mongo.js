const cors = require('cors');
const mongoose=require("mongoose")
const mongoString = "mongodb://localhost:27017/authentication_db";
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;
database.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
database.once('open', () => {
    console.log('Database Connected');
});


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection