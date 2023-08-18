// const obj = {
//     test1: function(){
//         console.log("Test 1")
//     },
//     test2: function(){
//         console.log("Test 2")
//     }
// }

// // console.log(obj)

// const emp = Object.create(obj)
// emp.name = "Bedo"
// emp.age = 22
// console.log(emp)

function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1")
}
Person.prototype.test2 = function(){
    console.log("Test 2")
}

function Employee(name,age){
    this.name = name
    this.age = age
}

Employee.prototype = Object.create(Person.prototype)

const emp = new Employee("bedo", 22)
console.log(emp)
emp.test1()