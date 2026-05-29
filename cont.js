class con {
    constructor(name,age) {
        this.name =name;
        this.age=age;
    
    }
}

const human = new con('teddy',33)
console.log(human.name)
human.name = 'viren'

console.log(human)