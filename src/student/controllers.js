const pool = require('../db');
const queries = require('./queries');

const getAllStudents = async ( req, res)=>{
    try{

       const result = await pool.query(queries.getAllStudent);
       res.status(200).json(result.rows)
    }catch(err){
        console.log(err);
        res.status(400).send('Internal server error')
    }
}


const getStudentById = async (req, res) =>{
    try{
    const id = parseInt(req.params.id);

    if(!id){
        return res.status(400).send('Id is require field');
    }

    const result = await pool.query(queries.fetchStudentById, [id]);

    if(result.rows.length === 0){
        return res.status(400).send("Id is not correct");
    }

    res.status(200).json(result.rows);
}
catch(err){
    console.log(err);
    res.status(400).send('Internal server error')
}
}



const addStudent = async( req, res) =>{
    try{

        const {name, email, age, dob} = req.body;

        if(!(name && email && age && dob)){
            return res.status(400).send('All fields are required');
        }

        const existing = await pool.query(queries.existingStudent, [email]);

        if(existing.rows.length != 0){
            return res.status(409).send('Email is already use');
        }

        const data = await pool.query(queries.addStudents, [name, email, age, dob]);

        res.status(201).json('Student created succesfully')

    }catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
}

const updateStudent = async(req, res) =>{
    try{

        const id = parseInt(req.params.id);
        
        if(!id){
            return res.status(400).send("Id is required");
        }

        const {name, email, age, dob} = req.body;

        const notExist = await pool.query(queries.fetchStudentById, [id]);
        if(notExist.rows.length === 0){
            return res.status(400).send('id not corrrect');
        }

        const data = await pool.query(queries.updateStudents,[{name, email, age, dob}, id]);

        res.status(200).send('Data Update Successfully')
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal server error')
    }
}

const deleteStudent = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (!id) {
            return res.status(400).send("Id field is required");
        }

        const existing = await pool.query(queries.fetchStudentById, [id]);

        if (existing.rows.length === 0) {
            return res.status(400).send("Id is not correct");
        }

        const data = await pool.query(queries.deleteStudents, [id]);

        res.status(200).send("Delete successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
};


module.exports ={
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
}