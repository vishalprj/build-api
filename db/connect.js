const mongoose = require("mongoose");

const uri = "mongodb+srv://vishalpraj188:O8V5sqUB85HvIVn5@cluster0.0nchbd7.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
    return mongoose.connect(uri)
        .then(() => console.log("DB connected"))
        .catch(err => console.error("DB connection error:", err));
};

module.exports = connectDB;
