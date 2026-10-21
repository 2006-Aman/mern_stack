const mongoose = require("mongoose");

// creating schema for student collection
const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true}
    
});

// we used to lonk this schema with the collection in the database
const StudentModel = mongoose.model("student", studentSchema);
module.exports = { StudentModel };