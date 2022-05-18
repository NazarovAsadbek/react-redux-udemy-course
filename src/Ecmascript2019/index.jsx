// Keywords let и const. Lesson 8.

let myName = 'Asadbek';
myName = 'Asad';

const pi = 3.14;
// pi = 4;  Error const can't be changed

const names = ['Peter', 'Bob'];
names.pop('Peter');


// Arrow-functions. Lesson 9.
function square(x) {
  return x * x
}

const sq = (x) => x * x;

const arr = ['1', '3', '2', '4'];

const res = arr
  .map((el) => parseInt(el))
  .filter((num) => num % 2)
  .reduce((max, value) => Math.max(max, value), 0);

// Default Options in functions. Lesson 10.
function square(x = 10) {
  return x * x
}

const sq = (x = 5) => x * x;


// Rest parameter and Spread. Lesson 11 && 12

function max(...numbers) { // Rest => ...numbers in local varibale
  var number = Array.prototype.slice.call(arguments) // Spread => ...numbers intro functions
  return number
}

// const max = (...numbers) => numbers

max(1, 3,);
max(1, 3, 3, 4, 5, 6);


// Destructuring. Lesson 13
const person = {
  name: {
    first: 'Peter',
    last: 'Smith',
  },
  age: 21,
  role: 'user'
};

// const firstname = person.firstname;
// const lastname = person.lastname;
const {name: {first: firstname, last: lastname}, role = 'admin'} = person;
console.log(firstname, lastname, role);

function connect({
                   host = 'localhost',
                   port = 2904,
                   user = 'guest',
                 }) {
  console.log(host, port, user)
}

connect({host: undefined, port: 3000, guest: undefined} = {});

// Destructuring arrays. Lesson 15
const fib = [1, 1, 2, 3, 5, 8, 13];
const [a, , c, , , , b] = fib;

const line = [[10, 17], [14, 7]]
const [[p1x, p1y], [p2x, p2y]] = line

const people = ['chris', 'sandra', 'bob']
const [a, ...others] = people

const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak'
}
const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key)

const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 15],
    end: [17, 18],
  }
};
const {coordinates: {start: [startX, startY], end: [endX, endY]}} = shape;

// Objects in es2015. Lesson 16
const x = 10, y = 30;
const points = {
  x, y,
  draw(ctx) {
    console.log('draw', ctx)
  }
}

const prefix = '_blah_';
const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 22
}

const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
}
const opts = {
  user: 'John',
  password: 'utopia'
}
const res = Object.assign({}, defaults, opts);

const person = {
  name: 'Bob',
  friends: ['Mark', 'Jacob']
}
const shallowCopy = Object.assign({}, person);
person.friends.push('Jane')


// Object spread for Objects. Lesson 17.
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
}

const opts = {
  user: 'John',
  password: 'utopia'
}
const port = 8080;
const result = Object.assign({}, defaults, opts)
const res = {
  ...defaults,
  ...opts,
  port,
  connect(ctx) {
    return ctx
  }
}

// Prototype. Lesson 18.
function Animals(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animals.prototype.say = function () {
  console.log(this.name, 'goes', this.voice)
}

const dog = new Animals('Dog', 'woof');
const cat = new Animals('Cat', 'meow');
// Object.setPrototypeOf() УЖАСНЫЙ ГОВНОКОД!!! НИКОГДА НЕ ИСПОЛЬЗОВАТЬ!!!

// Classes. Lesson 19
class prot {
  constructor(name2, voice2) {
    this.name2 = name2;
    this.voice2 = voice2;
  }

  say2() {
    return this
  }

  say3() {
    return this
  }
}

class Animal extends prot {
  constructor(name, voice, canFly) {
    super(name, voice, canFly);
    super.say2();
    this.canFly = canFly;
    this.name = name;
    this.voice = voice;
  }

  say() {
    return this
  }
}

const dog = new Animal('duck', 'cra', true);

// Class proporties. Lesson 20
class Counter {
  count = 0;
  inc = () => {
    this.count += Counter.incrementStep;
    console.log(this.count);
  }
  static incrementStep = 2;
}

const cnt = new Counter();
cnt.inc();














