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
        return `Hello my name is ${this.name}, and I am from ${this.location}.`
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
        console.log(this.name + "announces to " + channel + " : @channel standy time!");
    }
    debugsCode(student, subject) {
        console.log(`${this.name}'s debugs ${student}'s code on ${subject}.`)
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
const laura = new Instructor({
    name: 'Laura',
    location: 'Boone',
    age: 26,
    gender: 'female',
    favLanguage: 'English',
    specialty: 'Friendship',
    catchPhrase: `Whap`
});
const kelsy = new Instructor({
    name: 'Kelsy',
    location: 'Charlotte',
    age: 30,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Yep`
});

// Student

const daniel = new Student({
    name: 'Daniel',
    location: 'Seattle',
    age: 29,
    gender: 'male',
    previousBackground: 'Bartender',
    className: 'FSW17',
    favSubjects: ['Machine Learning', 'React', 'Web Scraping'],
});
const rex = new Student({
    name: 'Rex',
    location: 'North Carolina',
    age: 24,
    gender: 'male',
    previousBackground: 'bum',
    className: 'UX3',
    favSubjects: ['Beautiful Design, A Student of Life'],
});
const cindy = new Student({
    name: 'Cindy',
    location: 'Who Ville',
    age: 6,
    gender: 'female',
    previousBackground: 'Little-Cindy-Loo-Who',
    className: 'Christmas',
    favSubjects: ['Roast Beast, The Grinch, Compassion'],
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
const dwayne = new ProjectManager({
    name: 'The Rock',
    location: 'The Ring',
    age: 42,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Cooking',
    catchPhrase: `can you smell what The Rock is cooking!?`,
    gradClassName: 'WWE',
    favInstructor: 'Stone Cold Steve Austin',
});
const steve = new ProjectManager({
    name: 'Steve Austin',
    location: 'Austin',
    age: 62,
    gender: 'male',
    favLanguage: 'American',
    specialty: 'Stone cold stunner ',
    catchPhrase: `Austin 3:16`,
    gradClassName: 'School of hard knocks',
    favInstructor: 'The Hulkster',
});
// =================== Tests ===================
// Student

console.log(daniel.name);
console.log(daniel.location);
console.log(daniel.age);
console.log(daniel.gender);
console.log(daniel.previousBackground);
console.log(daniel.className);
console.log(daniel.favSubjects);
console.log(daniel.speak());
daniel.listSubjects();
daniel.prassignment('JavaScript-IV');
daniel.sprintChallenge('Javascript-IV');

console.log(rex.name);
console.log(rex.location);
console.log(rex.age);
console.log(rex.gender);
console.log(rex.previousBackground);
console.log(rex.className);
console.log(rex.favSubjects);
console.log(rex.speak());
rex.listSubjects();
rex.prassignment('JavaScript-IV');
rex.sprintChallenge('Javascript-IV');

console.log(cindy.name);
console.log(cindy.location);
console.log(cindy.age);
console.log(cindy.gender);
console.log(cindy.previousBackground);
console.log(cindy.className);
console.log(cindy.favSubjects);
console.log(cindy.speak());
cindy.listSubjects();
cindy.prassignment('JavaScript-IV');
cindy.sprintChallenge('Javascript-IV');

// Instructor

console.log(fred.name);
console.log(fred.location);
console.log(fred.age);
console.log(fred.gender);
console.log(fred.favLanguage);
console.log(fred.specialty);
console.log(fred.catchPhrase);
fred.demo("React");

console.log(laura.name);
console.log(laura.location);
console.log(laura.age);
console.log(laura.gender);
console.log(laura.favLanguage);
console.log(laura.specialty);
console.log(laura.catchPhrase);
laura.demo("React");

console.log(kelsy.name);
console.log(kelsy.location);
console.log(kelsy.age);
console.log(kelsy.gender);
console.log(kelsy.favLanguage);
console.log(kelsy.specialty);
console.log(kelsy.catchPhrase);
kelsy.demo("React");

// Project Manager

console.log(john.name);
console.log(john.location);
console.log(john.age);
console.log(john.gender);
console.log(john.favLanguage);
console.log(john.specialty);
console.log(john.catchPhrase);
console.log(john.gradClassName);
console.log(john.favInstructor);
console.log(john.speak());
john.debugsCode(daniel.name, daniel.favSubjects[0]);
john.standUp('Web17');


console.log(dwayne.name);
console.log(dwayne.location);
console.log(dwayne.age);
console.log(dwayne.gender);
console.log(dwayne.favLanguage);
console.log(dwayne.specialty);
console.log(dwayne.catchPhrase);
console.log(dwayne.gradClassName);
console.log(dwayne.favInstructor);
console.log(dwayne.speak());
dwayne.debugsCode(daniel.name, daniel.favSubjects[1]);
dwayne.standUp('Web17');


console.log(steve.name);
console.log(steve.location);
console.log(steve.age);
console.log(steve.gender);
console.log(steve.favLanguage);
console.log(steve.specialty);
console.log(steve.catchPhrase);
console.log(steve.gradClassName);
console.log(steve.favInstructor);
console.log(steve.speak());
steve.debugsCode(daniel.name, daniel.favSubjects[2]);
steve.standUp('Web17');

