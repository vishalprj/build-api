const mongoose = require("mongoose");

const connectDB = (uri) => {
    return mongoose.connect(uri)
        .then(() => console.log("DB connected"))
        .catch(err => console.error("DB connection error:", err));
};

module.exports = connectDB;
