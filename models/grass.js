const mongoose = require("mongoose")
const grassSchema = mongoose.Schema({
Grass_Name: String,
Grass_color: String,
Height: {
    type: String,
    validate: {
      validator: function (v) {
        const allowedValues = ["small", "medium", "big"];
        return allowedValues.includes(v.toLowerCase());
      },
      message: "Height must be one of 'small', 'medium', or 'big'",
    },
    }
})
module.exports = mongoose.model("grass", grassSchema)


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})