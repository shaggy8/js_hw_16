'use strict';

function Human(options) {
  this.name = options.name;
  this.age = options.age;
  this.sex = options.sex;
  this.height = options.height;
  this.weight = options.weight;
}

function Worker(options) {
  Human.call(this, options);
  this.job = options.job;
  this.salary = options.salary;
}

Worker.prototype = Object.create(Human.prototype)
Worker.prototype.work = function() {
  alert('I\'m work... work... working!');
};

function Student(options) {
  Human.call(this, options);
  this.placeOfStudy = options.placeOfStudy;
  this.stipend = options.stipend;
}

Student.prototype = Object.create(Human.prototype)
Student.prototype.watchShows = function() {
  alert('I\'m watching stupid TV shows...');
};

var hrisha = new Worker({
  name: 'Hrisha',
  age: 35,
  sex: 'male',
  height: 170,
  weight: 80,
  job: 'trainer',
  salary: 12000
});

var anastasia = new Worker({
  name: 'Anastasia',
  age: 34,
  sex: 'female',
  height: 159,
  weight: 65,
  job: 'psychologist',
  salary: 17000
});

var newRoma = new Worker({
  name: 'Roma',
  age: 28,
  sex: 'male',
  height: 177,
  weight: 50,
  job: 'web-developer',
  salary: 25000
});

var oldRoma = new Student({
  name: 'Roma',
  age: 22,
  sex: 'male',
  height: 177,
  weight: 40,
  placeOfStudy: 'OIUHDU',
  stipend: null
});

var slavik = new Student({
  name: 'Slavik',
  age: 25,
  sex: 'male',
  height: 169,
  weight: 83,
  placeOfStudy: 'Kyiv University',
  stipend: 2200
});

var katia = new Student({
  name: 'Katia',
  age: 22,
  sex: 'female',
  height: 165,
  weight: 60,
  placeOfStudy: 'NUFT',
  stipend: 3000
});

console.log(hrisha);
console.log(anastasia);
console.log(newRoma);
console.log(oldRoma);
console.log(slavik);
console.log(katia);

newRoma.work();

console.log(newRoma instanceof Human);
console.log(newRoma instanceof Worker);