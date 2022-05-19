function add(a, b) {
  return a + b;
}

function substr(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export default class Graph {
  addNode() {
    console.log('node added')
  }
}

console.log('test module')

const PI = 3.1415;

export {
  add, substr, multiply, divide
}
