const  mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/mongoPractice`);

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    job: String
})

module.exports = mongoose.model("user",userSchema);