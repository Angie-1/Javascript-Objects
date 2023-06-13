var student = {
    courses: ["Maths", "Science", "Biology"],
    purpose: function purpose(){
        console.log("Their purpose is to become a scientist")
    },
    computer: {
        name: "lenovo",
        ram: "8GB"
    }
}

student.courses[1]   //log only one of the courses
student.purpose()    //what their purpose is
student.computer.ram //log one of their computer properties
console.log(student.computer.ram) // to print the object