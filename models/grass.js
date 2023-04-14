const mongoose = require("mongoose")
const grassSchema = mongoose.Schema({
Grass_Name: String,
Grass_color: String,
Height: String
})
module.exports = mongoose.model("grass", grassSchema)


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})