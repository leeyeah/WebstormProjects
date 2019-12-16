/*
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    //return "my name is "+this.name +" age is "+this.age ;
    return `my name is ${this.name} and age is ${this.age}`;
}

var obj = new Person('katty',18);
console.log(obj.age)
console.log(obj.say())

 */


class Person {
    constructor(name,age){
        this.name = name ;
        this.age = age;
    }

    say(){
        return `my name is ${this.name} and age is ${this.age}`;
    }

    static eat(){
        console.log('eat')
    }

}

class Student extends Person{

    constructor(){
        super('default',undefined)
        //this.gradle = 'B'

    }
    //var teacher;

    /*
    constructor(name,age,gradle){
        super(name,age)
        this.gradle = gradle
    }*/

    study(){
        console.log(`my name is ${this.name} and age is ${this.age} and gradle is ${this.gradle}   `)
    }
}

Person.prototype.hi =function (msg) {
    console.log(`hi from ${msg}`)
}

const obj = new Person('katty',18);
Person.eat()
obj.hi('123')
console.log(obj.say())
console.log(typeof Person,typeof obj,typeof obj.age,typeof obj.name,Person===Person.prototype.constructor)

const stu = new Student() //new Student('jim',20,'A');
stu.teacher ='sally'
stu.study()
console.log(stu.teacher)
