const getAllStudent = "SELECT * FROM student";

const fetchStudentById = "SELECT * FROM student WHERE id= $1";

const addStudents = "INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)";

const existingStudent = "SELECT * FROM student WHERE email= $1";

const updateStudents = "UPDATE student SET name= $1, email=$2, age=$3, dob=$4 WHERE id=$5";

const deleteStudents = "DELETE FROM student WHERE id= $1";


module.exports = {
    getAllStudent,
    fetchStudentById,
    addStudents,
    existingStudent,
    updateStudents,
    deleteStudents
}