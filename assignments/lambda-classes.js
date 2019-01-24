// CODE here for your Lambda Classes
// Class Person

class Person {
    constructor(Personattr) {
        this.name = Personattr.name;
        this.age = Personattr.age;
        this.location = Personattr.location;
        this.gender = Personattr.gender;
    }
    speak() {
        return `Hello my name is ${Person.name}, I am from ${Person.location}`
    }
}

// Class Instructors

class Instructor extends Person {
    constructor(Instructorattr) {
        super(Instructorattr);
        this.specialty = Instructorattr.specialty;
        this.favLanguage = Instructorattr.favLanguage;
        this.catchPhrase = Instructorattr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
}

// Class Students

class Student extends Person {
    constructor(StudentAttr) {
        super(StudentAttr);
        this.previousBackground = StudentAttr.previousBackground;
        this.className = StudentAttr.className;
        this.favSubjects = StudentAttr.favSubjects;
    }
    listSubjects() {
        console.log(this.favSubjects);
    }
    prassignment(subject) {
        console.log(`The ${Student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge() {
        console.log(`The student has begun sprint challenge on ${subject}.`)
    }
}

// Class Project Managers


// Test People

// Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

// Student
const john = new Student({
    name: 'Daniel',
    location: 'Seattle',
    age: 29,
    gender: 'male',
    previousBackground: 'Bartender',
    className: 'FSW17',
    favSubjects: 'Machine Learning',
});