// function Employee(name, age) {
//     this.name = name
//     this.age = age
//     this.showInfos = function(){
//         ("Bilgiler Gösteriliyor")
//     }
// }

// const emp1 = new Employee("Bedo",22)
// console.log(emp1)

function Employee(name,age){
    this.name = name
    this.age = age
    // this.showInfos = function(){
    //     console.log("İsim : " + this.name + "Yaş : " + this.age)
    // }
}

Employee.prototype.showInfos = function(){
    console.log("İsim : " + this.name + "Yaş :" + this.age)
}

const emp1 = new Employee("Bedo",22)
emp1.showInfos()
console.log(emp1)