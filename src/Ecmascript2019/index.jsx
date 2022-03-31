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
