const employee={
    empId:2,
    name:'Rahul',
    designation:'Java Developer',
    salary:40000,
    techstack:[{
        plang:"java",
        server:'Apache Tomcat',
        database:'mySql',
        database2:'mongodb'
    },
    {
     plang:"python",
        server:'Django',
        database:'mySql',
        database2:'mongodb'
    }
]
}
console.log(employee)
console.log(employee.empId)
console.log(employee.name)
console.log(employee.techstack)
console.log(employee.techstack.database)
console.log(employee.techstack[1])
console.log(employee.techstack[1].server)