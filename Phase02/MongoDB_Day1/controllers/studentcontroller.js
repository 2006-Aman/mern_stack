const { StudentModel } = require("../models/studentmodel");
const createStudent = async (req, res) => {
    try {
        const data = await StudentModel.create(req.body);
        res.send({
            message: "Student created successfully", 
            data: data
        });

    }catch (error) {
        res.status(500).send({ message: error.message });
    }
}


const getStudent = async (req, res) => {
    try {
        const data = await StudentModel.find();
        res.send({
            message: "Student data fetched successfully", 
            data: data
            
        });
    }catch (error) {
        res.send({ message: error.message });
    }
} 

const getsingleStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await StudentModel.findById(id);
        res.send({
            message: "Student data fetched successfully", 
            data: data
        });
    }catch (error) {
        res.send({ message: error.message });
    }
}

module.exports = { createStudent, getStudent, getsingleStudent };