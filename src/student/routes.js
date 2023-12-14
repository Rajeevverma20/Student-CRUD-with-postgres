const router = require('express').Router();
const controller = require('./controllers')

router.get('/getAll', controller.getAllStudents);

router.get('/get/:id', controller.getStudentById);

router.post('/add', controller.addStudent);

router.put('/update/:id', controller.updateStudent);

router.delete('/delete/:id', controller.deleteStudent)

module.exports = router;