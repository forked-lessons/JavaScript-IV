// CODE here for your Lambda Classes

// =================== Classes ===================

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
        let newArr = this.favSubjects.join(" , ")
        console.log(newArr);
    }
    prassignment(subject) {
        console.log(`The ${Student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`The student has begun sprint challenge on ${subject}.`)
    }
}

// Class Project Managers

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        console.log(this.name + "announces to " + channel + "standy times!");
    }
    debugsCode(student) {
        console.log(`${name}'s debugs student}'s code.`)
    }
}

// =================== Test People ===================

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

const daniel = new Student({
    name: 'Daniel',
    location: 'Seattle',
    age: 29,
    gender: 'male',
    previousBackground: 'Bartender',
    className: 'FSW17',
    favSubjects: ['Machine Learning', 'React, and Web Scraping'],
});

// Project Manager

const john = new ProjectManager({
    name: 'John',
    location: 'Austin',
    age: 42,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Machine Learning',
    catchPhrase: `You can pickle that!`,
    gradClassName: 'CS1',
    favInstructor: 'Josh Knell',
});


// =================== Tests ===================

// Instructor

console.log(fred.demo("React"));
console.log(fred.age);
console.log(fred.catchPhrase);

// Student

console.log(daniel.name);
console.log(daniel.previousBackground);
daniel.sprintChallenge('JavaScript');
console.log(daniel.listSubjects());

// Project Manager

console.log(john.name);
console.log(john.catchPhrase);
console.log(john.gradClassName);
console.log(john.debugsCode('john'));
console.log(john.standUp('web17'));

