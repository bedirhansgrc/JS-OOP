// console.log(this) // Global Scope

// const emp1 = { //Object Literal
//     name: "Bedo",
//     age: 22,
//     showInfos:function() {console.log("bilgiler gösteriliyor");}
// }

// const emp2 = {
//     name :"Ahmet",
//     age: 25
// }

// emp1.salary = 69000
// emp1.showInfos()
// console.log(emp1)

function Employee(name,age,salary){ //Yapıcı Fonksiyonlar - Constructor
    this.name = name
    this.age = age
    this.salary = salary
    this.showinfos = function(){
    console.log(this.name,this.age,this.salary)
    }
}
const emp1 = new Employee("Bedo",22,69000)
const emp2 = new Employee("Mehmet",25,84568)

emp1.showinfos()
emp2.showinfos()