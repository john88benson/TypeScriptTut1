class Student{
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter (person:Person){
    return "Hello, " + person.firstName +" "+ person.lastName + " welcome to the Machine";
}

var user = new Student("Joe","A.","User")

document.body.innerHTML = greeter(user);