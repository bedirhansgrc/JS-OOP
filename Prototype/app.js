function Employee(name, age) {
    this.name = name
    this.age = age
    this.showInfos = function(){
        ("Bilgiler Gösteriliyor")
    }
}

const emp1 = new Employee("Bedo",22)
console.log(emp1)