let students = require('../Data') 

const welcomeMsg = (req, reply) => {
    reply.send("Students Marksheet") 
}

const getData = (req, reply) => { 
    reply.send(students)
}


const addStudent = (req, reply) => {  
    const {StudentName, StudentID, Subject1, Subject2, Subject3, Subject4, Subject5} = req.body
    const StudentData = {
        StudentName,
        StudentID,
        Subject1,
        Subject2,
        Subject3,
        Subject4,
        Subject5,
    }

    students = [...students, StudentData] 
    
    reply.send(StudentData)
    
}

const deleteStudent = (req, reply) => { 
    const { id } = req.params
    students = students.filter(student => student.StudentID !== id)

    reply.send({message: `Student ${id} is Deleted`})
}

const updateStudent = (req, reply) => {    
    var data = req.body
    keys = []
    for(key in data){
        keys.push(key)
    }
    index = students.findIndex(student => student.StudentID == data[keys[0]])
    students[index][keys[1]] = data[keys[1]]
    reply.send(`The mark of Student ${data[keys[0]]} have been updated!`)    
}

module.exports = {
    getData,
    welcomeMsg,
    addStudent,
    deleteStudent,
    updateStudent,
}
